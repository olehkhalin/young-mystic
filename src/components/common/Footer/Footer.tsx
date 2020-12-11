import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { CustomCollapse } from '@ui/CustomCollapse';

import { SocialLinks, NavLinks } from './content';
import s from './Footer.module.sass';

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <Container>
      <Row className={s.row}>
        <nav className={s.nav}>
          {NavLinks.map((navItem) => (
            <CustomCollapse
              key={navItem.title}
              theme="dark"
              title={navItem.title}
            >
              <div className={s.navLinks}>
                {navItem.links.map((navLink) => (
                  <Link
                    key={`${navItem.title}-${navLink.link}`}
                    href={navLink.link}
                  >
                    <a className={s.navItem}>
                      {navLink.title}
                    </a>
                  </Link>
                ))}
              </div>
            </CustomCollapse>
          ))}
        </nav>
        <div className={s.socials}>
          {SocialLinks.map((social) => (
            <a
              key={social.link}
              className={s.socialLink}
              href={social.link}
              target="_blank"
              rel="noreferrer nofollow"
            >
              {social.icon}
            </a>
          ))}
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
