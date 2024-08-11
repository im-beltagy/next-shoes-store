import { useFormContext } from "react-hook-form";
import { Iconify } from "../iconify";
import { cn } from "@/lib/utils/style-functions/cn";

interface Props {
  name: string;
  label: string;
  onClick?: () => void;
  className?: string;
}
export default function SearchField({
  name,
  label,
  onClick,
  className,
}: Props) {
  const { register } = useFormContext();
  return (
    <label
      htmlFor={name}
      className={cn(
        "text-primary relative rounded-md border-accent-main",
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
        type="submit"
        className="absolute end-4 top-1/2 block -translate-y-1/2 transition-transform hover:scale-125 active:scale-110"
        onClick={onClick}
      >
        <Iconify icon="grommet-icons:search" className="h-auto w-5" />
      </button>
    </label>
  );
}
