import CompactLayout from "@/view/layouts/compact-layout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CompactLayout>{children}</CompactLayout>;
}
