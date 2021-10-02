import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { useBlogListQuery } from '@graphqlBlog';
import {
  POSTS_PER_BLOCK,
  POSTS_PER_PAGE,
} from '@utils/constants';
import { Button } from '@ui/Button';
import { BlogCard } from '@components/common/BlogCard';
import { Pagination } from '@components/common/Pagination';

import s from './Blog.module.sass';

type ProductsProps = {
  className?: string
  category?: string | null
  ommitSlug?: string
  isSection?: boolean
  isFeatured?: boolean
  isPagination?: boolean
};

export const Blog: React.FC<ProductsProps> = ({
  category,
  ommitSlug,
  isFeatured = false,
  isSection = false,
  isPagination = false,
  className,
}) => {
  const filter: string[] = [];
  if (isFeatured && !category) {
    filter.push('featured:true');
  }
  if (category) {
    filter.push(`tag:${category}`);
  }
  if (ommitSlug) {
    filter.push(`slug:-${ommitSlug}`);
  }

  const router = useRouter();
  const parentPath = router.asPath.split('?')[0];
  const currentPage: number = router.query.page ? +router.query.page : 1;

  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [limit, setLimit] = useState(POSTS_PER_PAGE);

  const {
    data, loading, error, fetchMore,
  } = useBlogListQuery({
    variables: {
      page: isPagination && !isLoadMoreClicked ? currentPage : 1,
      limit: isPagination ? limit : POSTS_PER_BLOCK,
      filter: filter.join('+'),
    },
    context: { ghost: true },
  });
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  if (!data?.posts?.edges) {
    return <></>;
  }

  const loadMore = () => {
    setIsLoadMoreClicked(true);
    const currentLength = data.posts?.edges?.length;
    fetchMore({
      variables: {
        page: currentPage + 1,
        limit: POSTS_PER_PAGE,
        filter,
      },
      context: {
        ghost: true,
      },
    }).then((fetchMoreResults) => (
      // @ts-ignore
      setLimit(currentLength + fetchMoreResults.data.posts?.edges?.length)
    ));
    router.replace(`${parentPath}?page=${currentPage + 1}`, undefined, { shallow: true });
  };

  return (
    <>
      <div className={cx(s.root, { [s.paginated]: isPagination }, className)}>
        {data.posts?.edges.map((post, index) => post && post.node && (
          <BlogCard
            className={s.post}
            theme="small"
            key={post.node.id}
            image={post.node.featureImage}
            slug={post.node.slug}
            category={{
              slug: post.node.primaryTag?.slug,
              label: post.node.primaryTag?.name,
            }}
            date={post.node.createdAt}
            title={post.node.title}
            description={post.node.excerpt}
            isFullWidth={index === (isPagination ? 4 : 2)}
            isSection={isSection}
          />
        ))}
      </div>
      {
        isPagination
        && data?.posts.meta?.pagination?.total
        && Math.ceil(data?.posts.meta?.pagination?.total / POSTS_PER_PAGE) > 1
        && (
          <div className={s.buttons}>
            {(currentPage === 1 || isLoadMoreClicked) && (
              <Button
                className={s.loadMore}
                theme="clean"
                onClick={loadMore}
              >
                Показать еще
              </Button>
            )}
            <Pagination
              countOfElements={data?.posts.meta?.pagination?.total}
              size={POSTS_PER_PAGE}
              onPageClick={() => {
                setIsLoadMoreClicked(false);
                setLimit(POSTS_PER_PAGE);
              }}
            />
          </div>
        )
      }
    </>
  );
};
