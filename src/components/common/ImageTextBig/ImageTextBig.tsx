import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
} from 'react';
import Image from 'next/image';
import cx from 'classnames';
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';

import { Button } from '@components/ui/Button';

import s from './ImageTextBig.module.sass';

type ImageTextBigProps = {
  image: string
  subHeader: string
  title: string
  description: ReactNode
  button: {
    link: string
    label: string
  }
  className?: string
};

export const ImageTextBig: React.FC<ImageTextBigProps> = ({
  image,
  subHeader,
  title,
  description,
  button,
  className,
}) => {
  const { scrollY } = useViewportScroll();
  const blockContainerRef = useRef<HTMLElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const setValues = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
      if (blockContainerRef.current !== null) {
        const element = blockContainerRef.current;
        setElementTop(element.offsetTop);
        setElementBottom(element.offsetTop + element.offsetHeight);
        setClientHeight(window.innerHeight);
      }
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [blockContainerRef]);

  const textAnimationRange = [
    elementBottom - clientHeight,
    elementTop + clientHeight * 0.5,
  ];
  const imageAnimationRange = [
    elementBottom - clientHeight * 0.5 + 100,
    elementTop + clientHeight - 300,
  ];

  const textTransform = useTransform(scrollY, textAnimationRange, [-80, 100]);
  const imageScale = useTransform(scrollY, textAnimationRange, [1.3, 1]);
  const imageOpacity = useTransform(scrollY, imageAnimationRange, [1, 0]);

  return (
    <article
      className={cx(s.root, className)}
      ref={blockContainerRef}
    >
      <div className={s.image}>
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className={s.imageInner}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <motion.div
        style={!isMobile ? { y: textTransform } : { y: 0 }}
        initial={{ y: 0 }}
        className={s.content}
      >
        <span className={s.category}>
          {subHeader}
        </span>
        <h3 className={s.header}>{title}</h3>
        <div className={s.description}>
          {description}
        </div>
        <Button
          className={s.button}
          href={button.link}
        >
          {button.label}
        </Button>
      </motion.div>
    </article>
  );
};
