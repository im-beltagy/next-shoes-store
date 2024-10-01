import { Brand } from "./brand";

export default function HeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="bg-default fixed inset-x-0 top-0 z-50 shadow-lg">
      <div className="relative mx-auto flex w-full items-center justify-between gap-4 p-4 lg:container">
        <Brand />
        {children}
      </div>
    </header>
  );
}
