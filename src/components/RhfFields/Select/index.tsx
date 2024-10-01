"use client";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/Select";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  options: {
    label: string | React.ReactNode;
    value: string;
  }[];
};

const RhfSelect = ({ fieldProps, id, options }: Props) => {
  const { control } = useFormContext();

  const {
    field: { name, onBlur, onChange, value, disabled },
    fieldState: { error },
  } = useController({ name: id, control });

  return (
    <FormField
      {...fieldProps}
      hasError={!!error}
      errorMessage={error?.message}
      id={id}>
      <Select
        value={value}
        disabled={disabled}
        name={name}
        onValueChange={(value) => onChange?.(value)}>
        <SelectTrigger onBlur={onBlur}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};

export default RhfSelect;
