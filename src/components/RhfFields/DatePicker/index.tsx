import { DatePicker, SingleProps } from "@/components/common/DatePicker";
import FormField, { FormFieldProps } from "@/components/common/FormField";
import { useController, useFormContext } from "react-hook-form";

/**
 * Typings
 */
type ComponentPropsToOmit = "name" | "onChange" | "id";
type Props = {
  fieldProps: Omit<FormFieldProps, "id" | "children">;
  id: string;
  componentProps?: Omit<SingleProps, ComponentPropsToOmit>;
};

const RhfDatePicker = ({ fieldProps, id, componentProps = {} }: Props) => {
  const { control } = useFormContext();

  const {
    field: { name, onChange, value },
    fieldState: { error },
  } = useController({ name: id, control });

  return (
    <FormField
      hasError={!!error}
      errorMessage={error?.message}
      id={id}
      {...fieldProps}>
      <DatePicker
        {...componentProps}
        id={name || id}
        onChange={(d) => onChange?.(d)}
        value={value}
      />
    </FormField>
  );
};

export default RhfDatePicker;
