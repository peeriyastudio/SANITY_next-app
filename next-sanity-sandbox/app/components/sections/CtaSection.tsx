import Link from "next/link";
import { CtaSectionData } from "@/types/Section";

const buttonClasses =
  "font-heading inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function CtaSection({
  heading,
  text,
  buttonLabel,
  buttonLink,
}: CtaSectionData) {
  const isExternal = buttonLink?.startsWith("http");

  const button =
    buttonLabel && buttonLink ? (
      isExternal ? (
        <a href={buttonLink} className={buttonClasses}>
          {buttonLabel}
        </a>
      ) : (
        <Link href={buttonLink} className={buttonClasses}>
          {buttonLabel}
        </Link>
      )
    ) : null;

  return (
    <section id="reserve" className="mx-auto max-w-4xl scroll-mt-8 px-6 py-16 md:py-24">
      <div className="rounded-2xl bg-neutral-600 px-6 py-12 text-center text-white dark:bg-neutral-700 md:px-12 md:py-16">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {heading}
        </h2>
        {text && (
          <p className="font-sans mx-auto mt-4 max-w-2xl text-lg text-neutral-200">{text}</p>
        )}
        {button && <div className="mt-8">{button}</div>}
      </div>
    </section>
  );
}