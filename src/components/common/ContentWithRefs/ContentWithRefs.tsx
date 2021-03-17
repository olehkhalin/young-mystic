import React, { ReactNode, useRef } from 'react';
import cx from 'classnames';

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
    sectionsRef?.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={cx(s.nav, className)}>
        {content.map((section, index) => (
          <button
            key={section.title || `button-${index}`}
            type="button"
            onClick={() => scrollToSection(index)}
            className={cx(s.link, { [s.empty]: !section.title })}
          >
            {section.title || ''}
          </button>
        ))}
      </nav>
      {content.map((section, index) => (
        <ContentBlock
          key={section.title || `section-${index}`}
          ref={addToRefs}
        >
          {section.content}
        </ContentBlock>
      ))}
    </>
  );
};
