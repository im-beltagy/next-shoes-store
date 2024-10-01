"use client";

import { HEADER_HEIGHT } from "@/lib/config";
import React, { useMemo } from "react";
import { Iconify } from "../iconify";
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
        "fixed top-0 z-10 hidden h-full w-full bg-[#0000] backdrop-blur-0 transition-[display] duration-300",
        "starting:bg-[#0000] starting:backdrop-blur-0",
        open && "block bg-[#0003] backdrop-blur-sm",
      )}
      style={{ transitionBehavior: "allow-discrete" }}
      onClick={onClickOutside}
    >
      <div
        className={cn(
          "bg-default absolute top-0 flex h-full w-fit max-w-[90vw] flex-col shadow-xl transition-transform duration-300",
          position === "end" && [
            "end-0",
            !open && "ltr:translate-x-full rtl:-translate-x-full",
            "starting:parent:ltr:translate-x-full starting:parent:rtl:-translate-x-full",
          ],
          position === "start" && [
            "start-0",
            !open && "ltr:-translate-x-full rtl:translate-x-full",
            "starting:parent:ltr:-translate-x-full starting:parent:rtl:translate-x-full",
          ],
        )}
        style={{ minWidth: `min(${minWidth}, 90vw)` }}
      >
        <div
          className={"flex-shrink-0"}
          style={{ height: `${HEADER_HEIGHT}px` }}
        />

        <div className="grid h-full flex-grow grid-rows-[auto_1fr] overflow-hidden p-2">
          {renderCloseBtn}
          <div className="overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
