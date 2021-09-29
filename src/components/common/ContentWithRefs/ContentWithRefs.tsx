import React, { ReactNode, useRef } from 'react';
import cx from 'classnames';

import { Button } from '@ui/Button';
import { ContentBlock } from '@components/common/ContentBlock';

import s from './ContentWithRefs.module.sass';

type ContentProps = {
  title?: string
  content: ReactNode
};

type ContentWithRefsProps = {
  content: ContentProps[]
  className?: string
};

export const ContentWithRefs: React.FC<ContentWithRefsProps> = ({
  content,
  className,
}) => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (section: HTMLDivElement) => {
    if (section && !sectionsRef.current.includes(section)) {
      sectionsRef.current.push(section);
    }
  };

  const scrollToSection = (index: number) => {
    const element = sectionsRef?.current[index];
    if (element) {
      let customOffset = -56;
      if (window.innerWidth >= 768) {
        customOffset = -102;
      }
      if (window.innerWidth >= 1024) {
        customOffset = -138;
      }
      const y = element.getBoundingClientRect().top + window.pageYOffset + customOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={cx(s.nav, className)}>
        {content.map((section, index) => section.title && (
          <Button
            key={section.title || `button-${index}`}
            type="button"
            onClick={() => scrollToSection(index)}
            className={cx(s.link)}
            theme="clean"
          >
            {section.title || ''}
          </Button>
        ))}
      </nav>
      {content.map((section, index) => (
        <ContentBlock
          key={section.title || `section-${index}`}
          className={s.content}
          ref={addToRefs}
        >
          {section.content}
        </ContentBlock>
      ))}
    </>
  );
};
