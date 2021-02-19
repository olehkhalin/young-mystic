import React from 'react';

import { useCartItemsListQuery } from '@graphql';

export const CartItems: React.FC = () => {
  const { data, loading, error } = useCartItemsListQuery();

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  // const slugs = data?.cartItems.map((item) => item.slug);

  return (
    <div>
      {data?.cartItems.map((item) => (
        <div key={item.slug}>
          <span>
            slug:
            {item.slug}
          </span>
          <span>
            quantity:
            {item.quantity}
          </span>
        </div>
      ))}
    </div>
  );
};
