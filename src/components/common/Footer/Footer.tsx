import React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { CustomCollapse } from '@ui/CustomCollapse';
import { CursorTypes } from '@components/common/CursorProvider';
import { CursorWrapper } from '@components/common/CursorWrapper';

import { NavLinks, SocialLinks } from './content';
import s from './Footer.module.sass';

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <Container>
      <Row className={s.row}>
        <nav className={s.nav}>
          {NavLinks.map((navItem) => (
            <CustomCollapse
              key={`footer-nav-${navItem.title}`}
              theme="dark"
              title={navItem.title}
              isOpenDesktop
              className={s.navBlock}
              buttonClassName={s.navBlockButton}
            >
              <div className={s.navLinks}>
                {navItem.links.map((navLink) => (
                  <CursorWrapper
                    key={`${navItem.title}-${navLink.link}`}
                    className={s.navItem}
                    href={navLink.link}
                    type={CursorTypes.linkLight}
                  >
                    {navLink.title}
                  </CursorWrapper>
                ))}
              </div>
            </CustomCollapse>
          ))}
        </nav>
        <div className={s.socialsWrapper}>
          <div className={cx(s.navBlockButton, s.navBlockButtonSocials)}>Социальные сети</div>
          <div className={s.socials}>
            {SocialLinks.map((social) => (
              <CursorWrapper
                key={social.link}
                className={s.socialLink}
                href={social.link}
                external
                type={CursorTypes.pointerLight}
              >
                {social.icon}
              </CursorWrapper>
            ))}
          </div>
        </div>
        <Separator theme="dark" className={s.seperator} />
        <p className={s.copy}>
          ©
          {' '}
          {dayjs().year()}
          {' '}
          Young Mystic
        </p>
      </Row>
    </Container>
  </footer>
);
