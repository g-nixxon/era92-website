"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import {
  FOCUS_AREAS,
  INVESTMENT_RANGES,
  ORG_TYPES,
  partnerSchema,
  type PartnerInput,
} from "@/lib/lead-schema";

// Lives in a centered cream section per spec. Visual differences from HireForm:
// - Section background is cream (not charcoal), so labels are charcoal not cream.
// - Inputs stay light (consistent with the brand "form field" look).
// - Error text stays orange.

const LABEL = "block text-sm font-medium text-charcoal mb-2";
const INPUT =
  "w-full bg-stone-100 border border-stone-300 text-charcoal placeholder:text-stone-600 rounded-md px-4 py-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors";
const ERROR = "text-orange text-sm mt-1";
const FIELDSET_LEGEND = "block text-sm font-medium text-charcoal mb-3";

export function PartnerForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerInput>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      source: "partner",
      name: "",
      organization: "",
      email: "",
      focusArea: [],
      message: "",
    },
  });

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="bg-stone-100 border border-stone-300 rounded-lg p-8 flex flex-col gap-4"
      >
        <CheckCircle2 size={36} className="text-orange" aria-hidden="true" />
        <p className="font-display text-2xl text-charcoal leading-snug">
          Thanks for reaching out. We&rsquo;d love to start the conversation.
        </p>
        <p className="font-body text-sm text-stone-600">
          Trinity will follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitState("idle");
          }}
          className="self-start mt-2 text-sm font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
        >
          Send another note
        </button>
      </div>
    );
  }

  const onSubmit = async (data: PartnerInput) => {
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
        <label htmlFor="partner-name" className={LABEL}>
          Your name
        </label>
        <input
          id="partner-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "partner-name-error" : undefined}
          className={INPUT}
          {...register("name")}
        />
        {errors.name && (
          <p id="partner-name-error" className={ERROR}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-organization" className={LABEL}>
          Organization
        </label>
        <input
          id="partner-organization"
          type="text"
          autoComplete="organization"
          aria-invalid={errors.organization ? "true" : "false"}
          aria-describedby={errors.organization ? "partner-organization-error" : undefined}
          className={INPUT}
          {...register("organization")}
        />
        {errors.organization && (
          <p id="partner-organization-error" className={ERROR}>
            {errors.organization.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>Organization type</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ORG_TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="radio"
                value={type}
                className="accent-orange w-4 h-4"
                {...register("organizationType")}
              />
              <span className="text-charcoal text-sm font-medium">{type}</span>
            </label>
          ))}
        </div>
        {errors.organizationType && (
          <p className={ERROR}>{errors.organizationType.message}</p>
        )}
      </fieldset>

      <div>
        <label htmlFor="partner-email" className={LABEL}>
          Email
        </label>
        <input
          id="partner-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "partner-email-error" : undefined}
          className={INPUT}
          {...register("email")}
        />
        {errors.email && (
          <p id="partner-email-error" className={ERROR}>
            {errors.email.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>Focus area</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {FOCUS_AREAS.map((area) => (
            <label
              key={area}
              className="flex items-center gap-3 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="checkbox"
                value={area}
                className="accent-orange w-4 h-4"
                {...register("focusArea")}
              />
              <span className="text-charcoal text-sm font-medium">{area}</span>
            </label>
          ))}
        </div>
        {errors.focusArea && (
          <p className={ERROR}>{errors.focusArea.message as string}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className={FIELDSET_LEGEND}>
          Investment range <span className="text-stone-600 font-normal">(optional)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {INVESTMENT_RANGES.map((range) => (
            <label
              key={range}
              className="flex items-center gap-3 bg-stone-100 border border-stone-300 rounded-md px-4 py-3 cursor-pointer hover:border-orange/60 transition-colors"
            >
              <input
                type="radio"
                value={range}
                className="accent-orange w-4 h-4"
                {...register("investmentRange")}
              />
              <span className="text-charcoal text-sm font-medium">{range}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="partner-message" className={LABEL}>
          What draws you to era92?
        </label>
        <textarea
          id="partner-message"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "partner-message-error" : undefined}
          className={INPUT}
          placeholder="Tell us a bit about your work and why this lands for you."
          {...register("message")}
        />
        {errors.message && (
          <p id="partner-message-error" className={ERROR}>
            {errors.message.message}
          </p>
        )}
      </div>

      {submitState === "error" && (
        <div
          role="alert"
          className="bg-orange/10 border border-orange/40 text-charcoal rounded-md px-4 py-3 text-sm"
        >
          Something went wrong. Please email{" "}
          <a
            href="mailto:trinity@era92.com"
            className="underline decoration-orange underline-offset-4 decoration-2"
          >
            trinity@era92.com
          </a>{" "}
          directly.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-body font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-charcoal bg-orange text-cream hover:bg-orange/90 text-lg px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Start the Conversation"}
        </button>
      </div>
    </form>
  );
}
