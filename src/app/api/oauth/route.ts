import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams, nextUrl } = request;
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    const { account } = await createAdminClient();

    try {
        const session = await account.createSession(userId, secret);

        // Set cookie with session secret
        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return NextResponse.redirect(`${nextUrl.origin}/homepage`);
    } catch (error) {
        console.error("Error creating session:", error);
        return NextResponse.error();
    }
}
