import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import s from './FirstScreen.module.sass';

type FirstScreenProps = {
  className?: string
};

export const FirstScreen: React.FC<FirstScreenProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)}>
    <div className={s.topLine}>
      <h1 className={s.header}>
        <span>Young</span>
        {' '}
        <span className={s.second}>Mystic</span>
      </h1>
      <p className={s.description}>Personal blog & Shop</p>
    </div>
    <div className={s.images}>
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
      <div className={cx(s.image1, s.imageDesktop)}>
        <Image
          src="/images/MainFirstDesktop.jpg"
          width={912}
          height={683}
          layout="responsive"
        />
      </div>
      <div className={cx(s.image2, s.imageDesktop)}>
        <Image
          src="/images/MainSecondDesktop.jpg"
          width={774}
          height={569}
          layout="responsive"
        />
      </div>
    </div>
  </div>
);
