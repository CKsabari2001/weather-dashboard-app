import axios from "axios";
import { getUserCurrentWeather } from "./getUserCurrentWeather";

export async function getSearchWeather(value: string) {
  try {
    const res = await axios.get<[{ lat: string; lon: string }]>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${
        process.env.MY_API_KEY_WEATHER_API ?? ""
      }`
    );

    const res2 = await getUserCurrentWeather(res.data?.[0]);

    return res2;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
