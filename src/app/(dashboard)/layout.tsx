import DashboardLayout from "@/components/layouts/DashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const user = await auth()

  if (!user) {
    redirect("/sign-in")
  }


  console.log(user, 'USER_________________')

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
