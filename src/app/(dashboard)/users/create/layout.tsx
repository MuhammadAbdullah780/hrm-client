"use client";
import SheetFormLayout from "@/components/layouts/SheetFormLayout";
import React from "react";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <SheetFormLayout formTitle="Create New User">{children}</SheetFormLayout>
  );
};

export default layout;
