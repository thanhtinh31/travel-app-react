import React from "react";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity, WiSunset, WiSunrise } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
function Temperaturedetail({currentWeather,forecast, condition }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-2 text-white">
        <img
          src={currentWeather.condition.icon}
          alt=""
          className="w-20"
        />
        <p className="text-white text-lg font-medium">{condition}</p>
      </div>
      <div className="flex items-center mx-4 justify-between text-white py-2">
        <div className="flex font-light text-sm items-center justify-center">
          <FaTemperatureLow size={20} className="mr-1" />
          <p className="font-light">
            Temp: <span>{currentWeather.temp_c} °C / </span><span>{currentWeather.temp_f} °F</span>
          </p>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <WiHumidity size={20} className="mr-1" />
          <p className="font-light">
            Humidity: <span>{currentWeather.humidity}</span>
          </p>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <RiWindyFill size={20} className="mr-1" />
          <p className="font-light">
            Wind: <span>{currentWeather.wind_kph} km/h</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-sm py-4">
        <WiSunrise />
        <p className="font-light">
          Rise: <span>{forecast.forecastday[0].astro.sunrise}</span>
        </p>
        <p className="font-light px-1">|</p>
        <WiSunset />
        <p className="font-light">
          Set: <span>{forecast.forecastday[0].astro.sunset}</span>
        </p>
        <p className="font-light px-1">|</p>
        <FaTemperatureHigh />
        <p className="font-light">
          High: <span>{forecast.forecastday[0].day.maxtemp_c} °C / </span>
          <span>{forecast.forecastday[0].day.maxtemp_f} °F</span>
        </p>
        <p className="font-light px-1">|</p>
        <FaTemperatureLow />
        <p className="font-light">
          Low: <span>{forecast.forecastday[0].day.mintemp_c} °C / </span>
          <span>{forecast.forecastday[0].day.mintemp_f} °F</span>
        </p>
      </div>
    </div>
  );
}

export default Temperaturedetail;