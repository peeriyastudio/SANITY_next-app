"use client";

import { useRouter } from "next/navigation";
import type { Section } from "@/types/Section";

const typeLabels: Record<Section["_type"], string> = {
  heroSection: "Hero",
  testimonialSection: "Testimonial",
  ctaSection: "Call to Action",
};

function label(section: Section) {
  const detail = section._type === "testimonialSection" ? section.name : section.heading;
  return `${typeLabels[section._type]}: ${detail}`;
}

export default function SectionPicker({ sections, activeKey }: { sections: Section[]; activeKey: string }) {
  const router = useRouter();

  return (
    <div className="mx-auto mt-[2%] w-[85%] max-w-6xl rounded-xl bg-[#eaeaea]/70 px-4 py-4 md:py-6 lg:py-8 text-center dark:bg-zinc-800/50">
      <label
        htmlFor="section-picker"
        className="font-heading font-semibold text-sm uppercase tracking-wide"
      >
        View Section
      </label>
      <div className="m-2 flex flex-wrap items-center justify-center gap-2">
        <select
          id="section-picker"
          value={activeKey}
          onChange={(e) => router.push(`?section=${e.target.value}`, { scroll: false })}
          className="appearance-none rounded-lg border-0 bg-white py-2 pl-4 pr-10 font-sans text-sm text-black transition-colors duration-150 hover:bg-neutral-200 focus:outline-none"
        >
          {sections.map((section) => (
            <option key={section._key} value={section._key}>
              {label(section)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}