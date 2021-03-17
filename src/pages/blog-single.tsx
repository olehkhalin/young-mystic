import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Article } from '@components/blogSingle/Article';
import { ProductsInArticle } from '@components/blogSingle/ProductsInArticle';
import { CTABlock } from '@components/common/CTABlock';
import { SimilarPosts } from '@components/common/SimilarPosts';

import { POSTS, PRODUCTS, PRODUCTS_TAGS } from '../content';

const BlogSingle = () => (
  <BaseLayout>
    <Container>
      <Row>
        <Article
          image="/images/Image_2.jpg"
          title="Рецепт смеси от головной боли"
          description="Как составить собственную смесь из масел от головной боли?"
          date="2020-12-09"
          tags={PRODUCTS_TAGS}
        >
          <p>
            Головная боль — одна из самых распространенных болезней и часто возникает даже у
            здоровых людей.
          </p>
          <ul>
            <li>из-за изменения перепадов погоды;</li>
            <li>из-за переутомления;</li>
            <li>при повышении артериального давления;</li>
            <li>из-за перенапряжения, особенно мышц спины и плеч;</li>
            <li>эмоциональные головные боли, связанные со стрессом, тревогой, депрессией;</li>
          </ul>
          <p>
            Такие боли могут проходить без принятия лекарств, или после приема каких-либо
            обезболивающих таблеток. Женщины страдают головными болями чаще, чем мужчины. В
            большинстве случаев нужно дать приток крови к голове, и отток от неё. Избавиться от
            стресса. Со всем этим могут справиться эфирные масла.
          </p>
          <p>Попробуйте составить следующую смесь:</p>
          <blockquote>
            <h2>Рецепт смеси от головной боли</h2>
            <p>Общий объем - 15 мл.</p>
            <ul>
              <li>17 капель э.м. Ладана</li>
              <li>17 капель э.м. Лаванды</li>
              <li>17 капель э.м. Эвкалипта</li>
              <li>13 мл базисного растительного масла (абрикосового, кокосового и др.)</li>
            </ul>
            <p>
              Смешайте масла комнатной температуры и принимайте не знаю как, может нужно мазать на
              виски или еще куда.
            </p>
          </blockquote>
        </Article>
        <ProductsInArticle products={PRODUCTS} />
        <SimilarPosts posts={POSTS} />
        <CTABlock
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            label: 'Присоединиться',
            link: '/',
          }}
        />
      </Row>
    </Container>
  </BaseLayout>
);

export default BlogSingle;
