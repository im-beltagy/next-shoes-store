import { defaultLocale } from "@/config-locale";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect(`/${defaultLocale}`);
}
