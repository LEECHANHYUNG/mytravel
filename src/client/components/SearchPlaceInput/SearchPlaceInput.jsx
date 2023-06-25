import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'reactstrap';
import style from './SearchPlaceInput.module.scss';
import axios from 'axios';
import { env } from '../../../../next.config';
import { useGoogleMap, Autocomplete } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { updateSearchPlaceInfo } from '@/client/utils/store/searchPlaceSlice';

const SearchPlaceInput = ({ mapCenter }) => {
  const searchPlaceInputRef = useRef();
  const map = useGoogleMap();
  const dispatch = useDispatch();
  const [newLocation, setNewLocation] = useState(mapCenter);
  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(
          `/maps/api/place/findplacefromtext/json?input=${searchPlaceInputRef.current.value}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`
        )
        .then((res) => {
          setNewLocation(res.data.candidates[0].geometry.location);
          dispatch(updateSearchPlaceInfo(res.data.candidates[0]));
        });
    }
  };
  useEffect(() => {
    if (map) {
      map.panTo(newLocation);
    }
  }, [map, newLocation]);

  return (
    <div className={style.SearchPlaceInput}>
      <Autocomplete>
        <Input
          placeholder="여행지 입력"
          innerRef={searchPlaceInputRef}
          onKeyDown={handleInputChange}
        />
      </Autocomplete>
    </div>
  );
};

export default SearchPlaceInput;
