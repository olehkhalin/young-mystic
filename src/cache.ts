import { InMemoryCache, makeVar } from '@apollo/client';

type CartItemProps = {
  slug: string
  quantity: number
};
export const cartItemsVar = makeVar<CartItemProps[]>(
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('CART') || '[]')
    : [],
);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});
