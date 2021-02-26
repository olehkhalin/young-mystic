import React from 'react';
import { useRouter } from 'next/router';
import { useBlogInfoQuery } from '@graphqlBlog';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs, NavLinkProps } from '@ui/BreadCrumbs';
import { Article } from '@components/blogSingle/Article';
import { ProductsInArticle } from '@components/blogSingle/ProductsInArticle';
import { CTABlock } from '@components/common/CTABlock';
import { SimilarPosts } from '@components/common/SimilarPosts';

import s from '@styles/BlogSingle.module.sass';

import { PRODUCTS } from '../../../../content';

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return null;
  }

  const { data, loading, error } = useBlogInfoQuery({
    variables: {
      slug: slug as string,
    },
    context: {
      ghost: true,
    },
  });
  if (loading) {
    return <>Loading...</>;
  }
  if (error?.message === '404: Not Found' || !data?.post) {
    return <>404</>; // TODO: 404 page
  }
  if (error) {
    throw error;
  }
  const {
    featureImage,
    title,
    excerpt,
    createdAt,
    tags,
    html,
    primaryTag,
  } = data.post;
  if (!title || !html) {
    return <>404</>; // TODO: 404 page
  }

  const navLinks: NavLinkProps[] = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Блог',
      link: '/blog',
    },
  ];
  if (primaryTag && primaryTag.name && primaryTag.slug) {
    navLinks.push({
      title: primaryTag.name,
      link: `/blog/${primaryTag.slug}`,
    });
  }
  navLinks.push({ title });

  return (
    <BaseLayout>
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <Article
            image={featureImage}
            title={title}
            description={excerpt}
            date={createdAt}
            tags={tags}
          >
            {html}
            {/* <p> */}
            {/* Головная боль — одна из самых распространенных болезней и часто возникает даже у */}
            {/* здоровых людей. */}
            {/* </p> */}
            {/* <ul> */}
            {/* <li>из-за изменения перепадов погоды;</li> */}
            {/* <li>из-за переутомления;</li> */}
            {/* <li>при повышении артериального давления;</li> */}
            {/* <li>из-за перенапряжения, особенно мышц спины и плеч;</li> */}
            {/* <li> */}
            {/*  эмоциональные головные боли, связанные со стрессом, тревогой, */}
            {/*  депрессией; */}
            {/* </li> */}
            {/* </ul> */}
            {/* <p> */}
            {/* Такие боли могут проходить без принятия лекарств, или после приема каких-либо */}
            {/* обезболивающих таблеток. Женщины страдают головными болями чаще, чем мужчины. В */}
            {/* большинстве случаев нужно дать приток крови к голове, и отток от неё. */}
            {/* Избавиться от стресса. Со всем этим могут справиться эфирные масла. */}
            {/* </p> */}
            {/* <p>Попробуйте составить следующую смесь:</p> */}
            {/* <blockquote> */}
            {/* <h2>Рецепт смеси от головной боли</h2> */}
            {/* <p>Общий объем - 15 мл.</p> */}
            {/* <ul> */}
            {/*   <li>17 капель э.м. Ладана</li> */}
            {/*   <li>17 капель э.м. Лаванды</li> */}
            {/*   <li>17 капель э.м. Эвкалипта</li> */}
            {/*   <li>13 мл базисного растительного масла (абрикосового, кокосового и др.)</li> */}
            {/* </ul> */}
            {/* <p> */}
            {/*   Смешайте масла комнатной температуры и принимайте не знаю как, может нужно */}
            {/*   мазать на виски или еще куда. */}
            {/* </p> */}
            {/* </blockquote> */}
          </Article>
          <ProductsInArticle products={PRODUCTS} />
          <SimilarPosts category={primaryTag?.slug} />
          <CTABlock
            title="Откройте мир масел вместе с Young Living!"
            description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
            button={{
              label: 'Присоединиться',
              link: '/',
            }}
            className={s.blockCta}
          />
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Index;
