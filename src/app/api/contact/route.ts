import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";

export async function GET() {
  try {
    await dbConnect();
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch messages:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const message = await ContactMessage.create(body);
    return NextResponse.json({ message }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create message:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
