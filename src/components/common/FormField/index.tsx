import { cx } from "@/lib/utils";
import { Label } from "../Label";

export type FormFieldProps = {
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
  orientation = "horizontal",
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

export default FormField;
