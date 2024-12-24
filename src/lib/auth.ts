import { createRequest } from "@/functions/createRequest";
import { getApiPaths } from "@/functions/getPaths";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
        account_type: {
          label: "Account Type",
          type: "text",
        },
      },
      async authorize({ email, password, account_type }) {
        try {
          console.log("INNER__________");
          const { LOGIN } = await getApiPaths();

          const data = await createRequest({
            endpoint: LOGIN,
            method: "POST",
            instanceType: "auth",
            body: {
              email,
              password,
              account_type,
            },
          });
          console.log(data?.data, "DATA_____________");

          // if (!data?.isSuccess) {
          //   throw new Error("Error Occured while applying login");
          // }

          return { ...data?.data };
        } catch (error: any) {

          console.log(error?.message, 'ERROR_____INSIDE____NEXT____AUTH')
          throw new Error(error);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ token, session }) {
      /* @ts-ignore */
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
});
