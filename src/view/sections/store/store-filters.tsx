"use client";

import { all_categories, all_colors, Colors } from "@/lib/types/products";
import { cn } from "@/lib/utils/style-functions/cn";
import { useQueryString } from "@/lib/utils/use-query-string";
import MultiRangeSlider from "@/view/components/form-components/multi-range";
import SearchField from "@/view/components/form-components/search";
import SelectField from "@/view/components/form-components/select";
import { Iconify } from "@/view/components/iconify";
import { ColorDot } from "@/view/components/product-card";
import Sidebar from "@/view/components/sidebar";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function StoreFilters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={cn(
          "fixed bottom-10 end-10 z-10 h-12 w-12",
          "icon-btn !bg-orange-400 text-xl !text-white shadow-lg dark:!bg-orange-600",
          "transition-all hover:scale-110 active:scale-105 active:shadow-sm active:ring-0",
        )}
        onClick={() => setOpen(true)}
      >
        <Iconify icon="iconoir:filter-solid" />
      </button>
      <Sidebar position="start" open={open} onClose={() => setOpen(false)}>
        <FilterInputs />
      </Sidebar>
    </>
  );
}

function FilterInputs() {
  const { createQueryString } = useQueryString();
  const searchParams = useSearchParams();
  const t = useTranslations("Product");

  const methods = useForm({
    defaultValues: {
      search: searchParams.get("search") || "",
      price: {
        min: Number(searchParams.get("min")) || 0,
        max: Number(searchParams.get("max")) || 1000,
      },
      color: "all",
      category: "all",
    },
  });
  const { getValues } = methods;

  return (
    <div className="grid gap-2">
      <FormProvider {...methods}>
        <SearchField
          label={"Search"}
          name="search"
          onClick={() => {
            createQueryString([{ name: "search", value: getValues("search") }]);
          }}
        />
        <MultiRangeSlider name="price" min={0} max={1000} step={10} currency />
        <SelectField
          name="color"
          options={["all", ...all_colors].map((item, i) => ({
            name: item,
            label: t(`Colors.${item}`),
            icon: item !== "all" && (
              <ColorDot key={item} color={item as Colors} />
            ),
          }))}
        />
        <SelectField
          name="category"
          options={["all", ...all_categories].map((item, i) => ({
            name: item,
            label: t(`Categories.${item}`),
          }))}
        />
      </FormProvider>
    </div>
  );
}
