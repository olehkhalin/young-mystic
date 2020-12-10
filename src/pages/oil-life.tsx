import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { ImageTextBig } from '@components/common/ImageTextBig';
import { CTABlock } from '@components/common/CTABlock';
import { RecentBlog } from '@components/common/RecentBlog';

import s from '@styles/About.module.sass';
import { POSTS } from '../content';

const About = () => (
  <BaseLayout>
    <Container>
      <Row>
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_1.jpg"
          subHeader="Эфирные масла"
          title="Что такое эфирные масла, зачем ими пользоваться и как?"
          description={(
            <p>
              Вы наверняка уже знаете, что эфирные масла незаменимы в бане и то, что они вкусно
              пахнут. Может быть вы слышали об ароматерапии, но никогда не видели её результата. А
              возможно, ваш друг говорил Вам что-то об их пользе и вероятно, они иногда всплывали в
              вашей ленте инстаграма. Итак, что же это за масла такие и полезны ли они?
            </p>
          )}
          button={{
            link: '/vash-nastavnik-v-mire-masel',
            label: 'Узнать подробнее',
          }}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_1.jpg"
          subHeader="Мир масел Young Living?"
          title="Почему Young Living?"
          description={(
            <p>
              Я перепробовал не один десяток пузырьков других производителей в поиске того, что
              будет помогать людям, но я пишу именно об эфирных маслах Young Living. И я рад
              рассказать почему.
            </p>
          )}
          button={{
            link: '/nashe-soobshhestvo',
            label: 'Узнать подробнее',
          }}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_1.jpg"
          subHeader="Возможности young living"
          title="Гармоничный бизнес начинается здесь"
          description={(
            <p>
              Свобода во всём, помощь людям и безграничные возможности — так можно описать наше
              дело.
            </p>
          )}
          button={{
            link: '/nashe-soobshhestvo',
            label: 'Узнать подробнее',
          }}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_1.jpg"
          subHeader="Наше сообщество"
          title="Большой заголовок на две строки"
          description={(
            <>
              <p>
                Сообщество - неотьемлемая часть oil life. Написать от себя.
                Кнопочка на наши мероприятия, отзывы. Возможно - активных членов команды.
              </p>
              <p>
                Узнайте больше о том, как присоединиться к нашему закрытому сообществу.
              </p>
            </>
          )}
          button={{
            link: '/nashe-soobshhestvo',
            label: 'Узнать подробнее',
          }}
        />
        <CTABlock
          className={s.blockCta}
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            link: '/',
            label: 'Присоединиться',
          }}
        />
        <RecentBlog posts={POSTS} />
      </Row>
    </Container>
  </BaseLayout>
);

export default About;
