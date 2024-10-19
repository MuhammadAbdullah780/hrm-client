"use server";

import { createRequest } from "@/functions/createRequest";
import { getApiPaths } from "@/functions/getPaths";

export const applyLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { LOGIN } = await getApiPaths();

    const data = await createRequest({
      endpoint: LOGIN,
      method: "POST",
      body: {
        email,
        password,
      },
    });

    return data;
  } catch (error) {
    console.log(error, "ERROR_______");
  }
};
