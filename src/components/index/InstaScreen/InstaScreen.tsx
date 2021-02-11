import * as React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
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

type InstaScreenProps = {
  className?: string
};

export const InstaScreen: React.FC<InstaScreenProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)}>
    <a
      href="https://www.instagram.com/youngliving.ukraine/"
      target="_blank"
      rel="noreferrer nofollow"
      className={s.topLine}
    >
      <span className={s.span}>@youngliving.ukraine</span>
      <span className={s.span}>@youngliving.ukraine</span>
    </a>
    <Container>
      <Row>
        <div className={s.images}>
          {IMAGES.map((image) => (
            <a
              key={image.link}
              className={s.image}
              href={image.link}
              target="_blank"
              rel="noreferrer nofollow"
              title={image.title}
            >
              <Image
                src={image.image}
                width={158}
                height={158}
                layout="responsive"
                alt={image.title}
              />
            </a>
          ))}
        </div>
      </Row>
    </Container>
  </div>
);
