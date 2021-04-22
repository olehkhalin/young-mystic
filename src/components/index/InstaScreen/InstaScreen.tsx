import React, {
  useEffect, useRef, useState,
} from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { CursorTypes } from '@components/common/CursorProvider';
import { CursorWrapper } from '@components/common/CursorWrapper';

import s from './InstaScreen.module.sass';

const IMAGES = [
  {
    image: '/images/Insta1.jpg',
    link: 'https://www.instagram.com/p/CIWJk8XnrhR/',
    title: 'Вечерний ритуал 🌜',
  },
  {
    image: '/images/Insta2.jpg',
    link: 'https://www.instagram.com/p/CIaKXKCn2mm/',
    title: 'Вот и закончилось еще одно испытание для меня - практика в аптеке 😌',
  },
  {
    image: '/images/Insta3.jpg',
    link: 'https://www.instagram.com/p/CIgMdseHcpd/',
    title: 'Арома-лампы или диффузоры. Есть ли смысл переплачивать? 🤔',
  },
  {
    image: '/images/Insta4.jpg',
    link: 'https://www.instagram.com/p/CIksbV4Hr8Z/',
    title: 'Друзья, еще одна праздничная новость 🎁',
  },
];

const transition = { duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] };

type InstaScreenProps = {
  className?: string
};

export const InstaScreen: React.FC<InstaScreenProps> = ({
  className,
}) => {
  const { scrollY } = useViewportScroll();
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const setValues = () => {
      if (lineContainerRef.current !== null) {
        setElementTop(lineContainerRef.current.offsetTop);
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
  }, [lineContainerRef]);

  const transformAnimationRange = [elementTop - clientHeight, elementTop + clientHeight];

  const textLineTransform = useTransform(scrollY, transformAnimationRange, [0, -1000]);

  return (
    <div
      className={cx(s.root, className)}
      ref={lineContainerRef}
    >
      <CursorWrapper
        href="https://www.instagram.com/youngliving.ukraine/"
        external
        type={CursorTypes.insta}
      >
        <motion.div
          className={s.topLine}
          style={{ x: textLineTransform }}
        >
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
          <span className={s.span}>@youngliving.ukraine</span>
        </motion.div>
      </CursorWrapper>
      <Container>
        <Row>
          <div className={s.images}>
            {IMAGES.map((image) => (
              <CursorWrapper
                key={image.link}
                className={s.image}
                href={image.link}
                external
                type={CursorTypes.insta}
              >
                <motion.span
                  className={s.imageInner}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    transition: { ...transition },
                  }}
                  title={image.title}
                >
                  <Image
                    src={image.image}
                    width={158}
                    height={158}
                    layout="responsive"
                    alt={image.title}
                  />
                </motion.span>
              </CursorWrapper>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};
