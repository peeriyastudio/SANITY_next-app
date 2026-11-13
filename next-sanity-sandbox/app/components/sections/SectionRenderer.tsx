import { Section } from "@/types/Section";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import CtaSection from "./CtaSection";

type SectionRendererProps = { sections?: Section[] };

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "heroSection":
            return <HeroSection key={section._key} {...section} />;
          case "testimonialSection":
            return <TestimonialSection key={section._key} {...section} />;
          case "ctaSection":
            return <CtaSection key={section._key} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}