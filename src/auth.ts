import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import Google from "next-auth/providers/google";

// This configuration ensures users can authenticate using Google
export const config = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      // Only allow sign-in if the provider is Google and email is present
      if (account?.provider === "google" && profile?.email) {
        // you can put here your custom logic
        // for example in the database, you can check if the user is allowed to sign in
        // or add him to the database if he is not there etc.
        return true;
      }
      return false;
    },
  },
} satisfies NextAuthOptions;

// This function returns a user session using the config above
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
