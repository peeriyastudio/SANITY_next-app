"use server";

import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z
  .string()
  .trim()
  .max(30, "Phone number is too long")
  .regex(/^[0-9+\-().\s]+$/, "Use numbers and + - ( ) . only")
  .refine((v) => (v.match(/\d/g) ?? []).length >= 7, "Phone number is too short")
  .optional(),
  subject: z.enum(["project", "collaboration", "other"]).optional(),
  message: z.string().trim().min(10, "Message is too short").max(5000, "Message is too long"),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof schema> | "consent", string>>;
};

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const success: ContactState = {
    status: "success",
    message: "Demo only: your message passed validation but was not sent anywhere.",
  };

  if (field(formData, "company")) return success;

  const parsed = schema.safeParse({
    firstName: field(formData, "firstName"),
    lastName: field(formData, "lastName"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    subject: field(formData, "subject"),
    message: field(formData, "message"),
  });

  const errors: ContactState["errors"] = {};
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactState["errors"]>;
      errors[key] ??= issue.message;
    }
  }
  if (formData.get("consent") !== "on") errors.consent = "Please confirm to continue";

  if (!parsed.success || errors.consent) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  return success;
}