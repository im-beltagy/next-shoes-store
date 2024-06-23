import Link from "next/link";
import { navLinks } from "../config-navigation";

export default function Nav() {
  return (
    <nav className="left-0 top-full grid grid-rows-[0fr] overflow-hidden border-divider bg-white transition-[grid-template-rows] duration-300 max-md:absolute max-md:grid max-md:w-full max-md:border-y max-md:text-center max-md:group-has-[#menu:checked]/header:grid-rows-[1fr]">
      <ul className="items-center gap-6 max-md:min-h-0 md:flex">
        {/* Links */}
        {navLinks
          .find((item) => item.category === "main")
          ?.pages.map((item) => (
            <li
              className="font-light capitalize transition-colors max-md:pb-2 max-md:first:pt-4 max-md:last:pb-4"
              key={item.href}
            >
              <Link
                className="relative before:absolute before:right-0 before:top-full before:w-0 before:rounded-full before:bg-current before:transition-[width] hover:text-accent-main hover:before:left-0 hover:before:right-auto hover:before:w-full md:before:h-[.1rem]"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
