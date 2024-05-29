import axios from "axios";

export async function getUserGeoData(ip: string) {
  // Get the User Geographic Coordinate if not Throw error
  try {
    const resGeoLocation = await axios.get<{ lat: string; lon: string }>(`http://ip-api.com/json/${ip}`);

    return resGeoLocation.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
