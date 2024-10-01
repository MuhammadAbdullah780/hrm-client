"use client";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/Select";
import React, { useCallback, useEffect, useState } from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
import { States } from "../types";
import { isRhfFieldDisable, shouldFieldShow } from "../utils";

type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  options: {
    label: string | React.ReactNode;
    value: string;
  }[];
  states?: States;
  placeholder?: string;
  disabled?: boolean;
};

const RhfSelect = ({
  fieldProps,
  id,
  options,
  placeholder = "Select",
  disabled = false,
  states = [],
}: Props) => {
  const { control, watch } = useFormContext();

  const {
    field: { name, onBlur, onChange, value },
    fieldState: { error },
  } = useController({ name: id, control });

  // Functions for Conditions on fields based on specific value
  const shouldDisable = isRhfFieldDisable({ disabled, states, watch });
  const show = shouldFieldShow({ states, watch });

  return show ? (
    <FormField
      {...fieldProps}
      hasError={!!error}
      errorMessage={error?.message}
      id={id}>
      <Select
        value={value}
        disabled={shouldDisable}
        name={name}
        onValueChange={(value) => onChange?.(value)}>
        <SelectTrigger onBlur={onBlur}>
          <SelectValue placeholder={placeholder} />
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
  ) : (
    <></>
  );
};

export default RhfSelect;
