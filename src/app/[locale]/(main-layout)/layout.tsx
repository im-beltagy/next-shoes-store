import MainLayout from "@/view/layouts/main-layout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
