import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import ChevronLeft from '@public/svg/ChevronLeft.svg';
import ChevronRight from '@public/svg/ChevronRight.svg';

import s from './Pagination.module.sass';

type PaginationProps = {
  parentPath: string
  nextPage: string
  previousPage: string
  countOfPages: number
  currentPage: number
  className?: string
};

export const Pagination: React.FC<PaginationProps> = ({
  className,
  parentPath,
  nextPage,
  previousPage,
  countOfPages,
  currentPage,
}) => {
  const pages = [];
  if (countOfPages !== 1) {
    if (countOfPages <= 3) {
      for (let pageNumber = 1; pageNumber <= countOfPages; pageNumber += 1) {
        if (pageNumber === currentPage) {
          pages.push(
            <span key={`currentPage-${pageNumber}`} className={cx(s.page, s.currentPage)}>{pageNumber}</span>,
          );
        } else if (pageNumber !== 1) {
          pages.push(
            <Link key={`${parentPath}/${pageNumber}`} href={`${parentPath}/${pageNumber}`}>
              <a className={s.page}>
                {pageNumber}
              </a>
            </Link>,
          );
        } else {
          pages.push(
            <Link key={parentPath} href={`${parentPath}`}>
              <a className={s.page}>
                {pageNumber}
              </a>
            </Link>,
          );
        }
      }
    } else {
      if (currentPage !== 1) {
        pages.push(
          <Link key={parentPath} href={parentPath}>
            <a className={s.page}>
              1
            </a>
          </Link>,
        );
      }
      if (currentPage > 3) {
        pages.push(
          <span key={`dots-${currentPage}-1`} className={cx(s.page, s.dots)}>.....</span>,
        );
      }
      if (currentPage >= 3) {
        pages.push(
          <Link key={`${parentPath}/${currentPage - 1}`} href={`${parentPath}/${currentPage - 1}`}>
            <a className={s.page}>
              {currentPage - 1}
            </a>
          </Link>,
        );
      }
      pages.push(
        <span key={`curP-${currentPage}`} className={cx(s.page, s.currentPage)}>{currentPage}</span>,
      );
      if (countOfPages - currentPage > 1) {
        pages.push(
          <Link key={`${parentPath}/${currentPage + 1}`} href={`${parentPath}/${currentPage + 1}`}>
            <a className={s.page}>
              {currentPage + 1}
            </a>
          </Link>,
        );
      }
      if (countOfPages - currentPage > 2) {
        pages.push(
          <span key={`dots-${currentPage}-2`} className={cx(s.page, s.dots)}>.....</span>,
        );
      }
      if (currentPage !== countOfPages) {
        pages.push(
          <Link key={`${parentPath}/${countOfPages}`} href={`${parentPath}/${countOfPages}`}>
            <a className={s.page}>
              {countOfPages}
            </a>
          </Link>,
        );
      }
    }
  }

  return (
    <div className={cx(s.root, className)}>
      {previousPage ? (
        <Link href={previousPage}>
          <a className={s.arrow}>
            <ChevronLeft className={s.icon} />
          </a>
        </Link>
      ) : (
        <span className={cx(s.arrow, s.disabled)}>
          <ChevronLeft className={s.icon} />
        </span>
      )}
      <div className={s.pages}>
        {pages}
      </div>
      {nextPage ? (
        <Link href={nextPage}>
          <a className={s.arrow}>
            <ChevronRight className={s.icon} />
          </a>
        </Link>
      ) : (
        <span className={cx(s.arrow, s.disabled)}>
          <ChevronRight className={s.icon} />
        </span>
      )}
    </div>
  );
};
