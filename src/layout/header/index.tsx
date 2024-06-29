import Image from "next/image";
import Nav from "./nav";
import Actions from "./actions";
import Link from "next/link";
import { Locales } from "@/types/settings";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/assets/brand.svg" alt="ShoesStore" width="40" height="40" />
      <span className="font-brand text-2xl text-primary">ShoesStore</span>
    </Link>
  );
}

export default function Header({ locale }: { locale: Locales }) {
  return (
    <header className="group/header z-50">
      <div className="bg-default relative mx-auto flex items-center justify-between gap-4 p-4 lg:container">
        <Brand />
        <Nav />
        <Actions locale={locale} />
      </div>
    </header>
  );
}
