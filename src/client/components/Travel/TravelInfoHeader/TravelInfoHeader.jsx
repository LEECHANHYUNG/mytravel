import React from 'react';

import style from './TravelInfoHeader.module.scss';

const TravelInfoHeader = ({ country, startDate, endDate }) => {
  return (
    <header className={style.TravelInfoHeader}>
      <div className={style.TravelInfoHeader__country}>{country}</div>
      <div className={style.TravelInfoHeader__travelPeriod}>
        <span className={style.TravelInfoHeader__startDate}>{startDate}</span>
        <span className={style.TravelInfoHeader__divider}>~</span>
        <span className={style.TravelInfoHeader__startDate}>{endDate}</span>
      </div>
    </header>
  );
};

export default TravelInfoHeader;
