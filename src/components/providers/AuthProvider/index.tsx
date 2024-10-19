"use client";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
