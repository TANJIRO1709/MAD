import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { nextUrl } = request; // Extract nextUrl from request
  const userId = nextUrl.searchParams.get("userId");
  const secret = nextUrl.searchParams.get("secret");

  const { account } = await createAdminClient();
  if (!userId || !secret) {
    return NextResponse.json({ error: "Missing userId or secret" }, { status: 400 });
  }
  const session = await account.createSession(userId, secret);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return NextResponse.redirect(`${nextUrl.origin}/homepage`);
}
