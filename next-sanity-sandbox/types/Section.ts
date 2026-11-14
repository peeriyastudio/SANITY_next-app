import { landingPage, heroSection, testimonialSection, ctaSection } from "@/sanity/schemas/landing-schema";
export type HeroSectionData = {
  _type: "heroSection";
  _key: string;
  variant?: "centered" | "split";
  heading: string;
  subheading?: string;
  image?: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

export type TestimonialSectionData = {
  _type: "testimonialSection";
  _key: string;
  quote: string;
  name: string;
  role?: string;
};

export type CtaSectionData = {
  _type: "ctaSection";
  _key: string;
  heading: string;
  text?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

export type Section = HeroSectionData | TestimonialSectionData | CtaSectionData;

export type LandingPage = {
  title: string;
  sections: Section[];
};