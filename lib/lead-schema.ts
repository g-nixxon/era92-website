import { z } from "zod";

// Single source of truth for all three lead forms (Hire, Contact, Partner)
// AND the /api/lead route. Each form validates with its own schema; the route
// picks the right one based on the `source` field. Changing a validation rule
// here updates both client error messages and server-side rejection.

// ---------- Hire enums ----------
export const PROJECT_TYPES = ["Brand", "Web", "Video", "Digital", "Other"] as const;
export const BUDGET_RANGES = [
  "$5-15K",
  "$15-50K",
  "$50K+",
  "Retainer",
  "Not sure yet",
] as const;
export const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "Flexible"] as const;

// ---------- Partner enums ----------
export const ORG_TYPES = [
  "Foundation",
  "Family Office",
  "Investor",
  "Church",
  "Individual",
  "Other",
] as const;
export const FOCUS_AREAS = ["Investment", "Grant", "Practitioner"] as const;
export const INVESTMENT_RANGES = [
  "Under $25K",
  "$25K-$100K",
  "$100K-$500K",
  "$500K+",
  "Prefer not to say",
] as const;

// ---------- Shared field helpers ----------
const nameField = z.string().trim().min(2, "Please enter your name.");
const emailField = z.string().trim().email("Please enter a valid email address.");

// ---------- Source literals ----------
export const SOURCES = ["hire", "contact", "partner"] as const;
export type LeadSource = (typeof SOURCES)[number];

// ---------- Hire ----------
export const hireSchema = z.object({
  source: z.literal("hire"),
  name: nameField,
  company: z.string().trim().min(2, "Please enter your company."),
  email: emailField,
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

// ---------- Contact ----------
export const contactSchema = z.object({
  source: z.literal("contact"),
  name: nameField,
  email: emailField,
  subject: z.string().trim().min(2, "Please enter a subject."),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters."),
});

// ---------- Partner ----------
export const partnerSchema = z.object({
  source: z.literal("partner"),
  name: nameField,
  organization: z.string().trim().min(2, "Please enter your organization."),
  organizationType: z.enum(ORG_TYPES, {
    errorMap: () => ({ message: "Please pick an organization type." }),
  }),
  email: emailField,
  focusArea: z
    .array(z.enum(FOCUS_AREAS))
    .min(1, "Please pick at least one focus area."),
  investmentRange: z.enum(INVESTMENT_RANGES).optional(),
  message: z
    .string()
    .trim()
    .min(30, "Please give us at least 30 characters."),
});

// ---------- Envelope (used by /api/lead) ----------
// Discriminated by `source` so TypeScript narrows to the right shape after parsing.
export const leadSchema = z.discriminatedUnion("source", [
  hireSchema,
  contactSchema,
  partnerSchema,
]);

export type HireInput = z.infer<typeof hireSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type LeadInput = z.infer<typeof leadSchema>;

// Map for "I have a source string, give me the schema" in the route handler.
export const schemaBySource = {
  hire: hireSchema,
  contact: contactSchema,
  partner: partnerSchema,
} as const;
