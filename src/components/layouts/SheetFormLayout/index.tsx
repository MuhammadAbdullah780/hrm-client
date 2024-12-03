"use client";
import MaxWidth from "@/components/common/MaxWidth";
import { NavigationButton } from "@/components/common/NavigationButton";
import { RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  includeBackNavigation?: boolean;
  formTitle: string;
  children: React.ReactNode;
};

const SheetFormLayout = ({
  includeBackNavigation = true,
  formTitle,
  children,
}: Props) => {
  const router = useRouter();

  return (
    <div>
      {/* BACK NAVIGATION */}
      {includeBackNavigation && (
        <div className="bg-white h-28 p-5 border-b flex items-center">
          <NavigationButton
            icon={RiArrowLeftLine}
            onClick={() => router?.back()}
          />
        </div>
      )}
      <MaxWidth width={1000} className="p-5">
        <section className="w-full bg-white rounded-md shadow-sm border p-5">
          <h2 className="heading-3 mb-3">{formTitle}</h2>
          {children}
        </section>
      </MaxWidth>
    </div>
  );
};

export default SheetFormLayout;
