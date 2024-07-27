"use client";

import Sidebar from "@/view/components/sidebar";
import { useState } from "react";

export default function StoreFilters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Filters</button>
      <Sidebar open={open} onClose={() => setOpen(false)}>
        <div />
      </Sidebar>
    </>
  );
}
