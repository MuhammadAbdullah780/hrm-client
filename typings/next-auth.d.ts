import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    };
    tokens: {
      access_token: string;
    };
    expires_in: number;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
    };
    tokens: {
      access_token: string;
    };
    expires_in: number;
  }
}