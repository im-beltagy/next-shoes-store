import { cn } from "@/utils/style-functions/cn";
import { Iconify } from "../iconify";

export function Rating({
  stars,
  className,
}: {
  stars: number;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto flex w-fit gap-2", className)}>
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          className={cn("w-5 text-orange-500", { "opacity-60": stars < item })}
          key={item}
        >
          <Iconify icon="material-symbols:kid-star" width="100%" />
        </div>
      ))}
    </div>
  );
}
