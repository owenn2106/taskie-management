import db from "@/../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  try {
    const workspaces = await db.workspace.findMany({
      where: {
        users: {
          some: {
            id: userId ? userId : undefined,
          },
        },
      },
      include: {
        categories: true,
      },
    });
    return NextResponse.json(workspaces, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Could not fetch workspaces: ${err}` },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const { name, userId } = await req.json();
  try {
    const workspace = await db.workspace.create({
      data: {
        name,
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return NextResponse.json(workspace, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: `Could not create workspace: ${err}` },
      { status: 500 },
    );
  }
}
