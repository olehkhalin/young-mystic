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
        // products: {
        //   keyArgs: false,
        //   merge(existing = { data: [] }, incoming) {
        //     const { data: oldData } = existing;
        //     const { data: newData } = incoming;
        //     console.log('existing', existing);
        //     console.log('incoming', incoming);
        //     const finalData = [...oldData, ...newData];
        //     const finalObject = {
        //       count: incoming.count,
        //       data: finalData,
        //     };
        //     console.log('finalData', finalObject);
        //     return finalObject;
        //   },
        // },

        // =================
        // =================
        // POSTS
        // =================
        // =================
        // posts: {
        //   read(existing, { args: { page = 1, limit = existing?.length } = {} }) {
        //     const { edges: oldData } = existing;
        //     return {
        //       meta: existing.meta,
        //       edges: oldData && oldData.slice(page * limit, page * limit + limit),
        //     };
        //   },
        //   keyArgs: [],
        //   merge(existing, incoming, { args: { page = 1, limit } }) {
        //     const { edges: oldData } = existing;
        //     const { edges: newData } = incoming;
        //     const merged = oldData ? oldData.slice(0) : [];
        //     for (let i = 0; i < newData.length; i += 1) {
        //       merged[page * limit + i] = newData[i];
        //     }
        //     return {
        //       meta: incoming.meta,
        //       edges: merged,
        //     };
        //   },
        // },
      },
    },
  },
});
