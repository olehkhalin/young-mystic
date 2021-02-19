import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { CartIcon } from '@containers/Cart/CartIcon';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Menu } from '@components/common/Menu';
import { MenuNavLinks } from '@components/common/Footer/content';
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

export const Header: React.FC<HeaderProps> = ({
  theme = 'primary',
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const [isShownMenu, setIsShownMenu] = useState<boolean>(false);

  return (
    <>
      <header className={compoundClassName}>
        <Container>
          <Row className={s.row}>
            <Link href="/">
              <a className={s.logo}>Young Mystic</a>
            </Link>
            <div className={s.right}>
              <nav className={s.nav}>
                {
                  MenuNavLinks.map((link) => (
                    <Link key={link.link} href={link.link}>
                      <a className={s.navLink}>
                        {link.title}
                      </a>
                    </Link>
                  ))
                }
              </nav>
              <CartIcon />
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
