import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { CTABlock } from '@components/common/CTABlock';
import { RecentBlog } from '@components/common/RecentBlog';

import s from '@styles/About.module.sass';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';
import { POSTS } from '../content';

const AboutSingle = () => (
  <BaseLayout>
    <Container>
      <Row>
        <PageTitle
          className={s.imageTitle}
          title="Одна большая семья"
        />
        <ContentBlock className={s.content}>
          <p>
            Мы не сообщество людей, которые любят масла и нашли единомышленников... Мы — семья.
            Семья осознанных людей, которые видят мир во всех цветах и хотят поделиться красками со
            всеми.
          </p>
          <p>
            Я хотел помогать людям с помощью эфирных масел достигать здоровья и их высшего
            потенциала. Но оказывается, что эта энергия притягивает единомышленников.
          </p>
          <p>
            Мы просто делимся и учим другие семьи брать свою жизнь под свой контроль и
            вдохновляемся их успехами со здоровьем, благополучием и изобилием. Мы хотим изменить
            укоренившееся мнение людей о сетевом маркетинге и показать, кто и что за этим стоит на
            самом деле.
          </p>
          <h2>Что такое семья Young Living?</h2>
          <ul>
            <li>Ежедневное общение и поддержка в наших закрытых чатах, где мы;</li>
            <li>
              Встречи каждую неделю на семинарах и вебинарах, где мы учимся новому и находим
              единомышленников;
            </li>
            <li>
              Живые встречи и совместные поездки на конференции по всей Украине (за исключением
              2020 года по понятным причинам).
            </li>
          </ul>
          <p>
            Это не формальные обстановки и напряжные вебинары, это именно семейные встречи (если
            что, большую часть я веду со своей кухни в домашней одежде). В начале, я даже не мог
            представить, что я могу быть не один с такой целью, а десятки таких, как я.
          </p>
          <p>
            Сообщество единомышленников, делящихся историями, успехами, надеждой, свободой и
            благополучием.
          </p>
        </ContentBlock>
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

export default AboutSingle;
