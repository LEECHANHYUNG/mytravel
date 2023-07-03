import React from 'react';

import style from './TravelCountryWeatherInfo.module.scss';
import Image from 'next/image';

const TravelCountryWeatherInfo = ({ temp, dateTime, humidity, icon }) => {
  return (
    <div className={style.TravelCountryWeatherInfo}>
      <div className={style.TravelCountryWeatherInfo__time}>
        {dateTime.split(':')[0].split('-')[2] + '시'}
      </div>
      <div className={style.TravelCountryWeatherInfo__temp}>
        <span>{Math.floor(temp - 273.15)}℃</span>
      </div>
      <div className={style.TravelCountryWeatherInfo__humidity}>
        {humidity + '%'}
      </div>
      <div className={style.TravelCountryWeatherInfo__icon}>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weatherIcon"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
};

export default TravelCountryWeatherInfo;
