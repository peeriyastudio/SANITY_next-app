import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./components/ProjectCard";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-[5%] gap-[6rem] sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center gap-4 pt-[5%] pb-[5%]">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-center">Web Development Projects</h1>
          <p className="font-sans font-medium text-xl text-center text-brand-orange dark:text-brand-teal">
            A simple Next.js + Sanity starter project.
          </p>
        </div>
        <ProjectCard initialProjects={projects} />
      </div>
    </main>
  );
}
