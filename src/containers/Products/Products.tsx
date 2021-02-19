import React from 'react';
import cx from 'classnames';

import { useProductsListQuery } from '@graphql';
import { ProductCard } from '@components/common/ProductCard';

import s from './Products.module.sass';

type ProductsProps = {
  className?: string
  skip?: number
  first?: number
  categorySlug?: string
};

export const Products: React.FC<ProductsProps> = ({
  className,
  skip,
  first,
  categorySlug,
}) => {
  const { data, loading, error } = useProductsListQuery({
    variables: {
      skip,
      first,
      category: categorySlug,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  return (
    <div className={cx(s.root, className)}>
      {data?.products.map((product) => (
        <ProductCard
          key={product.slug}
          image={product.image}
          link={`/products/${product.category.slug}/${product.slug}`}
          title={product.title}
          price={product.price}
          // isNew={product.isNew || false}
          // isSale={product.isSale || false}
        />
      ))}
    </div>
  );
};
