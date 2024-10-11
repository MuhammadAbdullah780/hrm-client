"use client";
import FormFieldBlock from "@/components/common/FormFieldBlock";
import RhfDatePicker from "@/components/RhfFields/DatePicker";
import RhfInput from "@/components/RhfFields/Input";
import RhfSelect from "@/components/RhfFields/Select";
import { jobTitleOptions } from "@/constants/selectOptions/jobTitle";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

const CreateUserForm = (props: Props) => {
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
        {/* NAME */}
        <RhfInput
          id="name"
          fieldProps={{ label: "Name", isFieldRequired: true }}
          componentProps={{ placeholder: "Enter Person's Name" }}
        />
        {/* EMAIL */}
        <RhfInput
          id="email"
          fieldProps={{
            label: "Email",
            isFieldRequired: true,
            helperText: "The email should looks like this demo@example.com",
          }}
          componentProps={{
            placeholder: "Enter Person's Email",
          }}
        />
        {/* ROLE */}
        <RhfSelect
          fieldProps={{
            label: "Role",
            isFieldRequired: true,
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
        {/* JOB TITLE */}
        <RhfSelect
          fieldProps={{ label: "Job Title" }}
          id="job_title"
          options={jobTitleOptions}
        />
        {/* SPECIFIC JOB TITLE */}
        <RhfInput
          id="other_job_title"
          fieldProps={{
            label: "",
            helperText:
              'You selected the Job Title "Other" then please specify other Job Title.',
          }}
          componentProps={{ placeholder: "Specify Job Title" }}
          states={[
            {
              actionType: "showAt",
              referenceField: "job_title",
              value: "Other",
            },
          ]}
        />
        {/* JOIN DATE */}
        <RhfDatePicker fieldProps={{ label: "Hire Date" }} id="hire_date" />
        {/* EMPLOYMENT TYPE */}
        <RhfSelect
          fieldProps={{ label: "Employment Type" }}
          id="employment_type"
          options={[
            {
              label: "Part Time",
              value: "PART_TIME",
            },
            {
              label: "Full Time",
              value: "FULL_TIME",
            },
          ]}
        />
        {/* EMPLOYMENT STATUS */}
        <RhfSelect
          fieldProps={{ label: "Employment Status" }}
          id="employment_status"
          options={[
            {
              label: "Internee",
              value: "INTERNEE",
            },
            {
              label: "Probation",
              value: "PROBATION",
            },
            {
              label: "Permenant",
              value: "PERMENANT",
            },
          ]}
        />
        {/* WORKING HOURS */}
        <RhfSelect
          fieldProps={{ label: "Work Hours" }}
          id="work_hours"
          options={[
            {
              label: "1 Hour",
              value: "1",
            },
            {
              label: "2 Hours",
              value: "2",
            },
            {
              label: "3 Hours",
              value: "3",
            },
            {
              label: "4 Hours",
              value: "4",
            },
            {
              label: "5 Hours",
              value: "5",
            },
            {
              label: "6 Hours",
              value: "6",
            },
            {
              label: "7 Hours",
              value: "7",
            },
            {
              label: "8 Hours",
              value: "8",
            },
          ]}
        />
        {/* WORK MODE */}
        <RhfSelect
          fieldProps={{ label: "Work Mode" }}
          id="work_mode"
          options={[
            {
              label: "Remote",
              value: "REMOTE",
            },
            {
              label: "On Site",
              value: "ON_SITE",
            },
            {
              label: "Hybrid",
              value: "HYBRID",
            },
          ]}
        />
        {/* WORK DAYS */}
      </form>
    </FormProvider>
  );
};

export default CreateUserForm;
