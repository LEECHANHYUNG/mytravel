import React from 'react';
import { BreadcrumbItem, Breadcrumb as RSBreadcrumb } from 'reactstrap';
const BreadCrumb = ({ breadCrumbList }) => {
  return (
    <>
      <RSBreadcrumb>
        <BreadcrumbItem tag="a" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          tag="a"
          href={`/${breadCrumbList.currentPath}/${breadCrumbList.subPath}`}
          active
        >
          {breadCrumbList.subPath}
        </BreadcrumbItem>
      </RSBreadcrumb>
    </>
  );
};

export default BreadCrumb;
