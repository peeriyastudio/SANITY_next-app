import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-center">Web Development Projects</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          A simple Next.js + Sanity starter project.
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <div key={project._id} className="max-w-2xl p-4 border rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="mb-4 rounded"
              />
            )}
            <p className="mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Project
            </a>
          </div>
        ))} 
      </div>
    </div>
  );
}
