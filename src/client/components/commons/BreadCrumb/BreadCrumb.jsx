import React from 'react';
import { BreadcrumbItem, Breadcrumb as RSBreadcrumb } from 'reactstrap';
import style from './BreadCrumb.module.scss';
const BreadCrumb = ({ breadCrumbList }) => {
  return (
    <>
      <RSBreadcrumb className={style.BreadCrumb}>
        <BreadcrumbItem tag="a" href="/" className={style.BreadCrumb__item}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          tag="a"
          href={`/${breadCrumbList.currentPath}/${breadCrumbList.subPath}`}
          active
          className={style.BreadCrumb__item}
        >
          {breadCrumbList.subPath}
        </BreadcrumbItem>
      </RSBreadcrumb>
    </>
  );
};

export default BreadCrumb;
