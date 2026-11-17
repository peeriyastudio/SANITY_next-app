import Link from "next/link";

export default function PageInfo() {
  return (
    <section className="mx-auto w-[85%] max-w-6xl py-8 md:py-12 lg:py-16 border-b-2 border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h1 className="font-heading text-2xl font-bold">
            <span aria-hidden="true">📄</span> Landing page demo
          </h1>
          <p className="font-sans mt-4">This is a simple demo page with placeholder content. Showcasing the capabilities of the Sanity CMS and Tailwind CSS components.</p>
        </div>

        <Link
          href="/"
          className="inline-flex shrink-0 items-center self-start sm:self-auto font-heading tracking-wider uppercase text-xs font-semibold px-5 py-2.5 border-2 border-black bg-white text-black hover:bg-black hover:text-white dark:border-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900"
        >
          Back to Projects
        </Link>
      </div>
    </section>
  );
}