import ListHeader from '@/client/components/commons/ListHeader';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

import React from 'react';

const TravelDetail = () => {
  const router = useRouter();
  return (
    <div className={`${styles.main} `}>
      <ListHeader />
      {router.query.travel}
    </div>
  );
};

export default TravelDetail;
