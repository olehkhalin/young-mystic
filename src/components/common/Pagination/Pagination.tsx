import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import ChevronLeft from '@public/svg/ChevronLeft.svg';
import ChevronRight from '@public/svg/ChevronRight.svg';

import s from './Pagination.module.sass';

type PaginationProps = {
  size: number
  countOfElements: number
  onPageClick?: () => void
  className?: string
};

export const Pagination: React.FC<PaginationProps> = ({
  className,
  size,
  onPageClick,
  countOfElements,
}) => {
  const router = useRouter();
  const parentPath = router.asPath.split('?')[0];
  const currentPage: number = router.query.page ? +router.query.page : 1;
  const countOfPages = Math.ceil(countOfElements / size);
  if (countOfPages <= 1) return null;
  const previousPage = currentPage - 1 >= 1 ? currentPage - 1 : 0;
  const nextPage = currentPage + 1 <= countOfPages ? currentPage + 1 : 0;

  const pages = [];
  if (countOfPages <= 4) {
    for (let pageNumber = 1; pageNumber <= countOfPages; pageNumber += 1) {
      if (pageNumber === currentPage) {
        pages.push(
          <span key={`currentPage-${pageNumber}`} className={cx(s.page, s.currentPage)}>{pageNumber}</span>,
        );
      } else if (pageNumber !== 1) {
        pages.push(
          <Link key={`${parentPath}/${pageNumber}`} href={`${parentPath}?page=${pageNumber}`}>
            <a className={s.page} onClick={onPageClick}>
              {pageNumber}
            </a>
          </Link>,
        );
      } else {
        pages.push(
          <Link key={parentPath} href={`${parentPath}`}>
            <a className={s.page} onClick={onPageClick}>
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
          <a className={s.page} onClick={onPageClick}>
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
        <Link key={`${parentPath}/${currentPage - 1}`} href={`${parentPath}?page=${currentPage - 1}`}>
          <a className={s.page} onClick={onPageClick}>
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
        <Link key={`${parentPath}/${currentPage + 1}`} href={`${parentPath}?page=${currentPage + 1}`}>
          <a className={s.page} onClick={onPageClick}>
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
        <Link key={`${parentPath}/${countOfPages}`} href={`${parentPath}?page=${countOfPages}`}>
          <a className={s.page} onClick={onPageClick}>
            {countOfPages}
          </a>
        </Link>,
      );
    }
  }

  return (
    <div className={cx(s.root, className)}>
      {previousPage ? (
        <Link href={previousPage !== 1 ? `${parentPath}?page=${previousPage}` : parentPath}>
          <a className={s.arrow} onClick={onPageClick}>
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
        <Link href={`${parentPath}?page=${nextPage}`}>
          <a className={s.arrow} onClick={onPageClick}>
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
