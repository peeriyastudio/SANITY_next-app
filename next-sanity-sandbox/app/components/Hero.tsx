import { Hero as HeroData } from "@/types/Hero";

type HeroProps = { hero: HeroData | null };

export default function Hero({ hero }: HeroProps) {
  return (
    <header
      id="about"
      className="flex flex-col items-center gap-4 pt-[5%] pb-[5%] text-center"
    >
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
        {hero?.heading ?? "Sample Projects"}
      </h1>
      <p className="font-sans font-medium text-xl text-brand-orange dark:text-brand-teal text-balance">
        {hero?.tagline ?? "Sample builds, managed in Sanity and rendered in Next.js."}
      </p>
    </header>
  );
}