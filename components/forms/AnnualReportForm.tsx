"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Download } from "lucide-react";
import {
  annualReportSchema,
  type AnnualReportInput,
} from "@/lib/lead-schema";

// Sits on the charcoal AnnualReportGate section of /impact. Same visual
// language as HireForm/ContactForm (light inputs on dark bg, orange focus,
// orange error text). Posts source='annual-report' so Trinity can filter
// these submissions into a "report downloaded" segment.
//
// Success state exposes a direct PDF link in addition to the "check your
// email" copy — per spec, this lets development + testing actually open the
// file. In production the email containing the link is what readers use.

const REPORT_PDF_URL = "/reports/era92-2024-annual-report.pdf";
const LABEL = "block text-sm font-medium text-cream mb-2";
const INPUT =
  "w-full bg-stone-100 border border-stone-300 text-charcoal placeholder:text-stone-600 rounded-md px-4 py-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors";
const ERROR = "text-orange text-sm mt-1";

export function AnnualReportForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AnnualReportInput>({
    resolver: zodResolver(annualReportSchema),
    defaultValues: {
      source: "annual-report",
      name: "",
      email: "",
      organization: "",
    },
  });

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="bg-charcoal border border-stone-600/40 rounded-lg p-8 flex flex-col gap-5"
      >
        <CheckCircle2 size={36} className="text-orange" aria-hidden="true" />
        <div>
          <p className="font-display text-2xl text-cream leading-snug">
            Check your email &mdash; the report is on its way.
          </p>
          <p className="mt-3 font-body text-sm text-cream/70">
            Or grab it directly:
          </p>
        </div>
        <a
          href={REPORT_PDF_URL}
          className="inline-flex items-center gap-2 self-start font-body text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
          download
        >
          <Download size={16} aria-hidden="true" />
          era92 2024 Annual Report (PDF)
        </a>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitState("idle");
          }}
          className="self-start mt-1 text-xs font-body text-cream/60 hover:text-cream underline decoration-orange underline-offset-4 decoration-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const onSubmit = async (data: AnnualReportInput) => {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="ar-name" className={LABEL}>
          Your name
        </label>
        <input
          id="ar-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "ar-name-error" : undefined}
          className={INPUT}
          {...register("name")}
        />
        {errors.name && (
          <p id="ar-name-error" className={ERROR}>
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="ar-email" className={LABEL}>
          Email
        </label>
        <input
          id="ar-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "ar-email-error" : undefined}
          className={INPUT}
          {...register("email")}
        />
        {errors.email && (
          <p id="ar-email-error" className={ERROR}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="ar-org" className={LABEL}>
          Organization <span className="text-cream/50 font-normal">(optional)</span>
        </label>
        <input
          id="ar-org"
          type="text"
          autoComplete="organization"
          className={INPUT}
          {...register("organization")}
        />
      </div>

      {submitState === "error" && (
        <div
          role="alert"
          className="bg-orange/10 border border-orange/40 text-cream rounded-md px-4 py-3 text-sm"
        >
          Something went wrong. Please email{" "}
          <a
            href="mailto:trinity@era92.com"
            className="underline decoration-orange underline-offset-4 decoration-2"
          >
            trinity@era92.com
          </a>{" "}
          for the report directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-body font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-cream bg-orange text-cream hover:bg-orange/90 text-base px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send me the report"}
      </button>
    </form>
  );
}
