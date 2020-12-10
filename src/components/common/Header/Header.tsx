import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Menu } from '@components/common/Menu';
import ShoppingCart from '@public/svg/ShoppingCart.svg';
import Search from '@public/svg/Search.svg';

import s from './Header.module.sass';

type HeaderProps = {
  theme?: keyof typeof themeClass
  className?: string
};

const themeClass = {
  primary: s.primary,
  light: s.light,
};

const isActiveCart = true;

export const Header: React.FC<HeaderProps> = ({
  theme = 'primary',
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const [isShownMenu, setIsShownMenu] = useState(false);

  return (
    <>
      <header className={compoundClassName}>
        <Container>
          <Row className={s.row}>
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={s.logo}>Young Mystic</a>
            </Link>
            <div className={s.right}>
              <button type="button" className={cx(s.cart, { [s.active]: isActiveCart })}>
                <ShoppingCart />
              </button>
              <button type="button" className={s.search}>
                <Search />
              </button>
              <button
                type="button"
                className={s.menu}
                onClick={() => setIsShownMenu(true)}
              >
                <span className={s.menuIcon} />
              </button>
            </div>
          </Row>
        </Container>
      </header>
      <Menu
        onRequestClose={() => setIsShownMenu(false)}
        className={cx(s.menuBlock, { [s.shown]: isShownMenu })}
      />
    </>
  );
};
