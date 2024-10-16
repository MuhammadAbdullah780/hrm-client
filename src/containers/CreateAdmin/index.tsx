import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import React from "react";
import CreateAdminForm from "./Form";

type Props = {};

const CreateAdminContainer = (props: Props) => {
  return (
    <>
      {/* WILL RENDER FORM */}
      <CreateAdminForm />
      <Divider />
      <div className="flex items-center justify-end gap-4">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit" form="create-admin-form">
          Create
        </Button>
      </div>
    </>
  );
};

export default CreateAdminContainer;
