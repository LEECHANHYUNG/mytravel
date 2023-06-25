import BreadCrumb from '@/client/components/commons/BreadCrumb';
import React from 'react';
import styles from '@/styles/Home.module.css';

const ALLTrips = () => {
  const breadCrumbList = {
    currentPath: 'my-all-trips',
    subPath: 'completed-trips',
  };
  return (
    <div className={`${styles.main} `}>
      <header>
        <BreadCrumb breadCrumbList={breadCrumbList} />
      </header>
      <div>completed Trips</div>
    </div>
  );
};

export default ALLTrips;
