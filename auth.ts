import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Auth0({
      name: "Auth0",
      clienId: process.env.AUTH_AUTH0_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET,
      domain: process.env.AUTH_AUTH0_DOMAIN,
      issuer: `https://${process.env.AUTH_AUTH0_DOMAIN}/`,
    }),
  ],
});
