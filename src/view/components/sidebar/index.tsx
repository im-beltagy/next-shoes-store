"use client";

import { HEADER_HEIGHT } from "@/lib/config";
import React, { useEffect, useMemo, useState } from "react";
import { Iconify } from "../iconify";
import clsx from "clsx";
import { cn } from "@/lib/utils/style-functions/cn";

interface Props {
  open: boolean;
  onClose(): void;
  position?: "start" | "end";
  minWidth?: string;
  children: React.ReactNode;
}

export default function Sidebar({
  open,
  onClose,
  position = "end",
  minWidth = "200px",
  children,
}: Props) {
  const onClickOutside = (e: any) => {
    if (e.target.dataset.container === "true") {
      onClose();
    }
  };

  const renderCloseBtn = useMemo(
    () => (
      <div className="ms-auto w-fit pb-2">
        <button className="icon-btn" onClick={() => onClose()}>
          <Iconify icon="ep:close-bold" />
        </button>
      </div>
    ),
    [onClose],
  );

  return (
    <div
      data-container="true"
      className={cn(
        "transition-[opacity, display] fixed top-0 z-10 hidden h-full w-full bg-[#0000] duration-300",
        "starting:bg-[#0000]",
        open && "block bg-[#0003]",
      )}
      style={{ transitionBehavior: "allow-discrete" }}
      onClick={onClickOutside}
    >
      <div
        className={cn(
          "bg-card absolute top-0 flex h-full w-fit max-w-[90vw] flex-col shadow-xl transition-[transform_display] duration-300",
          {
            "end-0": position === "end",
            "start-0": position === "start",
          },
          {
            "starting:parent:ltr:translate-x-full starting:parent:rtl:-translate-x-full":
              position === "end",
            "starting:parent:ltr:-translate-x-full starting:parent:rtl:translate-x-full":
              position === "start",
          },
          !open && {
            "ltr:translate-x-full rtl:-translate-x-full": position === "end",
            "ltr:-translate-x-full rtl:translate-x-full": position === "start",
          },
        )}
        style={{ minWidth: `min(${minWidth}, 90vw)` }}
      >
        <div className={`${HEADER_HEIGHT} flex-shrink-0`} />

        <div className="grid h-full flex-grow grid-rows-[auto_1fr] overflow-hidden p-2">
          {renderCloseBtn}
          <div className="overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
