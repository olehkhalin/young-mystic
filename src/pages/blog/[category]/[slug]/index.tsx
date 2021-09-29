import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo, BreadcrumbJsonLd, ArticleJsonLd } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useBlogInfoQuery } from '@graphqlBlog';
import { DEFAULT_SEO } from '@constants';
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

const BlogSinglePage: React.FC = () => {
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
    tags,
    html,
    primaryTag,
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
  if (!title || !html || !primaryTag?.name || !primaryTag.slug) {
    return <>404</>; // TODO: 404 page
  }

  const websiteUrl = DEFAULT_SEO.WEBSITE_URL;
  const navLinks: NavLinkProps[] = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Блог',
      link: '/blog',
    },
    {
      title: primaryTag.name,
      link: `/blog/${primaryTag.slug}`,
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
      name: 'Блог',
      item: `${websiteUrl}blog/`,
    },
    {
      position: 3,
      name: primaryTag.name,
      item: `${websiteUrl}blog/${primaryTag.slug}/`,
    },
    {
      position: 4,
      name: title,
      item: `${websiteUrl}blog/${primaryTag.slug}/${slug}/`,
    },
  ];

  // Tags for open graph article
  const tempOgTags: string[] = [];
  tags?.forEach((tag) => {
    if (tag?.name && tag?.name !== primaryTag.name) {
      tempOgTags.push(tag.name.replace('#', ''));
    }
  });
  const ogTags = tempOgTags.length > 0 ? tempOgTags : undefined;
  const images = (!!ogImage || !!featureImage ? [
    {
      url: (ogImage || featureImage) as string,
      alt: ogTitle || metaTitle || title,
    },
  ] : undefined);

  return (
    <BaseLayout>
      {/* SEO */}
      <NextSeo
        title={metaTitle || title}
        description={metaDescription || excerpt || undefined}
        canonical={canonicalUrl || undefined}
        openGraph={{
          url: `${websiteUrl}blog/${primaryTag.slug}/${slug}/`,
          title: ogTitle || metaTitle || title,
          description: (
            ogDescription || metaDescription || excerpt || undefined
          ),
          images,
          type: 'article',
          article: {
            publishedTime: publishedAt || undefined,
            modifiedTime: updatedAt || undefined,
            section: primaryTag?.name || undefined,
            authors: primaryAuthor?.facebook ? [`https://www.facebook.com/${primaryAuthor?.facebook}`] : undefined,
            tags: ogTags,
          },
        }}
        twitter={{
          handle: primaryAuthor?.twitter || undefined,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={navLinksSeo}
      />
      {featureImage && publishedAt && updatedAt && primaryAuthor?.name && excerpt && (
      <ArticleJsonLd
        url={`${websiteUrl}blog/${primaryTag.slug}/${slug}/`}
        title={title}
        images={[
          featureImage,
        ]}
        datePublished={publishedAt}
        dateModified={updatedAt}
        authorName={[primaryAuthor?.name]}
        publisherName={DEFAULT_SEO.OG.SITE_NAME}
        publisherLogo="https://www.example.com/photos/logo.jpg" // TODO: Change to the logo then
        description={excerpt}
      />
      )}
      {/* Content */}
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <Article
            image={featureImage}
            title={title}
            description={excerpt}
            date={publishedAt}
            tags={tags}
          >
            {html}
          </Article>
          <ProductsInArticle products={PRODUCTS} />
          <SimilarPosts category={primaryTag?.slug} currentSlug={slug as string} />
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

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'blog']),
  },
});

export default BlogSinglePage;
