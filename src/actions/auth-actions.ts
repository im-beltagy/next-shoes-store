"use server";

import { axiosInstance, endpoints } from "@/lib/axios";
import { Credentials, User } from "@/lib/types/auth";
import { cookies } from "next/headers";

export async function login({
  email,
  password,
}: Credentials): Promise<
  { user: User; token_exp: string } | { error: string }
> {
  try {
    const res = await axiosInstance.post(endpoints.auth.login, {
      email,
      password,
    });

    const { user, access_token, refresh_token, access_token_exp } = res?.data;

    cookies().set("access_token", access_token, { httpOnly: true });
    cookies().set("refresh_token", refresh_token, { httpOnly: true });

    return {
      user,
      token_exp: access_token_exp,
    };
  } catch (err: any) {
    return { error: err?.response?.data?.message || "Something went wrong" };
  }
}

export async function refreshToken(): Promise<
  { token_exp: string } | { error: string }
> {
  try {
    const res = await axiosInstance.get(endpoints.auth.refreshToken, {
      headers: {
        Authorization: `Bearer ${cookies().get("refresh_token")?.value}`,
      },
    });

    const { access_token, access_token_exp } = res?.data;

    cookies().set("access_token", access_token, { httpOnly: true });

    return {
      token_exp: access_token_exp,
    };
  } catch (err: any) {
    if (err?.response?.status === 401) {
      removeSession();
    }
    return {
      error: err?.response?.data?.message || "Something went wrong",
    };
  }
}

export async function removeSession() {
  cookies().delete("access_token");
  cookies().delete("refresh_token");
}
