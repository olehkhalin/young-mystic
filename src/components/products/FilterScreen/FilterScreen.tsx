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
    <Container className={s.container}>
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
            <div className={s.filter} key={contentItem.title}>
              <span className={s.header}>{contentItem.title}</span>
              {contentItem.filters.map((filter) => (
                <CheckBox
                  key={filter}
                  label={filter}
                  className={s.checkBox}
                />
              ))}
            </div>
          ))}
          <Button
            theme="clean"
            className={s.clearButton}
          >
            Сбросить фильтры
          </Button>
        </div>
        <div className={s.buttons}>
          <Button className={s.button}>Применить фильтры</Button>
          <Button
            theme="secondary"
            className={cx(s.button, s.clearButtonDesktop)}
          >
            Сбросить фильтры
          </Button>
        </div>
      </Row>
    </Container>
  </div>
);
