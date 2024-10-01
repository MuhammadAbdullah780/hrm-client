"use client";
import FormFieldBlock from "@/components/common/FormFieldBlock";
import RhfInput from "@/components/RhfFields/Input";
import RhfSelect from "@/components/RhfFields/Select";
import { jobTitleOptions } from "@/constants/selectOptions/jobTitle";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

const CreateEmployeeForm = (props: Props) => {
  const form = useForm();

  const { handleSubmit, getValues, watch } = form;

  const submitForm = (d: any) => {
    alert(JSON.stringify(d));
  };

  return (
    <FormProvider {...form}>
      <form
        id="create-employee-form"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(submitForm)}>
        <FormFieldBlock title="Basic Information">
          <RhfInput
            id="name"
            fieldProps={{ label: "Name", isFieldRequired: true }}
            componentProps={{ placeholder: "Enter Person's Name" }}
          />
          <RhfInput
            id="email"
            fieldProps={{
              label: "Email",
              isFieldRequired: true,
              helperText: "The email should looks like this demo@example.com",
            }}
            componentProps={{
              placeholder: "Enter Person's Email",
              disabled: watch("role") === "ADMIN",
            }}
          />
          <RhfSelect
            fieldProps={{ label: "Gender" }}
            id="gender"
            options={[
              {
                label: "Male",
                value: "MALE",
              },
              {
                label: "Female",
                value: "FEMALE",
              },
              {
                label: "Other",
                value: "OTHER",
              },
            ]}
          />
        </FormFieldBlock>
        <FormFieldBlock title="Organizational Information">
          <RhfSelect
            fieldProps={{
              label: "Role",
              isFieldRequired: true,
              fieldMaxWidth: 350,
              helperText: "Specify Role. e.g Admin, Accountant, Employee",
            }}
            id="role"
            options={[
              {
                label: "Admin",
                value: "ADMIN",
              },
              {
                label: "Accountant",
                value: "ACCOUNTANT",
              },
              {
                label: "Employee",
                value: "EMPLOYEE",
              },
              {
                label: "Hr",
                value: "HR",
              },
            ]}
          />
          <RhfSelect
            fieldProps={{ label: "Job Title" }}
            id="job_title"
            options={jobTitleOptions}
            states={[
              {
                actionType: "showAt",
                referenceField: "gender",
                value: "MALE",
              },
            ]}
          />
        </FormFieldBlock>
      </form>
    </FormProvider>
  );
};

export default CreateEmployeeForm;
