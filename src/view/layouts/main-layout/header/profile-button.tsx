"use client";

import { useAuth } from "@/lib/context/auth-context/auth-hook";
import { Iconify } from "@/view/components/iconify";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { paths } from "../../common/config-navigation";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { List } from "@/view/components/list";

export default function ProfileButton() {
  const t = useTranslations();
  const { isAuthorized, user, logout } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  if (!isAuthorized)
    return (
      <a
        href={paths.auth.login}
        className="rounded px-2 py-1 text-sm font-semibold tracking-widest text-accent-main ring-2 ring-accent-main hover:bg-accent-main hover:text-white"
        role="button"
      >
        {t("Navigation.login")}
      </a>
    );

  const innerButton =
    typeof user?.avatar === "string" ? (
      <Image
        className="rounded-full ring-2 ring-slate-400"
        src={user.avatar}
        alt="avatar"
        width={50}
        height={50}
      />
    ) : (
      <Iconify icon="iconamoon:profile-fill" />
    );

  const list = [
    {
      text: t("Navigation.profile"),
      link: paths.profile,
    },
    {
      text: t("Navigation.logout"),
      className: "text-rose-500 font-semibold tracking-wider hover:bg-rose-100",
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "left", "right"]} // preferred positions by priority
      onClickOutside={() => setIsPopoverOpen(false)}
      padding={15}
      containerClassName="z-50"
      content={
        <div className="px-2">
          <List items={list} />
        </div>
      }
    >
      <button
        onClick={() => setIsPopoverOpen((prev) => !prev)}
        className="icon-btn p-1.5"
      >
        {innerButton}
      </button>
    </Popover>
  );
}
