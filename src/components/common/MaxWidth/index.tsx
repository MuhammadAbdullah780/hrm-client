import { cx } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  width?: number;
  className?: string;
};

const MaxWidth = ({ children, width = 1440, className = "" }: Props) => {
  return (
    <div
      className={cx(["block m-auto w-full", className])}
      style={{ maxWidth: width }}>
      {children}
    </div>
  );
};

export default MaxWidth;
