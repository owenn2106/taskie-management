import db from "@/../prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await db.task.findMany();
    return NextResponse.json(tasks, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Could not fetch tasks" },
      { status: 500 },
    );
  }
}
