"use client";

import TextField from "@/view/components/form-components/text-field";
import { Iconify } from "@/view/components/iconify";
import { paths } from "@/view/layouts/common/config-navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import YupPassword from "yup-password";
import * as yup from "yup";
import Image from "next/image";
import { cn } from "@/lib/utils/style-functions/cn";
import { useDir } from "@/lib/utils/locale-hooks";
YupPassword(yup);

export function LoginView() {
  const t = useTranslations("Auth");
  const dir = useDir();

  const formMethods = useForm({
    resolver: yupResolver(
      yup.object({
        email: yup
          .string()
          .email(t("Email.Errors.invalid"))
          .required(t("Email.Errors.required")),
        password: yup
          .string()
          .min(8, t("Password.Errors.min_char"))
          .minLowercase(1, t("Password.Errors.min_lowercase"))
          .minUppercase(1, t("Password.Errors.min_uppercase"))
          .minNumbers(1, t("Password.Errors.min_number"))
          .minSymbols(1, t("Password.Errors.min_symbol"))
          .required(t("Password.Errors.required")),
      }),
    ),
  });

  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  const renderImage = (
    <Image
      src="/assets/auth/login-illustration.svg"
      alt=" "
      width={300}
      height={300}
    />
  );

  const renderHeadding = (
    <div>
      <h1 className="text-primary-dark font-special text-3xl">
        {t("Login.title")}
      </h1>
      <p className="ps-1 pt-1">
        {t.rich("Login.register", {
          register: (chunks) => (
            <Link
              className="text-accent hover:underline"
              href={paths.auth.register}
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </div>
  );

  const renderForm = (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-3">
          <TextField
            name="email"
            label={t("Email.label")}
            className="w-full"
            type="email"
          />
          <TextField
            name="password"
            label={t("Password.label")}
            className="w-full"
            type="password"
          />
          <button
            type="submit"
            className="btn-primary algin-center flex justify-center gap-1"
          >
            <span className="uppercase tracking-widest">
              {t("Login.submit")}
            </span>
            <Iconify
              icon={
                dir === "ltr"
                  ? "lets-icons:arrow-right-long"
                  : "lets-icons:arrow-left-long"
              }
              className="animate-slide-right rtl:animate-slide-left block h-auto w-6 self-center rtl:-scale-y-100"
            />
          </button>
        </div>
      </form>
    </FormProvider>
  );

  return (
    <section
      className={cn(
        "dark:bg-card max-w-full overflow-hidden rounded bg-[#fafafa] shadow-md",
        "flex flex-col items-center gap-5 p-9 md:flex-row-reverse md:gap-8 md:p-8",
      )}
    >
      {renderImage}
      <div
        className="grid w-80 max-w-full gap-3" /* style={{ width: "clamp(auto, 20rem, 100%)" }} */
      >
        {renderHeadding}
        {renderForm}
      </div>
    </section>
  );
}
