import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import CursorOil from '@public/svg/CursorOil.svg';
import CursorBlog from '@public/svg/CursorBlog.svg';
import CursorInsta from '@public/svg/CursorInsta.svg';
import CursorDiscover from '@public/svg/CursorDiscover.svg';

import s from './CursorProvider.module.sass';

export enum CursorTypes {
  default = 'DEFAULT',
  pointer = 'POINTER',
  pointerSmall = 'POINTER_SMALL',
  pointerLight = 'POINTER_LIGHT',
  button = 'BUTTON',
  link = 'LINK',
  linkLight = 'LINK_LIGHT',
  product = 'PRODUCT',
  blog = 'BLOG',
  insta = 'INSTA',
  checkBox = 'CHECK_BOX',
  discover = 'DISCOVER',
}
type InitialDataContextValue = {
  type: CursorTypes
  toggleCursorType: (element: HTMLElement, cursor: CursorTypes) => void
};
export const defaultDataContext: InitialDataContextValue = {
  type: CursorTypes.default,
  toggleCursorType: () => {},
};
export const CursorContext = React.createContext<InitialDataContextValue>(defaultDataContext);

const cursors = {
  default: {
    type: CursorTypes.default,
    size: {
      width: 16,
      height: 16,
      borderRadius: '50%',
    },
    colors: {
      border: 'transparent',
      background: 'rgba(200, 155, 85, .5)',
    },
  },

  pointer: {
    type: CursorTypes.pointer,
    size: {
      width: 58,
      height: 58,
      borderRadius: '50%',
    },
    colors: {
      border: 'rgba(200, 155, 85, .5)',
      background: 'transparent',
    },
  },

  pointerLight: {
    type: CursorTypes.pointerLight,
    size: {
      width: 52,
      height: 52,
      borderRadius: '50%',
    },
    colors: {
      border: '#ffffff',
      background: 'transparent',
    },
  },

  button: {
    type: CursorTypes.button,
    size: {
      width: 0,
      height: 0,
      borderRadius: '50%',
    },
    colors: {
      border: 'transparent',
      background: 'rgba(200, 155, 85, .5)',
    },
  },

  link: {
    type: CursorTypes.link,
    size: {
      width: 100,
      height: 1,
      borderRadius: '2px',
    },
    colors: {
      border: 'transparent',
      background: 'rgba(200, 155, 85, .5)',
    },
  },

  linkLight: {
    type: CursorTypes.linkLight,
    size: {
      width: 100,
      height: 1,
      borderRadius: '2px',
    },
    colors: {
      border: 'transparent',
      background: '#FFFFFF',
    },
  },

  product: {
    type: CursorTypes.product,
    size: {
      width: 58,
      height: 58,
      borderRadius: '50%',
    },
    colors: {
      border: 'rgba(200, 155, 85, .75)',
      background: 'transparent',
    },
  },

  checkBox: {
    type: CursorTypes.checkBox,
    size: {
      width: 20,
      height: 20,
      borderRadius: '4px',
    },
    colors: {
      border: '#C89B55',
      background: 'transparent',
    },
  },
};

export const CursorProvider: React.FC = ({ children }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 45, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [cursor, setCursor] = useState(cursors.default);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  const toggleCursorType = (element: HTMLElement, cursorType: CursorTypes) => {
    setHoveredElement(element);
    if (cursorType === CursorTypes.pointer) {
      setCursor(cursors.pointer);
    } else if (cursorType === CursorTypes.pointerSmall) {
      setCursor({
        ...cursors.pointer,
        size: {
          width: 40,
          height: 40,
          borderRadius: '50%',
        },
      });
    } else if (cursorType === CursorTypes.pointerLight) {
      setCursor(cursors.pointerLight);
    } else if (cursorType === CursorTypes.checkBox) {
      setCursor(cursors.checkBox);
    } else if (cursorType === CursorTypes.button) {
      setCursor(cursors.button);
    } else if (cursorType === CursorTypes.product) {
      setCursor(cursors.product);
    } else if (cursorType === CursorTypes.blog) {
      setCursor({
        ...cursors.product,
        type: CursorTypes.blog,
      });
    } else if (cursorType === CursorTypes.insta) {
      setCursor({
        ...cursors.product,
        type: CursorTypes.insta,
      });
    } else if (cursorType === CursorTypes.discover) {
      setCursor({
        ...cursors.product,
        type: CursorTypes.discover,
      });
    } else if (cursorType === CursorTypes.link || cursorType === CursorTypes.linkLight) {
      const {
        width,
      } = element.getBoundingClientRect();

      const pad = +window
        .getComputedStyle(element, null)
        .getPropertyValue('padding-left')
        .replace('px', '');

      if (cursorType === CursorTypes.link) {
        setCursor({
          ...cursors.link,
          size: {
            width: width - pad,
            height: 1,
            borderRadius: '2px',
          },
        });
      } else {
        setCursor({
          ...cursors.linkLight,
          size: {
            width: width - pad,
            height: 1,
            borderRadius: '2px',
          },
        });
      }
    } else {
      setCursor(cursors.default);
    }
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursor.type === CursorTypes.default) {
        cursorY.set(
          e.clientY - cursors.default.size.width / 2,
        );
        cursorX.set(
          e.clientX - cursors.default.size.height / 2,
        );
      } else if (
        cursor.type === CursorTypes.product
        || cursor.type === CursorTypes.blog
        || cursor.type === CursorTypes.insta
        || cursor.type === CursorTypes.discover
      ) {
        cursorY.set(
          e.clientY - cursors.product.size.width / 2,
        );
        cursorX.set(
          e.clientX - cursors.product.size.height / 2,
        );
      } else if (hoveredElement) {
        if (
          cursor.type === CursorTypes.pointer
          || cursor.type === CursorTypes.pointerSmall
          || cursor.type === CursorTypes.button
          || cursor.type === CursorTypes.pointerLight
          || cursor.type === CursorTypes.checkBox
        ) {
          const {
            top, left, width, height,
          } = hoveredElement.getBoundingClientRect();

          cursorY.set(
            top + height / 2 - cursor.size.width / 2,
          );
          cursorX.set(
            cursor.type === CursorTypes.checkBox ? left : left + width / 2 - cursor.size.height / 2,
          );
        } else if (cursor.type === CursorTypes.link || cursor.type === CursorTypes.linkLight) {
          const {
            top, left, height,
          } = hoveredElement.getBoundingClientRect();
          const pad = +window.getComputedStyle(hoveredElement, null).getPropertyValue('padding-left').replace('px', '');
          const padBottom = +window.getComputedStyle(hoveredElement, null).getPropertyValue('padding-bottom').replace('px', '');

          cursorY.set(
            top + height - padBottom + 2,
          );
          cursorX.set(
            left + pad / 2,
          );
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursor]);

  return (
    <CursorContext.Provider value={{ type: cursor.type, toggleCursorType }}>
      <motion.div
        className={cx(
          s.cursor,
          {
            [s.bordered]: (
              cursor.type === CursorTypes.pointer
              || cursor.type === CursorTypes.pointerLight
              || cursor.type === CursorTypes.product
              || cursor.type === CursorTypes.blog
              || cursor.type === CursorTypes.insta
              || cursor.type === CursorTypes.discover
            ),
            [s.borderedLight]: cursor.type === CursorTypes.checkBox,
            [s.link]: (cursor.type === CursorTypes.link || cursor.type === CursorTypes.linkLight),
          },
        )}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          width: cursor.size.width,
          height: cursor.size.height,
          backgroundColor: cursor.colors.background,
          borderColor: cursor.colors.border,
          borderRadius: cursor.size.borderRadius,
        }}
      >
        {cursor.type === CursorTypes.product && (
          <div className={s.inner}>
            <CursorOil className={s.icon} />
          </div>
        )}
        {cursor.type === CursorTypes.blog && (
          <div className={s.inner}>
            <CursorBlog className={s.icon} />
          </div>
        )}
        {cursor.type === CursorTypes.insta && (
          <div className={s.inner}>
            <CursorInsta className={s.icon} />
          </div>
        )}
        {cursor.type === CursorTypes.discover && (
          <div className={s.inner}>
            <CursorDiscover className={s.icon} />
          </div>
        )}
      </motion.div>
      {children}
    </CursorContext.Provider>
  );
};
