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
        products: {
          keyArgs: false,
          merge(existing = { data: [] }, incoming) {
            const { data: oldData } = existing;
            const { data: newData } = incoming;
            console.log('existing', existing);
            console.log('incoming', incoming);
            const finalData = [...oldData, ...newData];
            const finalObject = {
              count: incoming.count,
              data: finalData,
            };
            console.log('finalData', finalObject);
            return finalObject;
          },
        },
      },
    },
  },
});
