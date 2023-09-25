import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  if (email == "admin" && password == "admin") {
    const secret = new TextEncoder().encode("mysecret");
    const alg = "HS256";
    // console.log(secret);

    const jwt = await new jose.SignJWT({
      email: body.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .setIssuedAt()
      .sign(secret);
      cookies().set("token", jwt)
    // console.log(jwt);
    return NextResponse.json({ message: "Login Successful" });
  }
  return NextResponse.json({ message: "Login Faild" });
}

// npm i jose
