"use client";

import Error500 from "@/view/sections/error/500";

export default function Error({ error }: { error: Error }) {
  console.error(error);

  return <Error500 />;
}
