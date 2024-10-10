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
    <div>
      <div className="bg-white h-28 p-5 border-b flex items-center">
        <NavigationButton icon={RiArrowLeftLine} onClick={() => {}} />
      </div>
      <MaxWidth width={1000} className="p-5">
        <section className="w-full bg-white rounded-md shadow-sm border p-5">
          <h2 className="heading-3 mb-3">Create New User</h2>
          {/* WILL RENDER FORM */}
          <CreateUserForm />
          <Divider />
          <div className="flex items-center justify-end gap-4">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit" form="create-employee-form">
              Submit
            </Button>
          </div>
        </section>
      </MaxWidth>
    </div>
  );
};

export default CreateUserContainer;
