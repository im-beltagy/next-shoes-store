"use client";

import Error500 from "@/view/sections/error/500";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "500 | Server Error",
};

export default function Error({ error }: { error: Error }) {
  console.error(error);

  return <Error500 />;
}
