import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import GetTheCurrentDayAndTime from "@/helpers/getTheCurrentDayandTime";
import { H2, H2s, H3, H4, ImgDiv } from "../styledComponents/styledDiv";
import { AppLeftProps } from "@/types/type";

function AppLeft({ setIsLoading, setError, setData, data }: AppLeftProps) {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    if (value === "") {
      setError("Please enter a valid Place Name");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post("/api/weather/getSearchWeather", { value: value });
      setData(res.data.data);
    } catch (error: any) {
      const errMsg = error?.response?.data?.error;

      // set the Custom Error Message for Custom Error passing from the Route
      const customError = errMsg === "Search Place Weather not fetch Successfully";

      if (customError) {
        console.log("Data Fetching Failed", errMsg);
        setError(errMsg);
      } else {
        console.log("Data Fetching Failed", error.message);
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
      setValue("");
    }
  };

  const { weather, main, clouds, timezone, name } = data;
  const icon = weather?.[0]?.icon;
  const temp = main?.temp;
  const cloudPct = clouds?.all;
  const cloudsName =
    cloudPct > 80
      ? "Mostly Cloudy"
      : "Cloudy" || cloudPct > 50
      ? "Partly Cloudy"
      : "Clear" || cloudPct > 20
      ? "Mostly Clear"
      : "Overcast";

  const imgURL = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : "";

  const { todayInName, time } = GetTheCurrentDayAndTime();

  return (
    <div className="appLeft">
      <label className="input flex items-center gap-2 mb-5">
        <input
          type="text"
          className="grow"
          placeholder="Search for Places"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70 hover:opacity-50 cursor-pointer"
          onClick={handleClick}>
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="flex items-center justify-between gap-2 border-b-2 border-gray-100 pb-5">
        <div>
          <H2>{Math.round(temp)}&deg;C</H2>
          <H3>
            {`${todayInName},`}
            <span> {`${time}`}</span>
          </H3>
        </div>
        {icon && <Image src={imgURL} width={100} height={100} alt="Picture of the Weather" />}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Image src="/icon-01.png" width={40} height={40} alt="" />
        <H4>{`${cloudsName} - ${cloudPct}%`}</H4>
      </div>

      <ImgDiv>
        <H2s>{name}</H2s>
      </ImgDiv>
    </div>
  );
}

export default AppLeft;
