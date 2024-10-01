"use client";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import { Input, InputProps } from "@/components/common/Input";
import { stringToObjectNotation } from "@/functions/stringToObject";
import { useFormContext } from "react-hook-form";
import { isRhfFieldDisable, shouldFieldShow } from "../utils";
import { States } from "../types";

/**
 * Typings
 */
type InputPropsToOmit = "name" | "onBlur" | "onChange" | "ref" | "id";
type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  componentProps?: Omit<InputProps, InputPropsToOmit>;
  states?: States;
};

const RhfInput = ({
  fieldProps,
  id,
  componentProps = {},
  states = [],
}: Props) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const { name, onBlur, onChange, ref } = register(id);

  const error = stringToObjectNotation(id, errors);

  // Functions for Conditions on fields based on specific value
  const shouldDisable = isRhfFieldDisable({
    disabled: componentProps?.disabled ?? false,
    states,
    watch,
  });
  const show = shouldFieldShow({ states, watch });

  return (
    show && (
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
          disabled={shouldDisable}
        />
      </FormField>
    )
  );
};

export default RhfInput;
