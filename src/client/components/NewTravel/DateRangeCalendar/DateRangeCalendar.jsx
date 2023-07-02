import React from 'react';
import ReactDatePicker from 'react-datepicker';
import style from './DateRangeCalendar.module.scss';

const DateRangeCalendar = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div className={style.DateRangeCalendar}>
      <label for="date" className={style.DateRangeCalendar__label}>
        여행 일정
      </label>
      <div className={style.DateRangeCalendar__calendarWrapper}>
        <div className={style.DateRangeCalendar__calendar}>
          <label className={style.DateRangeCalendar__label}>여행 시작일</label>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy.MM.dd"
          />
        </div>
        <div className={style.DateRangeCalendar__calendar}>
          <label className={style.DateRangeCalendar__label}>여행 종료일</label>

          <ReactDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy.MM.dd"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangeCalendar;
