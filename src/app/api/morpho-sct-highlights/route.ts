import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import MorphoSCTHighlight from "@/lib/models/MorphoSCTHighlight";

export async function GET() {
  try {
    await dbConnect();
    const highlights = await MorphoSCTHighlight.find({}).sort({ order: 1 });
    return NextResponse.json({ highlights }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch highlights:", error);
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
    const highlight = await MorphoSCTHighlight.create(body);
    return NextResponse.json({ highlight }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create highlight:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
