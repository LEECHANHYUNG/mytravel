import React from 'react';
import styles from '@/styles/Home.module.css';
import ListHeader from '@/client/components/commons/ListHeader';
import TravelNavList from '@/client/components/TravelNavList';
import axios from 'axios';
import AllTripList from '@/client/components/AllTripList';

const ALLTrips = ({ allTripList }) => {
  return (
    <div className={`${styles.main} `}>
      <ListHeader />
      <div className={`${styles.allTripList} `}>
        <TravelNavList />
        <AllTripList allTripList={allTripList} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let allTripList;
  try {
    const response = await axios.get(
      'https://mytravel-b4618-default-rtdb.firebaseio.com/allTrips.json'
    );
    allTripList = response.data;
  } catch (error) {
    allTripList = {};
  }
  console.log(allTripList);
  return {
    props: { allTripList },
  };
}

export default ALLTrips;
