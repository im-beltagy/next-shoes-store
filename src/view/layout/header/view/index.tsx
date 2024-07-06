"use client";

import { Locales } from "@/lib/types/settings";
import Actions from "../actions";
import { Brand } from "../brand";
import Nav from "../nav";
import { useState } from "react";

export default function Header({ locale }: { locale: Locales }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="group/header">
      <div className="bg-default relative mx-auto flex items-center justify-between gap-4 p-4 lg:container">
        <Brand />
        <Nav isMenuOpen={isMenuOpen} />
        <Actions
          locale={locale}
          setIsMenuOpen={(value: any) => setIsMenuOpen(value)}
        />
      </div>
    </header>
  );
}
