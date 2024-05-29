import { NextResponse } from "next/server";

// Helpers
import { getUserIP } from "@/helpers/getUserIP";
import { getUserGeoData } from "@/helpers/getUserGeoData";
import { getUserCurrentWeather } from "@/helpers/getUserCurrentWeather";
import { getForecastWeather } from "@/helpers/getForecastWeather";

export async function GET() {
  try {
    // Get the User IP if not Throw error
    const resUserIP = await getUserIP();
    if (!resUserIP) {
      return NextResponse.json({ error: "User IP not fetch Successfully" }, { status: 400 });
    }

    // Get the Geographic Coordinate if not Throw error
    const resGeoLocation = await getUserGeoData(resUserIP);
    if (!resGeoLocation) {
      return NextResponse.json({ error: "Geographic Coordinate not fetch Successfully" }, { status: 400 });
    }

    // Get the Current Weather Data if not Throw error
    const resCurrentWeather = await getUserCurrentWeather(resGeoLocation);
    if (!resCurrentWeather) {
      return NextResponse.json({ error: "Weather Data not fetch Successfully" }, { status: 400 });
    }

    // Get the Forecast Weather Data if not Throw error
    const resForecastWeather = await getForecastWeather(resGeoLocation);
    if (!resForecastWeather) {
      return NextResponse.json({ error: "Forecast Weather Data not fetch Successfully" }, { status: 400 });
    }

    return NextResponse.json({
      data: { resCurrentWeather, resForecastWeather },
      message: "Success Fully Get the Current Weather Data",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
