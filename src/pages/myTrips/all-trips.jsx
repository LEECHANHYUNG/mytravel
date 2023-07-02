import React from 'react';
import styles from '@/styles/Home.module.css';
import ListHeader from '@/client/components/commons/ListHeader';
import TravelNavList from '@/client/components/TravelNavList';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllTripList } from '@/client/utils/store/tripListSlice';

const ALLTrips = () => {
  const dispath = useDispatch();

  dispath(updateAllTripList());

  const allTripList = useSelector((state) => state.tripList.allTrips);

  console.log(allTripList);
  return (
    <div className={`${styles.main} `}>
      <ListHeader />
      <div>
        <TravelNavList />
      </div>
    </div>
  );
};

export default ALLTrips;
