"use server";

export const getApiPaths = async () => {
  return {
    BASE_URL: process?.env?.BASE_URL || "http://localhost:3001/api/v1",

    /**
     * Auth Routes
     */
    LOGIN: "/login",
    RFERESH_TOKEN: "/referesh",

    /**
     * User Routes
     */
    CREATE_USER: "/user/create",
  };
};
