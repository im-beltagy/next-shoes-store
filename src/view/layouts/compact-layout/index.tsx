import { HEADER_HEIGHT } from "@/lib/config";
import HeaderContainer from "../common/header/header-container";
import CompactActions from "./actions";

export default function CompactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="bg-second grid min-h-screen place-items-center p-3"
      style={{ paddingTop: `${HEADER_HEIGHT}px` }}
    >
      <HeaderContainer>
        <CompactActions />
      </HeaderContainer>
      {children}
    </main>
  );
}
