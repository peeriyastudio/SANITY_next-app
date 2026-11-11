import Link from "next/link";

export type PageNavItem = {
  href: string;
  label?: string;
  ariaLabel?: string;
  icon?: string;
  external?: boolean;
};

const itemBase =
  "pointer-events-auto backdrop-blur-sm inline-flex items-center justify-center gap-2 bg-[#eaeaea]/50 text-zinc-900 font-sans text-xs transition-colors duration-150 hover:bg-[#d4d4d4] focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:bg-zinc-800/50 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-white";

function Icon({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden="true" className="h-[23px] w-[23px] shrink-0 dark:invert" />
  );
}

export default function PageNav({ items }: { items: PageNavItem[] }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Page navigation"
      className="pointer-events-none sticky bottom-0 z-40 flex justify-center py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {items.map((item) => {
          const shape = item.label ? "h-[33px] rounded-lg px-3" : "h-[33px] w-[33px] rounded-full";
          const icon = item.icon && <Icon src={item.icon} />;
          const content = (
            <>
              {icon}
              {item.label && <span>{item.label}</span>}
            </>
          );
          const shared = {
            className: `${itemBase} ${shape}`,
            "aria-label": item.label ? undefined : item.ariaLabel,
          };

          return (
            <li key={item.href + (item.label ?? item.ariaLabel)}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" {...shared}>
                  {content}
                </a>
              ) : (
                <Link href={item.href} {...shared}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}