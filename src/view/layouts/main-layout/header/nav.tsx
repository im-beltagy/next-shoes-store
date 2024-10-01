import Link from "next/link";
import { useTranslations } from "next-intl";
import { navLinks } from "../../common/config-navigation";

export default function Nav({ isMenuOpen }: { isMenuOpen: boolean }) {
  const t = useTranslations("Navigation");

  return (
    <nav
      data-menu={isMenuOpen ? "open" : "close"}
      className="bg-default left-0 top-full z-20 grid grid-rows-[0fr] border-divider-dark transition-[grid-template-rows] duration-300 dark:border-divider-light max-md:absolute max-md:grid max-md:w-full max-md:overflow-hidden max-md:border-y max-md:text-center max-md:data-[menu=open]:grid-rows-[1fr]"
    >
      <ul className="items-center gap-2 max-md:min-h-0 md:flex lg:gap-6">
        {/* Links */}
        {navLinks.map((item) => (
          <li
            className="font-light capitalize transition-colors max-md:pb-2 max-md:first:pt-4 max-md:last:pb-4"
            key={item.href}
          >
            <Link
              className="hover:text-accent text-primary relative before:absolute before:right-0 before:top-full before:w-0 before:rounded-full before:bg-current before:transition-[width] before:duration-300 hover:before:left-0 hover:before:right-auto hover:before:w-full md:before:h-[.1rem]"
              href={item.href}
            >
              {t(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
