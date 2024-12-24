
import { Button } from "@/components/common/Button";
import MaxWidth from "@/components/common/MaxWidth";
import { signOut } from "@/lib/auth";
import React from "react";
import SignOut from "./SignOut";

type Props = {};



const HomeContainer = (props: Props) => {
  return (
    <MaxWidth className="p-5">
      <h1 className="heading-1">Dashboard</h1>

      <SignOut/>
    </MaxWidth>
  );
};

export default HomeContainer;
