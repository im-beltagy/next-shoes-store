import { useFormContext } from "react-hook-form";
import { Iconify } from "../iconify";
import { cn } from "@/lib/utils/style-functions/cn";

interface Props {
  name: string;
  label: string;
  className?: string;
}
export default function TextField({ name, label, className }: Props) {
  const { register, setValue, watch } = useFormContext();

  return (
    <label
      htmlFor={name}
      className={cn(
        "text-primary relative rounded-md",
        "border-2 hover:border-gray-900 has-[*:focus]:border-gray-900 dark:hover:border-white dark:has-[*:focus]:border-white",
        className,
      )}
    >
      <input
        type="text"
        id={name}
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
  );
}
