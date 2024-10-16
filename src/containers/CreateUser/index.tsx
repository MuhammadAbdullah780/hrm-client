"use client";
import Anchor from "@/components/common/Anchor";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import { NavigationButton } from "@/components/common/NavigationButton";
import { RiArrowLeftLine } from "@remixicon/react";
import React from "react";
import CreateUserForm from "./Form";

type Props = {};

const CreateUserContainer = (props: Props) => {
  return (
    <>
      {/* WILL RENDER FORM */}
      <CreateUserForm />
      <Divider />
      <div className="flex items-center justify-end gap-4">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit" form="create-employee-form">
          Submit
        </Button>
      </div>
    </>
  );
};

export default CreateUserContainer;
