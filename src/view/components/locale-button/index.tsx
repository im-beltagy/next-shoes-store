"use client";

import { Locales } from "@/lib/types/settings";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Iconify } from "../iconify";
import { localesSettings } from "@/config-locale";
import { Popover } from "react-tiny-popover";
import { List } from "../list";
import { useTranslations } from "next-intl";

export function LocaleButton({ locale }: { locale: Locales }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLang = useCallback(
    (code: Locales) => {
      if (code !== locale) {
        router.push(pathname.replace(`/${locale}`, `/${code}`));
      }
    },
    [locale, pathname, router],
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "left", "right"]} // preferred positions by priority
      onClickOutside={() => setIsPopoverOpen(false)}
      padding={15}
      content={
        <List
          items={Object.values(localesSettings).map((item: any, i) => ({
            icon: <Iconify icon={item.icon} />,
            text: item.name,
            onClick: () =>
              changeLang(Object.keys(localesSettings)[i] as Locales),
          }))}
        />
      }
    >
      <button
        className="icon-btn"
        onClick={() => setIsPopoverOpen((prev) => !prev)}
      >
        <Iconify icon={localesSettings[locale].icon} />
      </button>
    </Popover>
  );
}
