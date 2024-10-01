import { ThemeToggler } from "@/view/components/theme-toggler";
import { LocaleButton } from "@/view/components/locale-button";

export default function CompactActions() {
  return (
    <div className="flex items-center gap-1 text-lg">
      <LocaleButton />

      <ThemeToggler />
    </div>
  );
}
