import BreadCrumb from '@/client/components/commons/BreadCrumb';
import React from 'react';
import styles from '@/styles/Home.module.css';

const ALLTrips = () => {
  const breadCrumbList = {
    currentPath: 'my-all-trips',
    subPath: 'all-trips',
  };
  return (
    <div className={`${styles.main} `}>
      <header>
        <BreadCrumb breadCrumbList={breadCrumbList} />
      </header>
      <div>allTrips</div>
    </div>
  );
};

export default ALLTrips;
