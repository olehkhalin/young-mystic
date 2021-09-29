import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cx from 'classnames';
import parse from 'html-react-parser';
import { ToastContainer, Slide } from 'react-toastify';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { CustomCollapse } from '@ui/CustomCollapse';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ProductImage } from '@components/productsSingle/ProductImage';
import { CTABlock } from '@components/common/CTABlock';
import { ProductHeader } from '@components/productsSingle/ProductHeader';
import { SimilarPosts } from '@components/common/SimilarPosts';

import 'react-toastify/dist/ReactToastify.css';
import s from '@styles/Products.module.sass';

import { useProductInfoQuery } from '@graphql';

const ProductsSinglePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return null;
  }

  const { data, loading, error } = useProductInfoQuery({
    variables: {
      slug: slug as string,
    },
    context: {
      ghost: false,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  if (!data || !data.product) {
    return <>404</>; // TODO: Set 404 page render
  }
  const {
    title,
    description,
    firm,
    capacity,
    price,
    image,
    content,
    category,
  } = data.product;

  const navLinks = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Магазин',
      link: '/products',
    },
    {
      title: category.title,
      link: `/products/${category.slug}`,
    },
    {
      title,
    },
  ];

  return (
    <>
      <BaseLayout>
        <Container>
          <Row>
            <article className={s.article}>
              <BreadCrumbs
                className={cx(s.breadCrumbs, s.breadCrumbsTablet)}
                navLinks={navLinks}
              />
              <ProductImage
                image={image}
                title={title}
                className={s.image}
              />
              <div className={s.content}>
                <BreadCrumbs
                  className={s.breadCrumbs}
                  navLinks={navLinks}
                />
                <ProductHeader
                  slug={slug as string}
                  title={title}
                  image={image}
                  firm={firm}
                  capacity={capacity}
                  price={price}
                  description={description}
                />
                <Separator className={s.separatorTop} />
                {content.map((item) => (
                  <CustomCollapse key={`${item.title}`} title={<h2>{item.title}</h2>}>
                    {parse(item.content)}
                  </CustomCollapse>
                ))}
              </div>
            </article>
            <Separator className={s.separatorBottom} />
            <SimilarPosts />
            <CTABlock
              className={s.blockCta}
              title="Откройте мир масел вместе с Young Living!"
              description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
              button={{
                link: '/',
                label: 'Присоединиться',
              }}
            />
          </Row>
        </Container>
      </BaseLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        limit={1}
        draggable={false}
        closeOnClick={false}
        closeButton={false}
        pauseOnHover
        className={s.toastContainer}
        toastClassName={s.toast}
        bodyClassName={s.toastBody}
        transition={Slide}
      />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'products']),
  },
});

export default ProductsSinglePage;
