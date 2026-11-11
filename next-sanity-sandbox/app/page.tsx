import { getProjects, getHero } from "@/sanity/sanity-utils";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
export const revalidate = 60;

export default async function Home() {
  const [projects, hero] = await Promise.all([getProjects(), getHero()]);
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-[5%] gap-[6rem] sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Hero hero={hero} />
        <ProjectCard initialProjects={projects} />
      </div>
    </main>
  );
}
