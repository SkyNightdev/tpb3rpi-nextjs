import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash, compare } from 'bcryptjs';

export async function POST(req) {
  const { name, email, password, role } = await req.json();
  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword, role }
  });
  return NextResponse.json({ user });
}
