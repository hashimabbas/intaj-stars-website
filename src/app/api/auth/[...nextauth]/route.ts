// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!, //The "!" asserts that the value isn't null or undefined.
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  // Add other options like session, callbacks, etc. as needed
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
