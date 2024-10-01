import React from "react";
import { Divider } from "../Divider";

type Props = {
  title: string;
  includeDivider?: boolean;
  children: React.ReactNode;
};

const FormFieldBlock = ({ children, title, includeDivider }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h5 className="heading-base">{title}</h5>
      <>{children}</>
      {includeDivider && <Divider includeGap={false} />}
    </div>
  );
};

export default FormFieldBlock;
