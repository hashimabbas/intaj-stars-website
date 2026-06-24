import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import MorphoSCTHighlight from "@/lib/models/MorphoSCTHighlight";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const highlight = await MorphoSCTHighlight.findById(id);

    if (!highlight) {
      return NextResponse.json(
        { message: "Highlight not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ highlight }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch highlight:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    const highlight = await MorphoSCTHighlight.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Highlight not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ highlight }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to update highlight:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const highlight = await MorphoSCTHighlight.findByIdAndDelete(id);

    if (!highlight) {
      return NextResponse.json(
        { message: "Highlight not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Highlight deleted" }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to delete highlight:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
