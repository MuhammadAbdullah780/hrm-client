import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "..";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  triggerClass?: string;
};

const SelectControlled = ({
  options,
  placeholder = "Select ...",
  triggerClass = "",
}: Props) => {
  return (
    <Select>
      <SelectTrigger className={triggerClass}>
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
  );
};

export default SelectControlled;
