"use client";

import { useState } from "react";
import Actions from "./actions";
import Nav from "./nav";
import HeaderContainer from "../../common/header/header-container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav isMenuOpen={isMenuOpen} />
      <Actions setIsMenuOpen={(value: any) => setIsMenuOpen(value)} />
    </HeaderContainer>
  );
}
