import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PageIntro from "./PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-[90%] sm:w-[95%] max-w-7xl py-8 md:py-12 lg:py-16">
      <PageIntro />
      <header className="mx-auto mb-8 max-w-3xl pl-5 md:mb-12">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">Contact</h1>
        <p className="mt-4 font-sans text-zinc-600 dark:text-zinc-400">
          Tell me about your project and I will get back to you within two business days.
        </p>
      </header>

      <ContactForm />
    </main>
  );
}