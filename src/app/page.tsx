"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { App, Container } from "@/app/styledComponents/styledDiv";
import AppLeft from "./components/appLeft";
import AppRight from "./components/appRight";
import { WeatherData, forecastData } from "@/types/type";

export default function Page() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({} as WeatherData);
  const [forecastData, setForecastData] = useState({} as forecastData);

  useEffect(() => {
    async function getUserIp() {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/weather/getCurrentWeather");

        const { resCurrentWeather, resForecastWeather } = response?.data?.data;

        setData(resCurrentWeather);
        setForecastData(resForecastWeather);
      } catch (error: any) {
        const errMsg = error?.response?.data?.error;

        // set the Custom Error Message for Custom Error passing from the Route
        const customError =
          errMsg === "User IP not fetch Successfully" ||
          errMsg === "Geographic Coordinate not fetch Successfully" ||
          errMsg === "Weather Data not fetch Successfully" ||
          errMsg === "Forecast Weather Data not fetch Successfully";

        if (customError) {
          console.log("Data Fetching Failed", errMsg);
          setError(errMsg);
        } else {
          console.log("Data Fetching Failed", error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
        setError("");
      }
    }

    getUserIp();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError("");
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className=" w-full flex justify-center">
        <span className="loading loading-spinner loading-lg d-flex justify-content-center align-items-center min-h-screen"></span>
      </div>
    );
  }

  return (
    <>
      <Container>
        <Toaster position="top-center" reverseOrder={false} />
        <App>
          <AppLeft setIsLoading={setIsLoading} setError={setError} setData={setData} data={data} />
          <AppRight data={data} forecastData={forecastData} />
        </App>
      </Container>
    </>
  );
}
