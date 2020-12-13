import React, { ReactNode, useRef } from 'react';
import cx from 'classnames';

import { ContentBlock } from '@components/common/ContentBlock';

import s from './ContentWithRefs.module.sass';

type ContentProps = {
  title: string
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
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (section) => {
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
            key={section.title || section.content}
            type="button"
            onClick={() => scrollToSection(index)}
            className={cx(s.link, { [s.empty]: !section.title })}
          >
            {section.title || ''}
          </button>
        ))}
      </nav>
      {content.map((section) => (
        <ContentBlock
          key={section.title || section.content}
          ref={addToRefs}
        >
          {section.content}
        </ContentBlock>
      ))}
    </>
  );
};
