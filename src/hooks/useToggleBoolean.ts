"use client";
import { useState } from "react";

export const useToggleBoolean = (defaultValue: boolean = false) => {
  const [open, setOpen] = useState<boolean>(defaultValue);

  const handleChange = (val: boolean = !open) => {
    val !== open && setOpen(val);
  };

  return {
    handleChange,
    isOpen: open,
  };
};
