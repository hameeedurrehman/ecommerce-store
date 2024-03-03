import connectToDatabase from "@lib/mongodb";
import User from "@models/user";
import { NextResponse } from "next/server";
import brcypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { email, password, name } = await req.json();
    const hashedPassword = await brcypt.hash(password, 10);
    await connectToDatabase();
    await User.create({ email, password: hashedPassword, name });
    return NextResponse.json({ message: "User Registered", status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
