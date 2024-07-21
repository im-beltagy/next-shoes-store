"use client";

import { Locales } from "@/lib/types/settings";
import Actions from "../actions";
import { Brand } from "../brand";
import Nav from "../nav";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-default fixed inset-x-0 z-50 shadow-lg">
      <div className="relative mx-auto flex w-full items-center justify-between gap-4 p-4 lg:container">
        <Brand />
        <Nav isMenuOpen={isMenuOpen} />
        <Actions setIsMenuOpen={(value: any) => setIsMenuOpen(value)} />
      </div>
    </header>
  );
}
