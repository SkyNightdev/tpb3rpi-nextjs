import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }
        return { id: user.id, name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
