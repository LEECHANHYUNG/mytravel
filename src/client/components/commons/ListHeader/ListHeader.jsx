import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import style from './ListHeader.module.scss';
import Link from 'next/link';
import HeaderDropdown from '../HeaderDropdown';

const ListHeader = () => {
  return (
    <header className={style.ListHeader}>
      <div className={style.ListHeader__homeButton}>
        <Link href="/">
          <AiOutlineHome />
        </Link>
        <HeaderDropdown />
      </div>
    </header>
  );
};

export default ListHeader;
