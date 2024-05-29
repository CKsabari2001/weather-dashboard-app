import React from "react";
import { H2, H3, H4, Heading } from "../styledComponents/styledDiv";
import getSunRiseTime from "@/helpers/getSunRiseTime";
import Image from "next/image";
import { AppRightProps } from "@/types/type";

function AppRight({ data, forecastData }: AppRightProps) {
  const speed = data?.wind?.speed;
  const deg = data?.wind?.deg;
  const sunrise = data?.sys?.sunrise;
  const sunset = data?.sys?.sunset;
  const humidity = data?.main?.humidity;
  const visibility = data?.visibility;
  let km = visibility / 1000;

  const sunriseTime = getSunRiseTime(sunrise);
  const sunsetTime = getSunRiseTime(sunset);

  const forecastList = forecastData?.list;
  const dailyForecast = [];
  for (let i = 0; i < forecastList?.length; i += 8) {
    dailyForecast.push(forecastList[i]);
  }

  return (
    <div className="AppRight">
      <Heading>Todays Highlight</Heading>
      <div className=" grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-5">
        <div className="card bg-base-100 shadow-xl p-5 min-h-60 text-center sm:text-start">
          <H3>Wind Status</H3>
          <H2>
            {`${speed}`}
            <span>m/s</span>
          </H2>
          <H4>
            <span className="flex items-center justify-center sm:justify-start ">
              <img src="/icon-02.png" alt="" className="w-8 h-8 mr-2" />
              {`${deg}`}
              <span>&deg;</span>
            </span>
          </H4>
        </div>
        <div className="card bg-base-100 shadow-xl p-5 min-h-60 text-center sm:text-start">
          <H3 className="mb-5">Sunrise & Sunset</H3>
          <H3>
            <span className=" flex items-center justify-center sm:justify-start">
              <img src="/icon-03.png" alt="" className="w-8 h-8 mr-2" />
              {sunriseTime}
            </span>
          </H3>
          <H3>
            <span className=" flex items-center mt-5 justify-center sm:justify-start">
              <img src="/icon-04.png" alt="" className="w-8 h-8 mr-2" />
              {sunsetTime}
            </span>
          </H3>
        </div>
        <div className="card bg-base-100 shadow-xl p-5 min-h-60 text-center sm:text-start">
          <H3 className="mb-0">Humidity</H3>
          <H2 className=" flex items-center justify-center sm:justify-start">
            <img src="/icon-05.png" alt="" className="w-12 h-12 mr-2" />
            {`${humidity}%`}
          </H2>
          <H3>{humidity > 80 ? "high⚡" : "Normal😊" || humidity < 30 ? "Low😁" : "Normal😊"}</H3>
        </div>
        <div className="card bg-base-100 shadow-xl p-5 min-h-60 text-center sm:text-start">
          <H3 className="">Visibility</H3>
          <H2 className="flex items-center justify-center sm:justify-start">{`${km}km`}</H2>
          <H3>{visibility < 3000 ? "low🥹" : "Normal😊" || visibility > 8000 ? "High😁" : "Normal😊"}</H3>
        </div>
      </div>

      <Heading className="mt-10">Forecasts</Heading>
      <div className="grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5 mt-5">
        {dailyForecast.map((item, index) => {
          const timestamp = item.dt;

          const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
          const formatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });
          const day = formatter.format(date);

          const icon = item?.weather?.[0]?.icon;
          const temp = item?.main?.temp;
          const feels_like = item?.main?.feels_like;

          return (
            <div key={index} className="card bg-base-100 shadow-xl p-5 min-h-60">
              <H3 className="text-center">{day}</H3>
              <Image
                className="mx-auto"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                width={100}
                height={100}
                alt=""
              />
              <H4 className="text-center">
                <span>Temp - {Math.round(temp)}°C</span>
              </H4>
              <H4 className="text-center">
                <span>feels like - {Math.round(feels_like)}°C</span>
              </H4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppRight;
