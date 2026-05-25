"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINES,
  leadSchema,
  type LeadInput,
} from "@/lib/lead-schema";

// Styling notes
// - This form lives on the charcoal BriefFormSection background, so labels are
//   text-cream and inputs are bg-stone-100 (light) for contrast + readability.
// - Error messages use text-orange (small, approved orange surface per the
//   orange usage rules).
// - Submit button uses our shared Button primary variant; disabled state
//   handled by Tailwind's disabled: variant.

const LABEL = "block text-sm font-medium text-cream mb-2";
const INPUT =
  "w-full bg-stone-100 border border-stone-300 text-charcoal placeholder:text-stone-600 rounded-md px-4 py-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors";
const ERROR = "text-orange text-sm mt-1";
const FIELDSET_LEGEND = "block text-sm font-medium text-cream mb-3";

export function HireForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      projectType: [],
      description: "",
      referralSource: "",
    },
  });

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="bg-charcoal border border-stone-600/40 rounded-lg p-8 flex flex-col gap-4"
      >
        <CheckCircle2 size={36} className="text-orange" aria-hidden="true" />
        <p className="font-display text-2xl text-cream leading-snug">
          Thanks! We&rsquo;ll respond within one business day.
        </p>
        <p className="font-body text-sm text-cream/70">
          &mdash; Trinity
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitState("idle");
          }}
          className="self-start mt-2 text-sm font-body text-cream/70 hover:text-cream underline decoration-orange underline-offset-4 decoration-2"
        >
          Send another brief
        </button>
      </div>
    );
  }

  const onSubmit = async (data: LeadInput) => {
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="hire-name" className={LABEL}>
          Your name
        </label>
        <input
          id="hire-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "hire-name-error" : undefined}
          className={INPUT}
          {...register("name")}
        />
        {errors.name && (
          <p id="hire-name-error" className={ERROR}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="hire-company" className={LABEL}>
          Company
        </label>
        <input
          id="hire-company"
          type="text"
          autoComplete="organization"
          aria-invalid={errors.company ? "true" : "false"}
          aria-describedby={errors.company ? "hire-company-error" : undefined}
          className={INPUT}
          {...register("company")}
        />
        {errors.company && (
          <p id="hire-company-error" className={ERROR}>
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="hire-email" className={LABEL}>
          Work email
        </label>
        <input
          id="hire-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "hire-email-error" : undefined}
          className={INPUT}
          {...register("email")}
        />
        {errors.email && (
          <p id="hire-email-error" className={ERROR}>
            {errors.email.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>Project type</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PROJECT_TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="checkbox"
                value={type}
                className="accent-orange w-4 h-4"
                {...register("projectType")}
              />
              <span className="text-charcoal text-sm font-medium">{type}</span>
            </label>
          ))}
        </div>
        {errors.projectType && (
          <p className={ERROR}>{errors.projectType.message as string}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>Budget range</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {BUDGET_RANGES.map((range) => (
            <label
              key={range}
              className="flex items-center gap-3 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="radio"
                value={range}
                className="accent-orange w-4 h-4"
                {...register("budgetRange")}
              />
              <span className="text-charcoal text-sm font-medium">{range}</span>
            </label>
          ))}
        </div>
        {errors.budgetRange && <p className={ERROR}>{errors.budgetRange.message}</p>}
      </fieldset>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>Timeline</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIMELINES.map((t) => (
            <label
              key={t}
              className="flex items-center gap-2 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="radio"
                value={t}
                className="accent-orange w-4 h-4"
                {...register("timeline")}
              />
              <span className="text-charcoal text-sm font-medium">{t}</span>
            </label>
          ))}
        </div>
        {errors.timeline && <p className={ERROR}>{errors.timeline.message}</p>}
      </fieldset>

      <div>
        <label htmlFor="hire-description" className={LABEL}>
          Tell us about your project
        </label>
        <textarea
          id="hire-description"
          rows={5}
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={errors.description ? "hire-description-error" : undefined}
          className={INPUT}
          placeholder="What are you trying to ship? What does success look like?"
          {...register("description")}
        />
        {errors.description && (
          <p id="hire-description-error" className={ERROR}>
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="hire-referral" className={LABEL}>
          How did you hear about us? <span className="text-cream/50 font-normal">(optional)</span>
        </label>
        <input
          id="hire-referral"
          type="text"
          className={INPUT}
          {...register("referralSource")}
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
          directly and we&rsquo;ll respond by end of day.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-body font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-cream bg-orange text-cream hover:bg-orange/90 text-lg px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Brief"}
        </button>
      </div>
    </form>
  );
}
