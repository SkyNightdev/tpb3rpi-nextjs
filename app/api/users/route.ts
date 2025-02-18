import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

// 📌 Récupérer tous les utilisateurs
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// 📌 Ajouter un utilisateur
export async function POST(req) {
  const { name, email, password, role } = await req.json();
  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword, role },
  });
  return NextResponse.json(user);
}
