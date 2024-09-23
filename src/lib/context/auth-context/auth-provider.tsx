"use client";

import { AuthContext } from "./auth-hook";

import {
  refreshToken,
  removeSession,
  login as ServerLogin,
} from "@/actions/auth-actions";
import { Credentials, User } from "../../types/auth";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/view/layouts/common/config-navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const logout = () => {
    setIsAuthorized(false);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token_exp");
    removeSession();
  };

  const refreshSession = useCallback(async () => {
    const res = await refreshToken();
    if ("error" in res) {
      alert(res.error);
      logout();
      router.push(paths.auth.login);
    } else {
      const expIn = new Date(res.token_exp).getTime() - new Date().getTime();
      setTimeout(() => {
        refreshSession();
      }, expIn - 10_000);
    }
  }, [router]);

  const init = useCallback(async () => {
    const user = localStorage.getItem("user");
    const token_exp = localStorage.getItem("token_exp") || "";
    let expIn = token_exp
      ? new Date(token_exp).getTime() - new Date().getTime()
      : 0;

    if (user) {
      const res = expIn < 20_000 ? await refreshToken() : { token_exp };

      if ("error" in res) {
        console.log(res.error);
        logout();
      } else {
        setUser(JSON.parse(user));
        setIsAuthorized(true);
        console.log("hello");

        const expIn = new Date(res.token_exp).getTime() - new Date().getTime();
        setTimeout(() => {
          refreshSession();
        }, expIn - 10_000);
      }
    }
  }, [refreshSession]);

  useEffect(() => {
    init();
  }, [init]);

  const login = async (credentials: Credentials) => {
    const res = await ServerLogin(credentials);

    if ("error" in res) {
      return res;
    } else {
      setIsAuthorized(true);
      setUser(res.user);

      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token_exp", res.token_exp);

      const expIn = new Date(res.token_exp).getTime() - new Date().getTime();
      setTimeout(() => {
        refreshSession();
      }, expIn - 10_000);

      return {};
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}
