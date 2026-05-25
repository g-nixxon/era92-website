"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/lead-schema";

// Same visual language as HireForm (charcoal bg, stone-100 inputs, orange focus,
// orange error text). Fewer fields, simpler submit. Posts source='contact' so
// Trinity can filter contact-page submissions separately from /hire briefs.

const LABEL = "block text-sm font-medium text-cream mb-2";
const INPUT =
  "w-full bg-stone-100 border border-stone-300 text-charcoal placeholder:text-stone-600 rounded-md px-4 py-3 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors";
const ERROR = "text-orange text-sm mt-1";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      source: "contact",
      name: "",
      email: "",
      subject: "",
      message: "",
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
          Thanks! We&rsquo;ll get back to you within one business day.
        </p>
        <p className="font-body text-sm text-cream/70">&mdash; Trinity</p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitState("idle");
          }}
          className="self-start mt-2 text-sm font-body text-cream/70 hover:text-cream underline decoration-orange underline-offset-4 decoration-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const onSubmit = async (data: ContactInput) => {
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
        <label htmlFor="contact-name" className={LABEL}>
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={INPUT}
          {...register("name")}
        />
        {errors.name && (
          <p id="contact-name-error" className={ERROR}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={LABEL}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={INPUT}
          {...register("email")}
        />
        {errors.email && (
          <p id="contact-email-error" className={ERROR}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className={LABEL}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={INPUT}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="contact-subject-error" className={ERROR}>
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={INPUT}
          placeholder="What's on your mind?"
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className={ERROR}>
            {errors.message.message}
          </p>
        )}
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
          directly.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-body font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-cream bg-orange text-cream hover:bg-orange/90 text-lg px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
