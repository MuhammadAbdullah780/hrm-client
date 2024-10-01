"use client";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import { Textarea, TextareaProps } from "@/components/common/Textarea";
import { stringToObjectNotation } from "@/functions/stringToObject";
import React from "react";
import { FieldErrors, useFormContext } from "react-hook-form";

type TextAreaFieldsToOmit = "name" | "onBlur" | "onChange" | "ref" | "id";

type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  componentProps?: Omit<TextareaProps, TextAreaFieldsToOmit>;
};

const RhfTextarea = ({ fieldProps, id, componentProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, onBlur, onChange, ref } = register(id);

  const error = stringToObjectNotation(id, errors);

  return (
    <FormField
      {...fieldProps}
      hasError={error}
      errorMessage={error?.message}
      id={id}>
      <Textarea
        name={name}
        onChange={onChange}
        ref={ref}
        onBlur={onBlur}
        {...componentProps}
      />
    </FormField>
  );
};

export default RhfTextarea;
