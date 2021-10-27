import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { ImageTextBig } from '@components/common/ImageTextBig';
import { CTABlock } from '@components/common/CTABlock';
import { RecentBlog } from '@components/common/RecentBlog';

import s from '@styles/About.module.sass';

const About: React.FC = () => (
  <BaseLayout>
    <Container>
      <Row>
        <ImageTextBig
          className={s.blockImage}
          image="/images/about1.jpg"
          subHeader="Обо мне"
          title="Ваш наставник в мире масел"
          description={(
            <p>
              Привет, меня зовут Андрей и я использую эфирные масла для того, чтобы помогать людям
              во многих аспектах. Именно желание помочь и сделать жизнь лучше движет мною. А теперь,
              давайте по порядку...
            </p>
          )}
          button={{
            link: '/vash-nastavnik-v-mire-masel',
            label: 'Узнать подробнее',
          }}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/oilLife4.jpg"
          subHeader="Наше сообщество"
          title="Одна большая семья"
          description={(
            <p>
              Мы — дружная семья единомышленников, которые создают для себя и окружающих атмосферу
              здоровья, благополучия и изобилия.
            </p>
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
        <RecentBlog />
      </Row>
    </Container>
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'about']),
  },
});

export default About;
