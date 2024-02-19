import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password, name } = await req.json();
        return NextResponse.json({ message: "User Registered ", status: 201})
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", status: 500})
    }
}