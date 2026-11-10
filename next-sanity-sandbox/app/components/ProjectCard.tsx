"use client";

import Image from "next/image";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/Project";
import type { PortableTextBlock } from "@portabletext/react";

interface ProjectCardProps {
  initialProjects: Project[];
}

export default function ProjectCard({ initialProjects }: ProjectCardProps) {
  return (
    <div id="projects" className="w-full max-w-2xl flex flex-col gap-8">
      {initialProjects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasContent = Boolean(project.content?.length);
  const buttonClass = "inline-flex items-center font-heading tracking-wider uppercase text-xs font-bold px-5 py-2.5 rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white dark:border-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900";

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 hover:shadow-md">
      {project.image && (
        <div className="relative overflow-hidden w-full h-[320px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
          />
        </div>
      )}

      <div className="p-6">
        <h2 className="font-heading text-3xl font-bold tracking-wide text-zinc-900 dark:text-zinc-100 mb-4">
          {project.title}
        </h2>
        <p className="font-sans text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="border-t border-gray-100 dark:border-zinc-800/60 pt-4">
          <div className="flex flex-wrap gap-3">
            {hasContent && (
              <button
                type="button"
                onClick={() => setIsOpen((o) => !o)}
                aria-expanded={isOpen}
                aria-controls={`details-${project._id}`}
                className={buttonClass}
              >
                {isOpen ? "Hide details ➖" : "Show details ➕"}
              </button>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass} group/link inline-flex items-center`}
            >
              Live Project ↗️
            </a>
          </div>

          {hasContent && (
            <div
              id={`details-${project._id}`}
              className={`grid w-full transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 invisible"
              }`}
            >
              <div className="overflow-hidden">
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none text-left bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-lg">
                  <PortableText value={project.content!} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}