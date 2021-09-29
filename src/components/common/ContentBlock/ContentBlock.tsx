import React, {
  forwardRef, useEffect, ReactNode, useContext,
} from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';

import { CursorContext, CursorTypes } from '@components/common/CursorProvider';
import s from './ContentBlock.module.sass';

export type ContentBlockRef = HTMLDivElement;

type ContentBlockProps = {
  children: string | ReactNode
  className?: string
};

export const ContentBlock = forwardRef<ContentBlockRef, ContentBlockProps>(
  ({ children, className }, ref) => {
    const { toggleCursorType } = useContext(CursorContext);

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

      const links = document.querySelectorAll(`.${s.root} a:not(.kg-bookmark-container)`);
      links.forEach((link) => {
        link.addEventListener('mouseenter', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.link,
        ));
        link.addEventListener('mouseleave', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.default,
        ));
      });

      const bookmarks = document.querySelectorAll(`.${s.root} .kg-bookmark-container`);
      bookmarks.forEach((bookmark) => {
        bookmark.addEventListener('mouseenter', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.discover,
        ));
        bookmark.addEventListener('mouseleave', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.default,
        ));
      });

      // TODO: Custom cursor for bookmarks

      const iframes = document.querySelectorAll(`.${s.root} .kg-card.kg-embed-card iframe`);
      iframes.forEach((frame) => {
        frame.addEventListener('mouseenter', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.button,
        ));
        frame.addEventListener('mouseleave', (e) => toggleCursorType(
          e.target as HTMLElement,
          CursorTypes.default,
        ));
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
