import React, { useEffect, useRef, useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  UncontrolledDropdown,
} from 'reactstrap';
import style from './SearchPlaceInput.module.scss';
import axios from 'axios';
import { env } from '../../../../next.config';
import { useGoogleMap, Autocomplete } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { updateSearchPlaceInfo } from '@/client/utils/store/searchPlaceSlice';
import { AiOutlineMenu, AiFillCalendar } from 'react-icons/ai';
import { MdOutlineToday } from 'react-icons/md';
import { CgToday } from 'react-icons/cg';
import IconWithButton from '../commons/IconWithButton';
import Link from 'next/link';

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
      <Autocomplete className={style.SearchPlaceInput__input}>
        <Input
          placeholder="여행지 입력"
          innerRef={searchPlaceInputRef}
          onKeyDown={handleInputChange}
        />
      </Autocomplete>
      <UncontrolledDropdown className={style.SearchPlaceInput__dropdown}>
        <DropdownToggle color="transparent">
          <AiOutlineMenu />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link href="/my-all-trips/all-trips">
              <IconWithButton Icon={<AiFillCalendar />} color="transparent">
                여행 기록
              </IconWithButton>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/my-all-trips/all-trips">
              <IconWithButton Icon={<MdOutlineToday />} color="transparent">
                진행중 여행
              </IconWithButton>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/my-all-trips/all-trips">
              <IconWithButton Icon={<CgToday />} color="transparent">
                오늘 여행 일정
              </IconWithButton>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default SearchPlaceInput;
