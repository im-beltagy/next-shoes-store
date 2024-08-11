"use client";

import { fCurrency } from "@/lib/utils/format-number";
import { cn } from "@/lib/utils/style-functions/cn";
import { useCallback, useMemo } from "react";
import { useFormContext } from "react-hook-form";

interface props {
  name: string;
  sign?: string;
  min: number;
  max: number;
  step: number;
  currency?: boolean;
}
export default function MultiRangeSlider({
  name,
  sign,
  min,
  max,
  step,
  currency,
}: props) {
  const { register, watch, setValue } = useFormContext();

  const fieldValue = watch(name) || { min: min, max: max };

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [max, min],
  );

  // Calc Custom Range Style
  const rangeStyle = useMemo(() => {
    const minPercent = getPercent(fieldValue.min);
    const maxPercent = getPercent(fieldValue.max);

    return {
      insetInlineStart: `${minPercent}%`,
      width: `${maxPercent - minPercent}%`,
    };
  }, [getPercent, fieldValue.min, fieldValue.max]);

  return (
    <div className="w-full">
      <div className="relative h-2 w-full">
        {/* Custom Track */}
        <div className="absolute z-0 h-full w-full rounded bg-slate-200" />
        {/* Custom Range */}
        <div
          className="absolute z-10 h-full rounded bg-emerald-500"
          style={rangeStyle}
        />
        {/* Left Thumb */}
        <input
          {...register(`${name}.min`)}
          type="range"
          min={min}
          max={max}
          step={step}
          value={fieldValue.min}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), max - step);
            setValue(`${name}.min`, value);
          }}
          className={cn(
            "pointer-events-none absolute top-1/2 z-20 w-full -translate-y-1/2 appearance-none bg-transparent accent-emerald-200 [&::-webkit-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:pointer-events-auto",
            fieldValue.min >= max - step * 2 && "z-40",
          )}
        />
        {/* right thumb */}
        <input
          {...register(`${name}.max`)}
          type="range"
          min={min}
          max={max}
          step={step}
          value={fieldValue.max}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), min + step);
            setValue(`${name}.max`, value);
          }}
          className={`pointer-events-none absolute top-1/2 z-30 w-full -translate-y-1/2 appearance-none bg-transparent accent-emerald-200 [&::-webkit-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:pointer-events-auto`}
        />
      </div>
      {/* values */}
      <div className="text-primary mt-2 flex w-full items-center justify-between gap-2 text-sm">
        <div suppressHydrationWarning>
          {currency ? fCurrency(fieldValue.min) : fieldValue.min}
          {sign}
        </div>
        <div suppressHydrationWarning>
          {currency ? fCurrency(fieldValue.max) : fieldValue.max}
          {sign}
        </div>
      </div>
    </div>
  );
}
