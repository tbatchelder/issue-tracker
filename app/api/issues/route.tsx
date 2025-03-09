import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  // Check that the validation is good
  if (!validation.success)
    // return NextResponse.json(validation.error.errors, { status: 400 }); // 400 = Bad Request
    return NextResponse.json(validation.error.format(), { status: 400 }); // format gives the same error as above but more formatted

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 }); // 201 = object created
}
