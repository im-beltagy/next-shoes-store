import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-1" dir="ltr">
      <Image
        src="/assets/brand.svg"
        alt="ShoesStore"
        width="40"
        height="40"
        className="lg:2-10 w-8"
      />
      <span className="text-primary font-icon text-xl lg:text-2xl">
        ShoesStore
      </span>
    </Link>
  );
}
