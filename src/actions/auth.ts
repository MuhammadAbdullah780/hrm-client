"use server";

import { createRequest } from "@/functions/createRequest";
import { getApiPaths } from "@/functions/getPaths";
import { signIn, signOut } from "@/lib/auth";

// export const applyLogin = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   try {
//     const { LOGIN } = await getApiPaths();

//     const data = await createRequest({
//       endpoint: LOGIN,
//       method: "POST",
//       body: {
//         email,
//         password,
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error, "ERROR_______");
//   }
// };

export const handleSignOut = async () => {
  await signOut();
};

export const handleCredentialSignIn = async (data: {
  email: string;
  password: string;
  account_type: string;
}) => {
  return await signIn("credentials", { ...data, redirect: false });
};
