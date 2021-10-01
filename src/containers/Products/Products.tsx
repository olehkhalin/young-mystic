import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { useProductsListQuery } from '@graphql';
import {
  PRODUCTS_PER_PAGE,
  PRODUCTS_PER_BLOCK,
} from '@utils/constants';
import { Button } from '@ui/Button';
import { Pagination } from '@components/common/Pagination';
import { ProductCard } from '@components/common/ProductCard';

import s from './Products.module.sass';

type ProductsProps = {
  className?: string
  categorySlug?: string
  isPagination?: boolean
};

export const Products: React.FC<ProductsProps> = ({
  className,
  categorySlug,
  isPagination = false,
}) => {
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false);
  const router = useRouter();
  const parentPath = router.pathname;
  const currentPage: number = router.query.page ? +router.query.page : 1;

  const {
    data, loading, error, fetchMore,
  } = useProductsListQuery({
    variables: {
      offset: isPagination && !loadMoreButtonClicked ? (currentPage - 1) * PRODUCTS_PER_PAGE : 0,
      limit: isPagination ? PRODUCTS_PER_PAGE : PRODUCTS_PER_BLOCK,
      category: categorySlug,
    },
    context: {
      ghost: false,
    },
  });

  const loadMore = () => {
    setLoadMoreButtonClicked(true);
    fetchMore({
      variables: {
        offset: currentPage * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
        category: categorySlug,
      },
    });
    router.replace(`${parentPath}?page=${currentPage + 1}`, undefined, { shallow: true });
  };

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  if (!data || !data.products || !data.products.data || !data.products.count) {
    return <>404</>; // TODO: 404 page render
  }

  return (
    <>
      <div className={cx(s.root, className)}>
        {data?.products?.data.map((product) => (
          <ProductCard
            key={product.slug}
            image={product.image}
            link={`/products/${product.category.slug}/${product.slug}`}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      {
        isPagination
        && data?.products?.count
        && Math.ceil(data.products.count / PRODUCTS_PER_PAGE) > 1
        && (
          <div className={s.buttons}>
            <Button
              className={s.loadMore}
              theme="clean"
              onClick={loadMore}
            >
              Показать еще
            </Button>
            <Pagination
              countOfElements={data?.products?.count}
              size={PRODUCTS_PER_PAGE}
            />
          </div>
        )
      }
    </>
  );
};
