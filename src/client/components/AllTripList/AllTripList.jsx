import React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  UncontrolledDropdown,
} from 'reactstrap';

import style from './AllTripList.module.scss';
import { useRouter } from 'next/router';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TbListDetails } from 'react-icons/tb';
import Link from 'next/link';
import IconWithButton from '../commons/IconWithButton';
import { AiOutlineDelete } from 'react-icons/ai';

const AllTripList = ({ allTripList }) => {
  const router = useRouter();
  const showTripDetailHandler = (key) => {
    router.replace(`/myTrips/all-trips/detail/${key}`);
  };
  return (
    <ListGroup className={style.AllTripList}>
      {Object.keys(allTripList).map((trip) => {
        return (
          <ListGroupItem key={trip}>
            <div className={style.AllTripList__info}>
              <div className={style.AllTripList__country}>
                {allTripList[trip].country}
              </div>
              <div className={style.AllTripList__date}>
                <span className={style.AllTripList__startDate}>
                  {allTripList[trip].startDate.split('T')[0]}
                </span>
                <span className={style.AllTripList__divider}>~</span>
                <span className={style.AllTripList__endDate}>
                  {allTripList[trip].endDate.split('T')[0]}
                </span>
              </div>
            </div>
            <div className={style.AllTripList__toolBox}>
              <UncontrolledDropdown>
                <DropdownToggle color="transparent">
                  <FiMoreHorizontal />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link href={`/myTrips/all-trips/detail/${trip}`}>
                      <IconWithButton
                        Icon={<TbListDetails />}
                        color="transparent"
                      >
                        여행 기록
                      </IconWithButton>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <IconWithButton
                      Icon={<AiOutlineDelete />}
                      color="transparent"
                    >
                      여행 삭제
                    </IconWithButton>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default AllTripList;
