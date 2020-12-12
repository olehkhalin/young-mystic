import React, { ReactNode, useRef } from 'react';

import { ContentBlock } from '@components/common/ContentBlock';

import s from './ContentWithRefs.module.sass';

type ContentProps = {
  title: string
  content: ReactNode
};

type ContentWithRefsProps = {
  content: ContentProps[]
};

export const ContentWithRefs: React.FC<ContentWithRefsProps> = ({
  content,
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
      <nav className={s.nav}>
        {content.map((section, index) => (
          <button
            key={section.title}
            type="button"
            onClick={() => scrollToSection(index)}
            className={s.link}
          >
            {section.title}
          </button>
        ))}
      </nav>
      {content.map((section) => (
        <ContentBlock
          key={section.title}
          ref={addToRefs}
        >
          {section.content}
        </ContentBlock>
      ))}
    </>
  );
};
