"use client";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import { Input, InputProps } from "@/components/common/Input";
import { stringToObjectNotation } from "@/functions/stringToObject";
import { useFormContext } from "react-hook-form";

/**
 * Typings
 */
type InputPropsToOmit = "name" | "onBlur" | "onChange" | "ref" | "id";
type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  componentProps?: Omit<InputProps, InputPropsToOmit>;
};

const RhfInput = ({ fieldProps, id, componentProps = {} }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, onBlur, onChange, ref } = register(id);

  const error = stringToObjectNotation(id, errors);

  return (
    <FormField
      id={id}
      {...fieldProps}
      hasError={!!error}
      errorMessage={error?.message}>
      <Input
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        name={name}
        {...componentProps}
      />
    </FormField>
  );
};

export default RhfInput;
