import db from "@/../prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const workspaces = await db.user.findMany({
      // where: {
      //   id: "091471b3-c332-44fc-bd80-2bd938f69a3f",
      // },
      include: {
        workspaces: true,
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
