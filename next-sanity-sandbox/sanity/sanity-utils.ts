import { Project } from "@/types/Project";
import { Hero } from "@/types/Hero";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "rpmoy997",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      url,
      content,
      tools
    }`
  );
}

export async function getHero(): Promise<Hero | null> {
  return client.fetch(
    groq`*[_type == "hero"] | order(_updatedAt desc)[0]{
      heading,
      tagline
    }`
  );
}