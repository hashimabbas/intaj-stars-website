// app/api/services/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/lib/models/Service";

export async function GET() {
  try {
    console.log("GET /api/services called"); // Add this
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json({ services }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch services:", error);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
