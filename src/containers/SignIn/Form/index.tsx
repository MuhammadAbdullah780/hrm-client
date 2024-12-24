"use client";
import { Button } from "@/components/common/Button";
import RhfInput from "@/components/RhfFields/Input";
import RhfSelect from "@/components/RhfFields/Select";
import { accountTypeOptions } from "@/constants/selectOptions/accountType";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleCredentialSignIn } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

type Payload = z.infer<typeof loginFormSchema>;

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<Payload>({
    resolver: zodResolver(loginFormSchema),
  });

  const { handleSubmit } = form;

  const submitForm = async (data: Payload) => {
    try {
      console.log("CREDS______");
      // calls login action
      // const res = await signIn("credentials", { ...data, redirect: false });
      const res = await handleCredentialSignIn(data);

      if (res?.error) {
        console.log("ERROR_____OCCURED");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error, "SIGN_IN_ERROR");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="py-5 flex flex-col gap-4 w-full max-w-[400px] lg:max-w-full"
      >
        <RhfInput
          fieldProps={{ label: "Email", orientation: "vertical" }}
          id="email"
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
        <Button onClick={() => console.log("CLICKED_________")} type="submit">
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
