"use server";
import { signOut } from "@/lib/auth";

export const applySignOut = async () => {

  await signOut({ redirectTo: "/sign-in" });


  return { status: "signedOut" };
};
