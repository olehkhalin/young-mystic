import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useBlogListQuery } from '@graphqlBlog';

import { Button } from '@ui/Button';
import { BlogCard } from '@components/common/BlogCard';
import { Pagination } from '@components/common/Pagination';

import s from './Blog.module.sass';
import { POSTS_PER_BLOCK, POSTS_PER_PAGE } from '../../defaults';

type ProductsProps = {
  className?: string
  category?: string | null
  isSection?: boolean
  isFeatured?: boolean
  isPagination?: boolean
};

export const Blog: React.FC<ProductsProps> = ({
  category,
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

  const router = useRouter();
  const parentPath = router.asPath.split('?')[0];
  const currentPage: number = router.query.page ? +router.query.page : 1;

  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [limit, setLimit] = useState(2);

  const {
    data, loading, error, fetchMore,
  } = useBlogListQuery({
    variables: {
      page: isPagination && !isLoadMoreClicked ? currentPage : 1,
      limit: isPagination ? limit : POSTS_PER_BLOCK,
      filter,
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
        limit: 2,
        filter,
      },
      context: {
        ghost: true,
      },
    }).then((fetchMoreResults) => (
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
              size={2}
              onPageClick={() => {
                setIsLoadMoreClicked(false);
                setLimit(2);
              }}
            />
          </div>
        )
      }
    </>
  );
};
