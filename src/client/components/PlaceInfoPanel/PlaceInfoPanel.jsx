import React from 'react';
import style from './PlaceInfoPanel.module.scss';
import { Badge, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { updateSearchPlaceInfo } from '@/client/utils/store/searchPlaceSlice';
const PlaceInfoPanel = () => {
  const place = useSelector((state) => state.searchPlace.place);
  const dispatch = useDispatch();
  const closePanelHandler = () => {
    dispatch(updateSearchPlaceInfo(null));
  };
  return place ? (
    <div className={style.PlaceInfoPanel}>
      <div
        className={style.PlaceInfoPanel__closePanelButton}
        onClick={closePanelHandler}
      >
        <AiOutlineClose />
      </div>
      <h4 className={style.PlaceInfoPanel__placeName}>
        {place?.formatted_address}
      </h4>
      <div className={style.PlaceInfoPanel__isOpened}>
        <span>운영 여부</span>
        <Badge color={place.opening_hours?.open_now ? 'info' : 'secondary'}>
          {place.opening_hours?.open_now ? '운영중' : '미운영'}
        </Badge>
      </div>

      <div className={style.PlaceInfoPanel__rating}>
        <span>평점</span>
        <Badge color={place.rating ? 'info' : 'secondary'}>
          {place.rating ? place.rating : '평점 미제공'}
        </Badge>
      </div>
      <div className={style.PlaceInfoPanel__addPlaceButton}>
        <Button color="info">
          <MdPlace />
          여행지 등록
        </Button>
      </div>
    </div>
  ) : null;
};

export default PlaceInfoPanel;
