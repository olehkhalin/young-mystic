import React from 'react';
import cx from 'classnames';

import { Button } from '@ui/Button';
import { ProductCard } from '@components/common/ProductCard';

import s from './ProductsInArticle.module.sass';

type ProductProps = {
  id: number
  image: string
  title: string
  link: string
  price: number
  isSale?: boolean
  isNew?: boolean
};

type ProductsInArticleProps = {
  products: ProductProps[]
  className?: string
};

export const ProductsInArticle: React.FC<ProductsInArticleProps> = ({
  products,
  className,
}) => (
  <aside className={cx(s.root, className)}>
    <h2 className={s.header}>Масла, используемые в статье</h2>
    <div className={s.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          link={product.link}
          title={product.title}
          price={product.price}
          isSale={product.isSale}
          isNew={product.isNew}
          isSection
        />
      ))}
    </div>
    <Button
      className={s.button}
      href="/products"
    >
      Перейти в магазин
    </Button>
  </aside>
);
