"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "../contact/actions";

const fieldClass =
  "w-full rounded-2xl bg-[#eaeaea]/50 px-5 py-4 font-sans text-sm text-zinc-900 placeholder:text-zinc-500 transition-colors duration-150 hover:bg-[#d4d4d4]/60 focus:outline-none focus:bg-[#d4d4d4] dark:bg-zinc-800/50 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:hover:bg-zinc-800/70 dark:focus:bg-zinc-800";

const labelClass = "mb-2 block pl-5 font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100";

const optional = <span className="font-sans font-normal text-zinc-500"> (optional)</span>;

const initialState: ContactState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 pl-5 font-sans font-semibold text-xs tracking-wide text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-2xl bg-zinc-900 px-5 py-4 font-heading text-lg font-semibold text-white transition-colors duration-150 hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-zinc-900 dark:disabled:hover:bg-zinc-100 md:col-span-2"
    >
      {pending ? "Sending…" : "Submit"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="mx-auto max-w-3xl rounded-2xl bg-[#eaeaea]/50 px-6 py-8 text-center font-sans dark:bg-zinc-800/50">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="mx-auto grid w-full max-w-3xl gap-x-6 gap-y-5 md:grid-cols-2">

      {state.status === "error" && state.message && (
        <p role="alert" className="pl-5 font-sans font-semibold text-[1rem] tracking-wide text-red-600 dark:text-red-400 md:col-span-2">
          ⚠️ {state.message}
        </p>
      )}

      <div>
        <label htmlFor="firstName" className={labelClass}>First Name</label>
        <input id="firstName" name="firstName" type="text" autoComplete="given-name" required maxLength={100} placeholder="Jane" aria-invalid={!!e.firstName} aria-describedby={e.firstName ? "firstName-error" : undefined} className={fieldClass} />
        <FieldError id="firstName-error" message={e.firstName} />
      </div>

      <div>
        <label htmlFor="lastName" className={labelClass}>Last Name</label>
        <input id="lastName" name="lastName" type="text" autoComplete="family-name" required maxLength={100} placeholder="Doe" aria-invalid={!!e.lastName} aria-describedby={e.lastName ? "lastName-error" : undefined} className={fieldClass} />
        <FieldError id="lastName-error" message={e.lastName} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} placeholder="jane@example.com" aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} className={fieldClass} />
        <FieldError id="email-error" message={e.email} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number{optional}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="1-604-555-0123" aria-invalid={!!e.phone} aria-describedby={e.phone ? "phone-error" : undefined} className={fieldClass} />
        <FieldError id="phone-error" message={e.phone} />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="subject" className={labelClass}>Subject{optional}</label>
        <div className="relative">
          <select id="subject" name="subject" defaultValue="" className={`${fieldClass} appearance-none pr-12`}>
            <option value="">Choose a topic</option>
            <option value="project">New project</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Something else</option>
          </select>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className={labelClass}>Your Message</label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} placeholder="Tell me about your project" aria-invalid={!!e.message} aria-describedby={e.message ? "message-error" : undefined} className={`${fieldClass} resize-none rounded-3xl px-6 py-5`} />
        <FieldError id="message-error" message={e.message} />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="md:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 pl-5">
          <span className="relative flex shrink-0">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={!!e.consent}
              aria-describedby={e.consent ? "consent-error" : undefined}
              className="peer block h-6 w-6 cursor-pointer appearance-none rounded-md bg-[#eaeaea]/50 transition-colors duration-150 checked:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:bg-zinc-800/50 dark:checked:bg-zinc-100 dark:focus-visible:ring-zinc-100"
            />
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-white opacity-0 peer-checked:opacity-100 dark:text-zinc-900">
              <path d="M5 12l5 5L19 7" />
            </svg>
          </span>
          <span className="font-sans text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            I agree to be contacted about my inquiry. My information will not be shared.
          </span>
        </label>
        <FieldError id="consent-error" message={e.consent} />
      </div>

      <SubmitButton />
    </form>
  );
}