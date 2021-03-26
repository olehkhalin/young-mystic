import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import {
  motion,
  useViewportScroll,
  useTransform,
} from 'framer-motion';

import s from './FirstScreen.module.sass';

// Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstWord = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const secondWord = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition, duration: 1 },
  },
};

type FirstScreenProps = {
  className?: string
};

export const FirstScreen: React.FC<FirstScreenProps> = ({
  className,
}) => {
  const { scrollY } = useViewportScroll();
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const setValues = () => {
      if (imagesContainerRef.current !== null) {
        setElementTop(imagesContainerRef.current.offsetTop);
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
  }, [imagesContainerRef]);

  const imagesAnimationRange = [elementTop, elementTop + clientHeight];

  const imageTransformFirst = useTransform(scrollY, imagesAnimationRange, [0, 600]);
  const imageTransformSecond = useTransform(scrollY, imagesAnimationRange, [0, -200]);
  const imageScaleFirst = useTransform(scrollY, imagesAnimationRange, [1.4, 1]);
  const imageScaleSecond = useTransform(scrollY, imagesAnimationRange, [1, 1.2]);

  return (
    <motion.div
      className={cx(s.root, className)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={s.topLine}>
        <motion.h1 className={s.header}>
          <motion.span variants={firstWord}>
            <motion.span variants={letter}>Y</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </motion.span>
          {' '}
          <motion.span variants={secondWord} className={s.second}>
            <motion.span variants={letter}>M</motion.span>
            <motion.span variants={letter}>y</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>c</motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          className={s.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, ...transition },
          }}
        >
          Personal blog & Shop
        </motion.p>
      </div>
      <div className={s.images} ref={imagesContainerRef}>
        <div className={s.image1}>
          <Image
            src="/images/MainFirst.jpg"
            width={327}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={s.image2}>
          <Image
            src="/images/MainSecond.jpg"
            width={214}
            height={250}
            layout="responsive"
          />
        </div>
        <motion.div
          className={cx(s.image1, s.imageDesktop)}
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.4, ...transition },
          }}
          style={{ y: imageTransformFirst }}
        >
          <motion.div
            style={{ scale: imageScaleFirst }}
          >
            <Image
              src="/images/MainFirstDesktop.jpg"
              width={912}
              height={683}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={cx(s.image2, s.imageDesktop)}
          style={{ y: imageTransformSecond }}
        >
          <motion.div style={{ scale: imageScaleSecond }}>
            <Image
              src="/images/MainSecondDesktop.jpg"
              width={774}
              height={569}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
