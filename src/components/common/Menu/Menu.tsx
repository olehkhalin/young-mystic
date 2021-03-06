import React, { ReactNode } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { CustomCollapse } from '@ui/CustomCollapse';
import { SocialLinks, MenuNavLinks } from '@components/common/Footer/content';

import s from './Menu.module.sass';

type MenuProps = {
  onRequestClose: () => void
  className?: string
};

const menuContent = () => {
  const final: ReactNode[] = [];

  MenuNavLinks.forEach((menuBlock) => {
    if (menuBlock.collapse) {
      const innerBlock: ReactNode[] = [];
      menuBlock.collapse.forEach((menuInner) => {
        if (menuInner.link) {
          innerBlock.push(
            <Link key={menuInner.link} href={menuInner.link}>
              <a className={s.innerLink}>
                {menuInner.title}
              </a>
            </Link>,
          );
        } else {
          innerBlock.push(
            <div key={menuInner.title} className={s.block}>
              <span className={s.blockTitle}>{menuInner.title}</span>
              <div className={s.blockList}>
                {menuInner.list?.map((link) => (
                  <Link
                    key={`${link.title}-${link.link}`}
                    href={link.link}
                  >
                    <a className={s.blockLink}>
                      {link.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>,
          );
        }
      });
      final.push(
        <CustomCollapse key={menuBlock.title} theme="menu" title={menuBlock.title}>
          <div className={s.innerBlock}>
            {innerBlock}
          </div>
        </CustomCollapse>,
      );
    } else if (menuBlock.link) {
      final.push(
        <Link key={menuBlock.link} href={menuBlock.link}>
          <a className={s.topLink}>
            {menuBlock.title}
          </a>
        </Link>,
      );
    }
  });

  return final;
};

export const Menu: React.FC<MenuProps> = ({
  onRequestClose,
  className,
}) => (
  <div className={cx(s.root, className)}>
    <Container className={s.container}>
      <Row className={s.row}>
        <button
          type="button"
          className={s.closeButton}
          onClick={onRequestClose}
        >
          <span className={s.closeIcon} />
        </button>
        <nav className={s.nav}>
          {menuContent()}
        </nav>
        <div className={s.bottom}>
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
          <Button href="/">????????????????????????????</Button>
        </div>
      </Row>
    </Container>
  </div>
);
