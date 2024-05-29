export interface WeatherData {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  timezone: number | string;
  name: string;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  visibility: number;
}
export interface AppLeftProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<WeatherData>>;
  data: WeatherData;
}

export interface forecastData {
  list: [
    {
      dt: number;
      weather: [
        {
          icon: string;
        }
      ];
      main: {
        temp: number;
        feels_like: number;
      };
    }
  ];
}

export interface AppRightProps {
  data: WeatherData;
  forecastData: forecastData;
}
