import { db } from "@/lib/db";
import { users } from "@/schema";
import { eq } from "drizzle-orm";
import argon2 from "argon2";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((r) => r[0]);

  if (!user) {
    return NextResponse.json({ error: "invalid email" }, { status: 401 });
  }

  const valid = await argon2.verify(user.password, password);

  if (!valid) {
    return NextResponse.json({ error: "wrong password" }, { status: 401 });
  }

  (await cookies()).set("admin", "true", {
    httpOnly: true,
  });

  return NextResponse.json({ success: true });
}
