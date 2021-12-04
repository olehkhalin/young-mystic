import React from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useOilLifePageQuery } from '@graphqlBlog';
import { DEFAULT_SEO } from '@utils/constants';
import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs, NavLinkProps } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { RecentBlog } from '@components/common/RecentBlog';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';

import s from '@styles/About.module.sass';

const Secondary: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return null;
  }

  const { data, loading, error } = useOilLifePageQuery({
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
    html,
    metaTitle,
    metaDescription,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    publishedAt,
    updatedAt,
    primaryAuthor,
  } = data.post;
  if (!title || !html) {
    return <>404</>; // TODO: 404 page
  }

  const websiteUrl = DEFAULT_SEO.WEBSITE_URL;
  const navLinks: NavLinkProps[] = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Oil life',
      link: '/oil-life',
    },
    {
      title,
    },
  ];

  const navLinksSeo = [
    {
      position: 1,
      name: 'Главная',
      item: `${websiteUrl}`,
    },
    {
      position: 2,
      name: 'Oil life',
      item: `${websiteUrl}oil-life/`,
    },
    {
      position: 3,
      name: title,
      item: `${websiteUrl}oil-life/${slug}/`,
    },
  ];
  const images = (!!ogImage || !!featureImage ? [
    {
      url: (ogImage || featureImage) as string,
      alt: ogTitle || metaTitle || title,
    },
  ] : undefined);

  return (
    <BaseLayout>
      <NextSeo
        title={metaTitle || title}
        description={metaDescription || excerpt || undefined}
        canonical={canonicalUrl || undefined}
        openGraph={{
          url: `${websiteUrl}oil-life/${slug}/`,
          title: ogTitle || metaTitle || title,
          description: (
            ogDescription || metaDescription || excerpt || undefined
          ),
          images,
          type: 'article',
          article: {
            publishedTime: publishedAt || undefined,
            modifiedTime: updatedAt || undefined,
            authors: primaryAuthor?.facebook ? [`https://www.facebook.com/${primaryAuthor?.facebook}`] : undefined,
          },
        }}
        twitter={{
          handle: primaryAuthor?.twitter || undefined,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={navLinksSeo}
      />
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <PageTitle
            className={s.imageTitle}
            title={title}
            image={featureImage}
          />
          <ContentBlock className={s.content}>
            {html}
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
          <RecentBlog />
        </Row>
      </Container>
    </BaseLayout>
  );
};

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'secondary']),
//   },
// });

export default Secondary;
