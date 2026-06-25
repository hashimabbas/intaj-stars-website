import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";

interface Params {
  id: string;
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const message = await ContactMessage.findByIdAndDelete(id);

    if (!message) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Message deleted" }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to delete message:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    const message = await ContactMessage.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!message) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to update message:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
