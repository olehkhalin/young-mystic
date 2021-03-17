import React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { CheckBox } from '@ui/CheckBox';

import s from './FilterScreen.module.sass';

type FilterScreenProps = {
  onRequestClose: () => void
  className?: string
};

const CONTENT = [
  {
    title: 'Типу продукта',
    filters: [
      'Эфирное масло',
      'Смеси эфирных масел',
    ],
  },
  {
    title: 'Назначению',
    filters: [
      'Антибактериальное',
      'Антивозрастное',
      'Восстановление',
      'Массаж',
      'Для похудения',
      'Для роста волос',
    ],
  },
  {
    title: 'Для кого',
    filters: [
      'Для детей',
      'Для женщин',
      'Для мужчин',
      'Универсальное',
      'Для животных',
    ],
  },
];

export const FilterScreen: React.FC<FilterScreenProps> = ({
  onRequestClose,
  className,
}) => (
  <div className={cx(s.root, className)}>
    <Container>
      <Row className={s.row}>
        <button
          type="button"
          className={s.closeButton}
          onClick={onRequestClose}
        >
          <span className={s.closeIcon} />
        </button>
        <div className={s.filters}>
          {CONTENT.map((contentItem) => (
            <>
              <span className={s.header}>{contentItem.title}</span>
              {contentItem.filters.map((filter) => (
                <CheckBox
                  key={filter}
                  label={filter}
                />
              ))}
            </>
          ))}
          <Button
            theme="clean"
            className={s.clearButton}
          >
            Сбросить фильтры
          </Button>
        </div>
        <Button>Применить фильтры</Button>
      </Row>
    </Container>
  </div>
);
