import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth();

  if (!!user) {
    redirect("/");
  }

  return children;
};

export default layout;
