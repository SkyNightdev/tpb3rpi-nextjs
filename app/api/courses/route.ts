import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// 📌 Récupérer tous les cours
export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: { teacher: true }
    });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des cours." }, { status: 500 });
  }
}

// 📌 Ajouter un cours
export async function POST(req) {
  try {
    const { title, description, instrument, teacherId } = await req.json();
    const course = await prisma.course.create({
      data: { title, description, instrument, teacherId }
    });
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la création du cours." }, { status: 500 });
  }
}
