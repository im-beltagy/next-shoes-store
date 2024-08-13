"use client";

import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { Iconify } from "../iconify";
import { cn } from "@/lib/utils/style-functions/cn";

interface props {
  name: string;
  options: { name: string; label: string; icon?: ReactNode }[];
}

export default function SelectField({ name, options }: props) {
  const { register, watch, setValue } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);

  const onSelect = useCallback(
    (selectValue: string) => {
      setValue(name, selectValue);
      setIsOpen(false);
    },
    [name, setValue],
  );

  const currentOption = options.find((option) => option.name === watch(name));

  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(100000);

  useEffect(() => {
    function handleResize() {
      setMaxHeight(
        (innerHeight || 0) -
          Number(menuRef.current?.getBoundingClientRect().top) -
          10,
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [menuRef, isOpen]);

  return (
    <div className="relative w-full">
      {/* Title */}
      <label
        htmlFor={name}
        role="button"
        aria-controls={`${name}-menu`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "text-primary flex w-full items-center justify-between gap-2 rounded px-3 py-1.5 text-start font-semibold",
          "border-2 hover:border-gray-900 has-[*:focus]:border-gray-900 dark:hover:border-white dark:has-[*:focus]:border-white",
        )}
      >
        <span className="block shrink-0">{currentOption?.icon}</span>
        <input
          type="text"
          className="w-2 grow cursor-[inherit] bg-transparent outline-none"
          value={currentOption?.label}
          {...register(name)}
          readOnly
        />

        {/* Arrow */}
        <Iconify icon="iconoir:nav-arrow-down" className="h-auto w-8" />
      </label>
      {/* options */}
      <div
        ref={menuRef}
        className={cn(
          "bg-default absolute top-full z-50 mt-2 w-full overflow-y-auto rounded border border-gray-200 shadow-md",
          !isOpen && "hidden",
        )}
        style={{ maxHeight: `min(${maxHeight}px, 50svh)` }}
      >
        <ul id={`${name}-menu`}>
          {options.map((option) => (
            <li
              className="text-primary hover:bg-gray-10 flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              key={option.name}
              onClick={() => onSelect(option.name)}
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
