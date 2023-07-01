import React from 'react';
import styles from '@/styles/Home.module.css';
import BreadCrumb from '@/client/components/commons/BreadCrumb';

const MyAllTrips = () => {
  const breadCrumbList = {
    currentPath: 'my-all-trips',
    subPath: ['all-trips', 'upcoming-trips', 'completed-trips'],
  };

  return (
    <div className={`${styles.main} `}>
      <header>
        <BreadCrumb breadCrumbList={breadCrumbList} />
      </header>
    </div>
  );
};
MyAllTrips.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, { Location: '/myTrips/all-trips' });
    res.end();
  } else {
    Router.replace('/myTrips/all-trips');
  }
};
export default MyAllTrips;
