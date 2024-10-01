"use client";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import { Input } from "@/components/common/Input";
import { Label } from "@/components/common/Label";
import MaxWidth from "@/components/common/MaxWidth";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/Select";
import { cx } from "@/lib/utils";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-5 bg-background min-h-screen">
      <MaxWidth
        width={1000}
        className="bg-white rounded-md shadow-sm w-full p-5 flex flex-col gap-4">
        <h1 className="heading-3">Employees</h1>
        {/* <FieldBlock title="General"></FieldBlock> */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost">Cancel</Button>
          <Button>Save</Button>
        </div>
      </MaxWidth>
    </div>
  );
};

type FieldBlockArgs = {
  title: string;
  includeDivider?: boolean;
  children: React.ReactNode;
};

type FormFieldProps = {
  orientation?: "horizontal" | "vertical";
  maxWidth?: string | number;
  wrapperClassName?: string;
  label: string;
  isFieldRequired?: boolean;
  helperText?: string;
  children: React.ReactNode;
  fieldMaxWidth?: string | number;
  labelMaxWidth?: string | number;
  id: string;
  labelClassName?: string;
  hasError?: boolean;
  errorMessage?: string;
};

const FormField = ({
  orientation = "vertical",
  maxWidth = "100%",
  wrapperClassName = "",
  label,
  children,
  isFieldRequired = false,
  helperText,
  fieldMaxWidth = "100%",
  labelMaxWidth,
  id,
  labelClassName = "",
  errorMessage,
  hasError,
}: FormFieldProps) => {
  const isVertical = orientation === "vertical";

  const labelText = `${label} ${isFieldRequired ? " *" : ""}`;

  return (
    <div
      className={cx([
        //
        "flex items-start justify-start w-full",
        isVertical && "flex-col",
        !isVertical && "gap-3",
        //
        wrapperClassName,
      ])}
      style={{ maxWidth }}>
      <Label
        htmlFor={id}
        className={cx(["w-full", !isVertical && "py-2", labelClassName])}
        style={{
          maxWidth: labelMaxWidth ? labelMaxWidth : isVertical ? "100%" : 250,
        }}>
        {labelText}
      </Label>
      <div className="w-full" style={{ maxWidth: fieldMaxWidth }}>
        {children}
        {helperText && !hasError && <p className="helper-text">{helperText}</p>}
        {hasError && <p>{errorMessage || ""}</p>}
      </div>
    </div>
  );
};

const FieldBlock = ({
  title,
  children,
  includeDivider = true,
}: FieldBlockArgs) => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="heading-base">{title}</h5>
      <>{children}</>
      {includeDivider && <Divider includeGap={false} />}
    </div>
  );
};

export default page;
