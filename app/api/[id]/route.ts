// app/api/services/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/lib/models/Service";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = params;
    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ service }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch service:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
