"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AUTH_COOKIE,
  AUTH_COOKIE_VALUE,
  AUTH_MAX_AGE,
  PASSWORD,
} from "@/lib/auth";

export async function logInn(formData: FormData) {
  const passord = formData.get("passord");
  if (typeof passord !== "string" || passord !== PASSWORD) {
    redirect("/login?feil=1");
  }

  const jar = await cookies();
  jar.set(AUTH_COOKIE, AUTH_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: AUTH_MAX_AGE,
  });

  redirect("/");
}
