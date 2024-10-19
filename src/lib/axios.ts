import { getApiPaths } from "@/functions/getPaths";
import _axios from "axios";

type AxiosInstanceArgs = {
  baseUrl: string;
  includeAuthorization?: boolean;
};

const generateAxiosInstance = async ({ baseUrl }: AxiosInstanceArgs) => {
  return _axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
};

export const getAxiosInstance = async () => {
  const { BASE_URL } = await getApiPaths();

  return {
    auth: await generateAxiosInstance({ baseUrl: `${BASE_URL}/auth` }),
    base: await generateAxiosInstance({
      baseUrl: `${BASE_URL}/`,
      includeAuthorization: true,
    }),
  };
};
