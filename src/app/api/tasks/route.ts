import db from "@/../prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await db.task.findMany({
      where: {
        userId: "091471b3-c332-44fc-bd80-2bd938f69a3f",
      },
      include: {
        tags: true,
      },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Could not fetch tasks: ${err}` },
      { status: 500 },
    );
  }
}
