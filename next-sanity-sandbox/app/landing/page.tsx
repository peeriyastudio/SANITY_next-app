import { getLandingPage } from "@/sanity/sanity-utils";
import PageInfo from "../components/sections/PageInfo";
import SectionRenderer from "../components/sections/SectionRenderer";
import SectionPicker from "../components/sections/SectionPicker";
import type { Section } from "@/types/Section";

export const revalidate = 60;

type Props = { searchParams: { section?: string } };

export default async function LandingPage({ searchParams }: Props) {
  let page: Awaited<ReturnType<typeof getLandingPage>> | null = null;
  try {
    page = await getLandingPage();
  } catch (error) {
    console.error("Failed to fetch landing page:", error);
  }

  if (!page?.sections?.length) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">📄 Landing page demo</h1>
        <p className="font-sans mt-4">No landing page is published yet.</p>
      </main>
    );
  }

  const active = page.sections.find((s: Section) => s._key === searchParams.section) ?? page.sections[0];

  return (
    <main>
      <PageInfo />
      <SectionPicker sections={page.sections} activeKey={active._key} />
      <div className="mt-6">
        <SectionRenderer sections={[active]} />
      </div>
    </main>
  );
}