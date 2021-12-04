import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Products } from '@containers/Products/Products';
import { Blog } from '@containers/Blog/Blog';
import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { FirstScreen } from '@components/index/FirstScreen';
import { TitleDescription } from '@components/common/TitleDescription';
import { ImageTextBig } from '@components/common/ImageTextBig';
import { CTABlock } from '@components/common/CTABlock';
import { InstaScreen } from '@components/index/InstaScreen';

import s from '@styles/Home.module.sass';

const Home: React.FC = () => (
  <BaseLayout>
    <Container>
      <Row className={s.row}>
        <FirstScreen />
        <TitleDescription
          title="Эфирные масла"
          description="Масла разных растений по разному воздействуют на человека. Мой сайт рассказывает об их драгоценных свойствах и способах применения."
          className={s.title}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_1.jpg"
          subHeader="Что такое oil life"
          title="Большой заголовок на две строки"
          description={(
            <>
              <p>
                Я долгое время занимался терапией,  искал лучшие масла и опробовал все
                терапевтические масла на рынке. Так я открыл для себя масла Young Living.
              </p>
              <p>
                Масла помогли мне создать удивительную гармонию в своем доме, где я могу
                отдохнуть после тяжёлого дня и восстановить силы для новых побед. Я добавляю их
                в качестве полезных добавок в еду, чтобы улучшить свое самочувствие и помочь
                организму, а также использую их в качестве натуральных лекарств.
              </p>
            </>
            )}
          button={{
            link: '/oil-life',
            label: 'Узнать подробнее',
          }}
        />
        <ImageTextBig
          className={s.blockImage}
          image="/images/Image_2.jpg"
          subHeader="Стартовый набор Young Living"
          title="Начни путешествие в мир масел вместе с Young Living"
          description={(
            <p>
              Премиальный стартовый набор дарит уникальную возможность наглядного знакомства с
              силой действия эфирных масел. Он идеально подойдёт для тех, кто всерьёз решил
              преобразить свою жизнь.
            </p>
            )}
          button={{
            link: '/pochemu-young-living',
            label: 'Узнать подробнее',
          }}
        />
        <CTABlock
          title="Не знаете, с чего начать своё путешествие?"
          description="Эфирные масла — это целый неизведанный мир, в котором легко потеряться новичку. Если вам нужна помочь — наш тест вам поможет"
          button={{
            link: '/',
            label: 'Присоединиться',
          }}
          className={s.ctaBlock}
        />
        <TitleDescription
          title="Популярные масла"
          description="В магазине вы можете познакомиться с ассортиментом Young Living и узнать, как правильно использовать эфирные масла."
          className={s.titleProduct}
        />
        <Products className={s.products} />
        <Button href="/products">Перейти в магазин</Button>
        <TitleDescription
          title="Статьи в блоге"
          description="В моем блоге вы узнаете, как правильно использовать эфирные масла."
          className={s.titleBlog}
        />
        <Blog isFeatured className={s.blog} />
        <Button href="/blog">Перейти в блог</Button>
      </Row>
    </Container>
    <InstaScreen />
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
});

export default Home;
