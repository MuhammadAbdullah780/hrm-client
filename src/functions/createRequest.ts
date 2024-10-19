"use client";

import { getAxiosInstance } from "@/lib/axios";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

type Payload = {
  endpoint: string;
  method: Method;
  body?: any;
  params?: any;
  /**
   * Prefix URL's for each instances
   * 1. base --> `/api/v1`
   * 4. auth --> `/api/v1/auth`
   */
  instanceType?: "auth" | "base";
  /**
   * Content type of Request
   */
  contentType?: "multipart/form-data" | "application/json";
};

// Success Response Type
export type SuccessType<T> = {
  data: T;
  isSuccess: boolean;
  message?: string;
};

// Error Response Type
export type ErrorType = {
  axiosError: string | undefined;
  error: string | undefined;
};

/**
 * @desc Axois Create Request Utility Function
 */
export const createRequest = async <T extends {} = any>({
  endpoint,
  method,
  body,
  params,
  contentType,
  instanceType = "base",
}: Payload): Promise<SuccessType<T>> => {
  try {
    //
    const instance = await getAxiosInstance();

    //
    const { data } = await instance?.[instanceType]({
      data: body,
      url: endpoint,
      method,
      params,
    });

    //
    return data;
  } catch (e: any) {
    //
    const myError: ErrorType = {
      axiosError: e?.message || undefined,
      error: e?.response?.data?.message || undefined,
    };

    throw new Error(myError?.error || myError?.axiosError);
  }
};
