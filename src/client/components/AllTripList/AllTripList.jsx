import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import style from './AllTripList.module.scss';

const AllTripList = ({ allTripList }) => {
  console.log(allTripList);
  return (
    <ListGroup>
      {Object.keys(allTripList).map((trip) => {
        return (
          <ListGroupItem key={trip}>
            <div className={style.AllTripList__country}>
              {allTripList[trip].country}
            </div>
            <div className={style.AllTripList__date}>
              <span className={style.AllTripList__startDate}>
                {allTripList[trip].startDate.split('T')[0]}
              </span>
              <span>~</span>
              <span className={style.AllTripList__endDate}>
                {allTripList[trip].endDate.split('T')[0]}
              </span>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default AllTripList;
