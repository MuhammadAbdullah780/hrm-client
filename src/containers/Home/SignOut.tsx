import { Button } from "@/components/common/Button";
import React from "react";
import { applySignOut } from "./func";
import { signOut } from "@/lib/auth";
import { handleSignOut } from "@/actions/auth";

type Props = {};

const SignOut = (props: Props) => {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
};

export default SignOut;
