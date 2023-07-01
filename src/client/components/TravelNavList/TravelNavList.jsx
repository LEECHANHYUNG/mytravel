import { useRouter } from 'next/router';
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import style from './TravelNavList.module.scss';

const TravelNavList = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const HeaderNameList = {
    '/myTrips/all-trips': '전체 여행',
    '/myTrips/upcoming-trips': '예정중인 여행',
    '/myTrips/completed-trips': '다녀온 여행',
  };
  return (
    <div className={style.TravelNavList}>
      <header className={style.TravelNavList__header}>
        {HeaderNameList[pathName]}
      </header>
      <Nav className={style.TravelNavList__nav}>
        <NavItem
          className={
            pathName === '/myTrips/all-trips'
              ? style['TravelNavList__nav--active']
              : style.TravelNavList__navItem
          }
        >
          <NavLink href="/myTrips/all-trips">전체 여행</NavLink>
        </NavItem>
        <NavItem
          className={
            pathName === '/myTrips/upcoming-trips'
              ? style['TravelNavList__nav--active']
              : style.TravelNavList__navItem
          }
        >
          <NavLink href="/myTrips/upcoming-trips">예정중인 여행</NavLink>
        </NavItem>
        <NavItem
          className={
            pathName === '/myTrips/completed-trips'
              ? style['TravelNavList__nav--active']
              : style.TravelNavList__navItem
          }
        >
          <NavLink href="/myTrips/completed-trips">다녀온 여행</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default TravelNavList;
