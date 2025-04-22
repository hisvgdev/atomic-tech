
import { sendContactRequest } from "@/service/actions/contactRequest";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  await sendContactRequest({
    email: body.email,
    number: body.number,
    telegram: body.telegram,
  });

  return NextResponse.json({ success: true });
}
