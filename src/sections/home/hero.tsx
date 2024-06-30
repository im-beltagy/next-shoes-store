import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-beige-dark">
      <div className="container relative mx-auto max-w-screen-lg grid-cols-12 items-end gap-4 overflow-hidden px-4 md:grid">
        <Text />

        {/* Image */}
        <div className="bottom-0 left-0 col-span-5 w-full max-md:absolute max-md:h-full md:pt-section-md">
          <Image
            className="mx-auto"
            src="/assets/hero.webp"
            alt="shoe cover picture"
            width={500}
            height={500}
          />
          {/* overlay */}
          <div className="absolute top-0 h-full w-full bg-beige-dark opacity-80 md:hidden"></div>
        </div>
      </div>
    </main>
  );
}

function Text() {
  const t = useTranslations("Pages.Home.Hero");

  return (
    <div className="relative z-10 col-span-7 grid gap-4 py-section-md max-md:justify-center md:py-section-md">
      <h1 className="text-primary-dark font-special text-3xl max-md:text-balance max-md:text-center md:text-4xl lg:text-5xl">
        {t("headline")}
      </h1>
      <p className="text-primary-main max-md:text-balance max-md:text-center md:text-lg lg:text-xl">
        {t("subline")}
      </p>

      {/* Call For Action */}
      <div className="flex flex-wrap items-center gap-2 max-md:justify-center">
        <Link href="#" className="btn-primary shrink-0">
          {t("cta")}
        </Link>
        <p className="text-sm text-accent-main">
          {t("SubText.line1")}
          <br /> {t("SubText.line2")}
        </p>
      </div>
    </div>
  );
}
