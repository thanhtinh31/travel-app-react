import React, { useEffect, useState } from "react";
import LocationTop from "../../components/LocationTop";
import Search from "../../components/Search";
import Timedetail from "../../components/Timedetail";
import CurrentWeather from "../../components/CurrentWeather";
import Hourlyforecast from "../../components/Hourlyforecast";
import Dailyforecast from "../../components/Dailyforecast";

function Weather(props) {

  const url_API =
    "https://api.weatherapi.com/v1/search.json?key=4f80652ef3d54ea2b3f63552232305&q=";

  const weatherURL = (city) =>
    `http://api.weatherapi.com/v1/forecast.json?key=4f80652ef3d54ea2b3f63552232305&q=${city}&days=14&aqi=no&alerts=no`;

  const [location, setLocation] = useState(
    () => {(props.city||localStorage.getItem("city"));
          
          }
  );
  useEffect(() => {
    localStorage.removeItem("city")
    localStorage.setItem("city", JSON.stringify(location));
  }, [location]);
  const [city, setCity] = useState(props.city);
  const [background, setBackground] = useState("");
  const [citySuggest, setCitySugges] = useState([]);
  const [click, setClick] = useState(false);

  const [condition, setConditon] = useState("");

  const [current, setCurrent] = useState();
  const [currentWeather, setCurrentWeather] = useState(false);

  const [forecast, setForecast] = useState(false);

  const renderUi = async () => {
    const weatherURL = 'http://api.weatherapi.com/v1/forecast.json?key=4f80652ef3d54ea2b3f63552232305&q='+{city}+'&days=14&aqi=no&alerts=no';
    const res = await fetch(weatherURL);
    const data = await res.json();
    console.log(data);
    console.log("hieu");
    const time = data.location.localtime;
    setCurrent(formatTime(time));
    setConditon(data.current.condition.text);
    setForecast(data.forecast);
    setCurrentWeather(data.current);
    const datePart = time.match(/\d+/g);
    if (datePart[3] < 6 || datePart[3] >= 18) {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("night");
      }
    } else {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      else if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("sun");
      }
    }
  };
  window.onload = () => {
    renderUi();
  };
  const formatTime = (time) => {
    let session = "AM";
    const datePart = time.match(/\d+/g);
    if (datePart[3] == 0) {
      datePart[3] = 12;
    }
    if (datePart[3] > 12) {
      datePart[3] = datePart[3] - 12;
      session = "PM";
    }
    datePart[3] = datePart[3] < 10 ? "0" + datePart[3] : datePart[3];
    datePart[2] = datePart[2] < 10 ? "0" + datePart[2] : datePart[2];
    console.log(datePart);

    return (
      datePart[2] +
      "/" +
      datePart[1] +
      "/" +
      datePart[0] +
      " | " +
      datePart[3] +
      ":" +
      datePart[4] +
      " " +
      session
    );
  };

  const clickButtonCity = async (cityClick) => {
    const res = await fetch(weatherURL(cityClick));
    const data = await res.json();
    setClick(true);
    setCity("");
    setLocation(cityClick);
    const time = data.location.localtime;
    setCurrent(formatTime(time));
    setConditon(data.current.condition.text);
    setForecast(data.forecast);
    setCurrentWeather(data.current);
    const datePart = time.match(/\d+/g);
    if (datePart[3] < 6 || datePart[3] >= 18) {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      else if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("night");
      }
    } else {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      else if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("sun");
      }
    }
    // console.log(data.forecast.forecastday[0]);
  };

  const handleClick = async (cityClick) => {
    const res = await fetch(weatherURL(cityClick));
    const data = await res.json();
    setCity(cityClick);
    setClick(true);
    setLocation(cityClick);
    const time = data.location.localtime;
    setCurrent(formatTime(time));
    setConditon(data.current.condition.text);
    setCurrentWeather(data.current);
    setForecast(data.forecast);
    const datePart = time.match(/\d+/g);
    if (datePart[3] < 6 || datePart[3] >= 18) {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      else if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("night");
      }
    } else {
      if (data.current.condition.text.includes("rain", 0) === true)
        setBackground("rain");
      else if (data.current.condition.text.includes("snow", 0) === true)
        setBackground("snow");
      else {
        setBackground("sun");
      }
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      const fetchCity = async () => {
        const res = await fetch(url_API + city);
        const data = await res.json();
        console.log(data);
        const cityCurrent = data.map(
          (curData) => `${curData.name},${curData.country}`
        );
        setCitySugges(cityCurrent);
      };
      if (!click && city) {
        fetchCity();
      } else {
        setCitySugges([]);
        setClick(false);
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [city]);

  const Background = () => {
    if (background === "sun") return "bg-[url(./assets/sun.jpg)]";
    if (background === "snow") return "bg-[url(./assets/snow.jpg)]";
    if (background === "rain") return "bg-[url(./assets/rain.jpg)]";
    return "bg-[url(./assets/night.jpg)]";
  };
  return (
    <div className="mt-28">
      <div
        className={`mx-auto max-w-screen-md  my-2 bg-cover bg-center rounded-md shadow-md shadow-gray-400 ${Background()}`}
      >
        <div className=" w-full h-full py-4 px-4 bg-bg-overlay rounded-md">
          <LocationTop clickButtonCity={clickButtonCity} />
          <Search
            setLocation={setLocation}
            setCurrent={setCurrent}
            city={city}
            handleClick={handleClick}
            citySuggest={citySuggest}
            setCity={setCity}
          />
          <Timedetail location={location} current={current} />
          {forecast && (
            <CurrentWeather
              currentWeather={currentWeather}
              forecast={forecast}
              condition={condition}
            />
          )}
        {forecast && <Hourlyforecast forecast={forecast} title="hourly forecast" />}
        {forecast && <Dailyforecast forecast={forecast} title="Daily forecast" />}
        </div>
      </div>
    </div>
  );
}

export default Weather;