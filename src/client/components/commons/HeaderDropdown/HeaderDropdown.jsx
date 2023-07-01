import Link from 'next/link';
import React from 'react';
import { AiFillCalendar, AiOutlineMenu } from 'react-icons/ai';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import IconWithButton from '../IconWithButton';
import { MdOutlineToday } from 'react-icons/md';
import { CgToday } from 'react-icons/cg';
import style from './HeaderDropdown.module.scss';

const HeaderDropdown = () => {
  return (
    <UncontrolledDropdown className={style.HeaderDropdown__dropdown}>
      <DropdownToggle color="transparent">
        <AiOutlineMenu />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link href="/myTrips/all-trips">
            <IconWithButton Icon={<AiFillCalendar />} color="transparent">
              여행 기록
            </IconWithButton>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/myTrips/all-trips">
            <IconWithButton Icon={<MdOutlineToday />} color="transparent">
              진행중 여행
            </IconWithButton>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/myTrips/all-trips">
            <IconWithButton Icon={<CgToday />} color="transparent">
              오늘 여행 일정
            </IconWithButton>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default HeaderDropdown;
