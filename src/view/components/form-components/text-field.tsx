import { useFormContext } from "react-hook-form";
import { Iconify } from "../iconify";
import { cn } from "@/lib/utils/style-functions/cn";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}
export default function TextField({
  name,
  label,
  className,
  type = "text",
}: Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const error =
    typeof errors[name]?.message === "string"
      ? errors[name]?.message
      : undefined;

  return (
    <div>
      <label
        htmlFor={name}
        className={cn(
          "text-primary relative block rounded-md",
          "border-2 hover:border-gray-900 has-[*:focus]:border-gray-900 dark:hover:border-white dark:has-[*:focus]:border-white",
          error && "border-rose-500 hover:border-rose-800",
          className,
        )}
      >
        <input
          id={name}
          type={type}
          className="w-full grow bg-transparent py-2 pe-10 ps-4 leading-8 focus:outline-none"
          placeholder={label}
          {...register(name)}
        />

        <button
          className={cn(
            "absolute end-2 top-1/2 hidden -translate-y-1/2 transition-transform hover:scale-125 active:scale-110",
            watch(name) && "block",
          )}
          onClick={() => setValue(name, "")}
          type="button"
        >
          <Iconify icon="ion:close" className="h-auto w-5" />
        </button>
      </label>
      {error && <p className="ps-1 pt-1 text-xs text-rose-500">{error}</p>}
    </div>
  );
}
