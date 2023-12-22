import { auth } from "../../../../lib/auth";
import { appwrite } from "@/lib/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const res = await auth.login({ email, password });
    const jwtTokens = await appwrite.account.createJWT();
    if (res.success) {
      return new NextResponse(
        JSON.stringify({ success: true, message: "Successfully loggedin" }),
        {
          status: 200,
          headers: { "Set-Cookie": `accessToken=${jwtTokens.jwt}` },
        }
      );
    }
    return new NextResponse(
      JSON.stringify({ success: false, message: "Error logging in" }),
      { status: 400 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error logging in",
        data: null,
        error,
      }),
      { status: 400 }
    );
  }
}
