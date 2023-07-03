import ListHeader from '@/client/components/commons/ListHeader';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

import React from 'react';
import axios from 'axios';
import TravelInfoHeader from '@/client/components/Travel/TravelInfoHeader';
import TravelCountryWeather from '@/client/components/Travel/TravelCountryWeather';

const TravelDetail = ({ travelInfo }) => {
  const router = useRouter();

  return (
    <div className={`${styles.main} `}>
      <ListHeader />
      <TravelInfoHeader
        country={travelInfo.country}
        startDate={travelInfo.startDate.split('T')[0]}
        endDate={travelInfo.endDate.split('T')[0]}
      />
      <TravelCountryWeather countryName={travelInfo.countryName} />
    </div>
  );
};

export async function getStaticPaths() {
  const response = await axios.get(
    'https://mytravel-b4618-default-rtdb.firebaseio.com/allTrips.json'
  );
  const paths = [];
  Object.keys(response.data).map((elem) => {
    paths.push({ params: { travel: elem } });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { travel } = context.params;
  let travelInfo;
  try {
    const response = await axios.get(
      `https://mytravel-b4618-default-rtdb.firebaseio.com/allTrips/${travel}.json`
    );
    travelInfo = response.data;
  } catch (error) {
    travelInfo = {};
  }
  console.log(travelInfo);
  return {
    props: { travelInfo },
  };
}
export default TravelDetail;
