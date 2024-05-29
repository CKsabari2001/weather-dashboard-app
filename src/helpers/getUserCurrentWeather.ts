import axios from "axios";

export async function getUserCurrentWeather(resGeoLocation: { lat: string; lon: string }) {
  // Get the User Current Weather if not Throw error
  try {
    const lat = resGeoLocation.lat;
    const lon = resGeoLocation.lon;
    const resCurrentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        process.env.MY_API_KEY_WEATHER_API ?? ""
      }&units=metric`
    );
    return resCurrentWeather.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
