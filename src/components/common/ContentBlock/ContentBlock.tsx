import React, { forwardRef, useEffect, ReactNode } from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';

import s from './ContentBlock.module.sass';

export type ContentBlockRef = HTMLDivElement;

type ContentBlockProps = {
  children: string | ReactNode
  className?: string
};

export const ContentBlock = forwardRef<ContentBlockRef, ContentBlockProps>(
  ({ children, className }, ref) => {
    useEffect(() => {
      const images = document.querySelectorAll<HTMLImageElement>('.kg-gallery-image img');
      images.forEach((image) => {
        const container: HTMLDivElement | null = image.closest('.kg-gallery-image');
        if (container) {
          const { width } = image;
          const { height } = image;
          const ratio = width / height;
          container.style.flex = `${ratio} 1 0%`;
        }
      });
    }, []);

    return (
      <div
        className={cx(s.root, className)}
        ref={ref}
      >
        {typeof children === 'string' ? parse(children) : children}
      </div>
    );
  },
);
