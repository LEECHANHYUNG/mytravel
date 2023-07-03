import React, { useEffect, useRef, useState } from 'react';

import style from './TravelCountryWeather.module.scss';
import axios from 'axios';
import { env } from '../../../../../next.config';
import TravelCountryWeatherInfo from '../TravelCountryWeatherInfo';

const TravelCountryWeather = ({ countryName }) => {
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    axios
      .get(`/location?q=${countryName}&limit=5&appid=${env.OPEN_WEATHER_KEY}`)
      .then((res) => {
        axios
          .get(
            `/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${env.OPEN_WEATHER_KEY}`
          )
          .then((res) => setWeatherInfo(res.data.list));
      })
      .catch(setWeatherInfo('날씨 정보를 일시적으로 받아올 수 없습니다.'));
  }, []);

  return (
    <div className={style.TravelCountryWeather}>
      <header>
        <h4>날씨 정보</h4>
      </header>
      <div className={style.TravelCountryWeather__weatherInfo}>
        {Array.isArray(weatherInfo) &&
          weatherInfo.map((weather) => (
            <TravelCountryWeatherInfo
              key={weather.dt}
              dateTime={weather.dt_txt}
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              icon={weather.weather[0].icon}
            />
          ))}
      </div>
    </div>
  );
};

export default TravelCountryWeather;
