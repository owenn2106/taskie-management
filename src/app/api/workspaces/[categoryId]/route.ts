import db from "@/../prisma/client";
import { NextRequest, NextResponse } from "next/server";

// TODO: Fix any types
export async function GET(req: NextRequest, context: any) {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const { categoryId } = context.params;
  try {
    const tasks = await db.task.findMany({
      where: {
        categoryId,
        userId: userId ? userId : undefined,
      },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Could not fetch workspaces: ${err}` },
      { status: 500 },
    );
  }
}
