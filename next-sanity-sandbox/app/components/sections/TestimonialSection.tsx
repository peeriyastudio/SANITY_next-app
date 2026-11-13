import { TestimonialSectionData } from "@/types/Section";

export default function TestimonialSection({
  quote,
  name,
  role,
}: TestimonialSectionData) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-14">
      <figure className="text-center">
        <blockquote className="text-xl font-medium leading-relaxed text-balance md:text-2xl">
          <p>&ldquo;{quote}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-6 text-base text-zinc-600 dark:text-zinc-300">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {name}
          </span>
          {role && <span>, {role}</span>}
        </figcaption>
      </figure>
    </section>
  );
}