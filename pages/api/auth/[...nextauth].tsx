import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import SanityAdapter from "@services/AuthService/SanityAdapter/SanityAdapter";
import { sanityClient } from "@services/SanityService/sanity.server";

export default NextAuth({
  adapter: SanityAdapter({ client: sanityClient }),
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token, user }) {
      console.log("Callback session ----");
      console.log(session);
      console.log(token);
      console.log(user);
      console.log("Callback session ----");
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("Callback jwt ----");
      console.log(token);
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(isNewUser);
      console.log("Callback jwt ----");

      token.payload = { bla: "bla" };

      return token;
    },
  },

  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});
