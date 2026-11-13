import Image from "next/image";
import Link from "next/link";
import { HeroSectionData } from "@/types/Section";

const buttonClasses =
  "inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-white";

export default function HeroSection({
  variant = "centered",
  heading,
  subheading,
  image,
  imageAlt,
  buttonLabel,
  buttonLink,
}: HeroSectionData) {
  const isSplit = variant === "split";
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
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div
        className={
          isSplit
            ? "grid items-center gap-10 md:grid-cols-2"
            : "flex flex-col items-center gap-10 text-center"
        }
      >
        <div className={isSplit ? "" : "max-w-3xl"}>
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 md:text-xl">
              {subheading}
            </p>
          )}
          {button && <div className="mt-8">{button}</div>}
        </div>

        {image && (
          <div
            className={`relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 ${
              isSplit ? "" : "max-w-4xl"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              sizes={isSplit ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 896px, 100vw"}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}