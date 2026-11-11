import { getProjects, getHero } from "@/sanity/sanity-utils";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import PageNav from "./components/PageNav";
export const revalidate = 60;

export default async function Home() {
  const [projects, hero] = await Promise.all([getProjects(), getHero()]);
  return (
    <main className="mx-auto w-[95%] max-w-7xl py-12 md:py-16 lg:py-20">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-[5%] gap-[6rem] sm:p-12 font-[family-name:var(--font-geist-sans)]">
        <Hero hero={hero} />
        <ProjectCard initialProjects={projects} />
      </div>
      <PageNav
        items={[
          {
            href: "https://www.peeriyastudio.com",
            label: "Back to Peeriya Creative Studio",
            icon: "/arrow-left.svg",
            external: true,
          },
        ]}
      />
    </main>
  );
}
