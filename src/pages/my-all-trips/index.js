import React from 'react';
import styles from '@/styles/Home.module.css';
import BreadCrumb from '@/client/components/commons/BreadCrumb';
import UpcomingTrips from '@/pages/my-all-trips/upcoming-trips';
import CompletedTrips from '@/pages/my-all-trips/completed-trips';
import AllTrips from '@/pages/my-all-trips/all-trips';
import { useRouter } from 'next/router';

const MyAllTrips = () => {
  const router = useRouter();
  const currentPath = router.pathname;
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
    res.writeHead(302, { Location: '/my-all-trips/all-trips' });
    res.end();
  } else {
    Router.replace('/my-all-trips/all-trips');
  }
};
export default MyAllTrips;
