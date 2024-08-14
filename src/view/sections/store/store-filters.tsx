"use client";

import { MAX_PRICE, MIN_PRICE } from "@/lib/config";
import { all_categories, all_colors, Colors } from "@/lib/types/products";
import { cn } from "@/lib/utils/style-functions/cn";
import { useQueryString } from "@/lib/utils/use-query-string";
import MultiRangeSlider from "@/view/components/form-components/multi-range";
import TextField from "@/view/components/form-components/text-field";
import SelectField from "@/view/components/form-components/select-field";
import { Iconify } from "@/view/components/iconify";
import { ColorDot } from "@/view/components/product-card";
import Sidebar from "@/view/components/sidebar";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
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
        <Suspense>
          <FilterInputs handleClose={() => setOpen(false)} />
        </Suspense>
      </Sidebar>
    </>
  );
}

const INIT_VALUES = {
  search: "",
  price: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  color: "all",
  category: "all",
};

function FilterInputs({ handleClose }: { handleClose: () => void }) {
  const { createQueryString } = useQueryString();
  const searchParams = useSearchParams();
  const t = useTranslations("Product");
  const tGlobal = useTranslations("Global");

  const defaultValues = useMemo(
    () => ({
      search: searchParams.get("search") || INIT_VALUES.search,
      price: {
        min: Number(searchParams.get("min_price")) || INIT_VALUES.price.min,
        max: Number(searchParams.get("max_price")) || INIT_VALUES.price.max,
      },
      color: searchParams.get("color") || INIT_VALUES.color,
      category: searchParams.get("category") || INIT_VALUES.category,
    }),
    [searchParams],
  );

  const methods = useForm({
    defaultValues,
  });
  const { handleSubmit, setValue } = methods;

  // Handle Change SearchParams
  useEffect(() => {
    setValue("search", defaultValues.search);
    setValue("price", defaultValues.price);
    setValue("color", defaultValues.color);
    setValue("category", defaultValues.category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    defaultValues.category,
    defaultValues.color,
    defaultValues.price,
    defaultValues.search,
  ]);

  const reset = useCallback(() => {
    setValue("search", INIT_VALUES.search);
    setValue("price", INIT_VALUES.price);
    setValue("color", INIT_VALUES.color);
    setValue("category", INIT_VALUES.category);
  }, [setValue]);

  const onSubmit = useCallback(
    (data: any) => {
      const { search, color, category, price } = data;

      const queries: { name: string; value?: string }[] = [
        { name: "search", value: search },
        { name: "color", value: color !== "all" ? color : undefined },
        { name: "category", value: category !== "all" ? category : undefined },
        {
          name: "min_price",
          value: price.min !== MIN_PRICE ? price.min.toString() : undefined,
        },
        {
          name: "max_price",
          value: price.max !== MAX_PRICE ? price.max.toString() : undefined,
        },
      ];

      createQueryString(queries);
      handleClose();
    },
    [createQueryString, handleClose],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <TextField label={tGlobal("Search")} name="search" />
          <div className="pt-1">
            <MultiRangeSlider
              name="price"
              min={0}
              max={1000}
              step={10}
              currency
            />
          </div>
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
          <div className="flex items-stretch gap-1">
            <button
              className="icon-btn h-auto shrink-0 px-3"
              type="submit"
              onClick={() => reset()}
            >
              <Iconify icon="fluent-mdl2:reset" />
            </button>
            <button type="submit" className="btn-primary grow">
              {tGlobal("Apply")}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
