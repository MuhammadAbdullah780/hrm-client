import { applyLogin } from "@/actions/auth";
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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const data = await applyLogin({
          email: String(credentials?.email!),
          password: String(credentials?.password!),
        });
        return data;
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
