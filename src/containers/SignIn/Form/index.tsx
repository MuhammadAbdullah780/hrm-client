"use client";
import { Button } from "@/components/common/Button";
import RhfInput from "@/components/RhfFields/Input";
import RhfSelect from "@/components/RhfFields/Select";
import { accountTypeOptions } from "@/constants/selectOptions/accountType";
import { signIn } from "next-auth/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const SignInForm = () => {
  const form = useForm();

  const { handleSubmit } = form;

  const submitForm = async (data: any) => {
    try {
      // calls login action

      await signIn("credentials", { ...data, redirectTo: "/" });
    } catch (error) {
      console.log(error, "SIGN_IN_ERROR");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="py-5 flex flex-col gap-4 w-full max-w-[400px] lg:max-w-full">
        <RhfInput
          fieldProps={{ label: "Username", orientation: "vertical" }}
          id="username"
        />
        <RhfInput
          id="password"
          fieldProps={{ label: "Password", orientation: "vertical" }}
          componentProps={{ type: "password" }}
        />
        <RhfSelect
          fieldProps={{ label: "Account Type", orientation: "vertical" }}
          id="account_type"
          options={accountTypeOptions}
        />
        <Button type="submit">Login</Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
