import React, { useState } from 'react';
import cx from 'classnames';

import { CartIcon } from '@containers/Cart/CartIcon';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Menu } from '@components/common/Menu';
import { MenuNavLinks } from '@components/common/Footer/content';
import { CursorTypes } from '@components/common/CursorProvider';
import { CursorWrapper } from '@components/common/CursorWrapper';
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
            <CursorWrapper
              href="/"
              type={CursorTypes.link}
              className={s.logo}
            >
              Young Mystic
            </CursorWrapper>
            <div className={s.right}>
              <nav className={s.nav}>
                {
                  MenuNavLinks.map((link) => (
                    <CursorWrapper
                      key={link.link}
                      href={link.link}
                      type={CursorTypes.link}
                      className={s.navLink}
                    >
                      {link.title}
                    </CursorWrapper>
                  ))
                }
              </nav>
              <CartIcon />
              <CursorWrapper className={s.search} href="/search">
                <Search />
              </CursorWrapper>
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
