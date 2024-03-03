import connectToDatabase from "@lib/mongodb";
import User from "@models/user";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await connectToDatabase();
    const { email } = await req.json();
    console.log(email)
    const user = await User.findOne({ email }).select("_id");
    console.log(user, "user email")
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
