import { getLandingPage } from "@/sanity/sanity-utils";
import SectionRenderer from "../components/sections/SectionRenderer";
import PageNav from "../components/PageNav";
import PageInfo from "../components/sections/PageInfo";

export const revalidate = 60;

export default async function LandingPage() {
  const page = await getLandingPage();

  if (!page) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">📄 Landing page demo</h1>
        <p className="font-sans mt-4">No landing page is published yet.</p>
      </main>
    );
  }

  return (
    <main>
      <PageInfo />
      <SectionRenderer sections={page.sections} />
      <PageNav
        items={[
          {
            href: "/",
            label: "Back to Projects",
            icon: "/arrow-left.svg",
            external: false,
           },
        ]}
      />
    </main>
  );
}