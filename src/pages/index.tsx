import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { FirstScreen } from '@components/index/FirstScreen';
import { TitleDescription } from '@components/common/TitleDescription';
import { ImageTextBig } from '@components/common/ImageTextBig';
import { ProductCard } from '@components/common/ProductCard';
import { CTABlock } from '@components/common/CTABlock';
import { BlogCard } from '@components/common/BlogCard';
import { InstaScreen } from '@components/index/InstaScreen';

import s from '@styles/Home.module.sass';

import { PRODUCTS, POSTS } from '../content';

const Home = () => (
  <BaseLayout>
    <Container>
      <Row>
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
            link: '/',
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
            link: '/',
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
        />
        <TitleDescription
          title="Популярные масла"
          description="В магазине вы можете познакомиться с ассортиментом Young Living и узнать, как правильно использовать эфирные масла."
          className={s.titleProduct}
        />
        <div className={s.products}>
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              link={product.link}
              title={product.title}
              price={product.price}
              isNew={product.isNew || false}
              isSale={product.isSale || false}
            />
          ))}
        </div>
        <Button href="/">Перейти в магазин</Button>
        <TitleDescription
          title="Статьи в блоге"
          description="В моем блоге вы узнаете, как правильно использовать эфирные масла."
          className={s.titleBlog}
        />
        <div className={s.blog}>
          {POSTS.map((post) => (
            <BlogCard
              className={s.blogCard}
              theme="small"
              key={post.id}
              image={post.image}
              link={post.link}
              category={post.category}
              date={post.date}
              title={post.title}
            />
          ))}
        </div>
        <Button href="/">Перейти в блог</Button>
        <InstaScreen />
      </Row>
    </Container>
  </BaseLayout>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'index'],
});

export default Home;
