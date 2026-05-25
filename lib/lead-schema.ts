import { z } from "zod";

// Single source of truth for the /hire form. Imported by both the client form
// (components/forms/HireForm.tsx) and the API route (app/api/lead/route.ts) so
// validation rules can never drift between the two.

export const PROJECT_TYPES = ["Brand", "Web", "Video", "Digital", "Other"] as const;
export const BUDGET_RANGES = [
  "$5-15K",
  "$15-50K",
  "$50K+",
  "Retainer",
  "Not sure yet",
] as const;
export const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "Flexible"] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().min(2, "Please enter your company."),
  email: z.string().trim().email("Please enter a valid email address."),
  projectType: z
    .array(z.enum(PROJECT_TYPES))
    .min(1, "Please pick at least one project type."),
  budgetRange: z.enum(BUDGET_RANGES, {
    errorMap: () => ({ message: "Please pick a budget range." }),
  }),
  timeline: z.enum(TIMELINES, {
    errorMap: () => ({ message: "Please pick a timeline." }),
  }),
  description: z
    .string()
    .trim()
    .min(30, "Please give us at least 30 characters so we can respond well."),
  referralSource: z.string().trim().max(200).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
