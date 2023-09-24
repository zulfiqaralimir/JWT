import { NextResponse } from "next/server";
import * as jose from "jose";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (email == "admin" && password == "admin") {
    return NextResponse.json({ message: "succes" });
  }
  return NextResponse.json({ message: "faild" });
}
