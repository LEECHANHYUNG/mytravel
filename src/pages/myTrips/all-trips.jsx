import BreadCrumb from '@/client/components/commons/BreadCrumb';
import React from 'react';
import styles from '@/styles/Home.module.css';
import ListHeader from '@/client/components/commons/ListHeader';

const ALLTrips = () => {
  return (
    <div className={`${styles.main} `}>
      <ListHeader />
      <div>allTrips</div>
    </div>
  );
};

export default ALLTrips;
