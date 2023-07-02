import React from 'react';
import styles from '@/styles/Home.module.css';
import ListHeader from '@/client/components/commons/ListHeader';
import TravelNavList from '@/client/components/TravelNavList';

const ALLTrips = () => {
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
