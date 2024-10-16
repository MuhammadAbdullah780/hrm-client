import { RemixiconComponentType } from "@remixicon/react";
import React from "react";

type Props = {
  icon: RemixiconComponentType;
  onClick?: (a: any) => any;
};

const RoundIconWrap = ({ icon: Icon, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-7 h-7 flex items-center bg-primary rounded-full justify-center">
      <Icon className="fill-white w-5 h-5" />
    </div>
  );
};

export default RoundIconWrap;
