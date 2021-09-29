import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { CursorWrapper } from '@components/common/CursorWrapper';
import { CursorTypes } from '@components/common/CursorProvider';
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
          <CursorWrapper
            key={`${parentPath}/${pageNumber}`}
            href={`${parentPath}?page=${pageNumber}`}
            className={s.page}
            onClick={onPageClick}
            type={CursorTypes.pointerSmall}
          >
            {pageNumber}
          </CursorWrapper>
          ,
        );
      } else {
        pages.push(
          <CursorWrapper
            key={parentPath}
            href={parentPath}
            className={s.page}
            onClick={onPageClick}
            type={CursorTypes.pointerSmall}
          >
            {pageNumber}
          </CursorWrapper>,
        );
      }
    }
  } else {
    if (currentPage !== 1) {
      pages.push(
        <CursorWrapper
          key={parentPath}
          href={parentPath}
          className={s.page}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          1
        </CursorWrapper>,
      );
    }
    if (currentPage > 3) {
      pages.push(
        <span key={`dots-${currentPage}-1`} className={cx(s.page, s.dots)}>.....</span>,
      );
    }
    if (currentPage >= 3) {
      pages.push(
        <CursorWrapper
          key={`${parentPath}/${currentPage - 1}`}
          href={`${parentPath}?page=${currentPage - 1}`}
          className={s.page}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          {currentPage - 1}
        </CursorWrapper>,
      );
    }
    pages.push(
      <span key={`curP-${currentPage}`} className={cx(s.page, s.currentPage)}>{currentPage}</span>,
    );
    if (countOfPages - currentPage > 1) {
      pages.push(
        <CursorWrapper
          key={`${parentPath}/${currentPage + 1}`}
          href={`${parentPath}?page=${currentPage + 1}`}
          className={s.page}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          {currentPage + 1}
        </CursorWrapper>,
      );
    }
    if (countOfPages - currentPage > 2) {
      pages.push(
        <span key={`dots-${currentPage}-2`} className={cx(s.page, s.dots)}>.....</span>,
      );
    }
    if (currentPage !== countOfPages) {
      pages.push(
        <CursorWrapper
          key={`${parentPath}/${countOfPages}`}
          href={`${parentPath}?page=${countOfPages}`}
          className={s.page}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          {countOfPages}
        </CursorWrapper>,
      );
    }
  }

  return (
    <div className={cx(s.root, className)}>
      {previousPage ? (
        <CursorWrapper
          href={previousPage !== 1 ? `${parentPath}?page=${previousPage}` : parentPath}
          className={s.arrow}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          <ChevronLeft className={s.icon} />
        </CursorWrapper>
      ) : (
        <span className={cx(s.arrow, s.disabled)}>
          <ChevronLeft className={s.icon} />
        </span>
      )}
      <div className={s.pages}>
        {pages}
      </div>
      {nextPage ? (
        <CursorWrapper
          href={`${parentPath}?page=${nextPage}`}
          className={s.arrow}
          onClick={onPageClick}
          type={CursorTypes.pointerSmall}
        >
          <ChevronRight className={s.icon} />
        </CursorWrapper>
      ) : (
        <span className={cx(s.arrow, s.disabled)}>
          <ChevronRight className={s.icon} />
        </span>
      )}
    </div>
  );
};
