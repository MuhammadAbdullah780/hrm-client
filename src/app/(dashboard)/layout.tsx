import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
