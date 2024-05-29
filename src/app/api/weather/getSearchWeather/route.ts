import { getSearchWeather } from "@/helpers/getSearchWeather";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    let { value } = reqBody;
    value = value.toLowerCase();

    // Get the Weather Data if not Throw error
    const res = await getSearchWeather(value);
    if (!res) {
      return NextResponse.json({ error: "Search Place Weather not fetch Successfully" }, { status: 400 });
    }

    return NextResponse.json({
      data: res,
      message: "Success Fully Get the Weather Data",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
