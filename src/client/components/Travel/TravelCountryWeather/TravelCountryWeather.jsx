import React, { useEffect, useRef, useState } from 'react';

import style from './TravelCountryWeather.module.scss';
import axios from 'axios';
import TravelCountryWeatherInfo from '../TravelCountryWeatherInfo';
import { Button, UncontrolledCollapse } from 'reactstrap';
import { BsChevronDown } from 'react-icons/bs';

const TravelCountryWeather = ({ countryName }) => {
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    axios
      .get(
        `/location?q=${countryName}&limit=5&appid=${process.env.OPEN_WEATHER_KEY}`
      )
      .then((res) => {
        axios
          .get(
            `/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${process.env.OPEN_WEATHER_KEY}`
          )
          .then((res) => setWeatherInfo(res.data.list));
      })
      .catch(setWeatherInfo('날씨 정보를 일시적으로 받아올 수 없습니다.'));
  }, []);

  return (
    <>
      <header>
        <Button
          color="transparent"
          id="toggler"
          className={style.TravelCountryWeather__button}
        >
          <span>날씨</span>
          <span>
            <BsChevronDown />
          </span>
        </Button>
      </header>
      <UncontrolledCollapse
        toggler="#toggler"
        className={style.TravelCountryWeather}
      >
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
      </UncontrolledCollapse>
    </>
  );
};

export default TravelCountryWeather;
