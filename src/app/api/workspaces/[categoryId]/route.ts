import db from "@/../prisma/client";
import { NextResponse } from "next/server";

// TODO: Fix any types
export async function GET(_: any, context: any) {
  const { categoryId } = context.params;
  try {
    const tasks = await db.task.findMany({
      where: {
        categoryId,
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
