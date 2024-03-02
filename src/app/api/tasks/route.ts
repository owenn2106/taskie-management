import db from "@/../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  try {
    const tasks = await db.task.findMany({
      where: {
        userId: userId ? userId : undefined,
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
