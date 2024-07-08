"use client";

import Link from "next/link";
import { ThemeToggler } from "@/view/components/theme-toggler";
import { LocaleButton } from "@/view/components/locale-button";
import { Iconify } from "@/view/components/iconify";

export default function Actions({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (state: any) => void;
}) {
  return (
    <div className="flex items-center gap-1 text-lg">
      <button
        className="icon-btn md:hidden"
        onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
      >
        <Iconify icon="vaadin:menu" />
      </button>

      <LocaleButton />

      <ThemeToggler />

      <Link href="/cart" className="icon-btn">
        <Iconify icon="mdi:cart" />
      </Link>

      <Link href="/profile" className="icon-btn">
        <Iconify icon="iconamoon:profile-fill" />
      </Link>
    </div>
  );
}
