import { HEADER_HEIGHT } from "@/lib/config";
import Header from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div style={{ height: `${HEADER_HEIGHT}px` }} />

      {children}
    </main>
  );
}
