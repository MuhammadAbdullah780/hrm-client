import { Checkbox } from "@/components/common/Checkbox";
import { Label } from "@/components/common/Label";
import { stringToObjectNotation } from "@/functions/stringToObject";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  helperText?: string;
  id: string;
};

const RhfCheckbox = ({ label, helperText, id }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerReturn = register(id);

  const error = stringToObjectNotation(id, errors);

  return (
    <div className="flex items-start justify-start gap-2">
      <Checkbox {...registerReturn} id={id} />
      <div className="flex flex-col gap-1">
        <Label htmlFor={id}>{label}</Label>
        {helperText && !!error && <p className="helper-text">{helperText}</p>}
        {!!error && <p>{error?.message}</p>}
      </div>
    </div>
  );
};

export default RhfCheckbox;
