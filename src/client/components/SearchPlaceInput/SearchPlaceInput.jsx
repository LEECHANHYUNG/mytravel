import React, { useRef } from 'react';
import { Input } from 'reactstrap';
import style from './SearchPlaceInput.module.scss';
const SearchPlaceInput = () => {
  const searchPlaceInputRef = useRef();
  const handleInputChange = () => {
    console.log(searchPlaceInputRef.current.value);
  };
  return (
    <div className={style.SearchPlaceInput}>
      <Input
        placeholder="여행지 입력"
        innerRef={searchPlaceInputRef}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchPlaceInput;
