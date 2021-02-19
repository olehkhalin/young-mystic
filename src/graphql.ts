import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  cartItems: Array<CartItemNew>;
  category?: Maybe<Category>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String'];
};


export type QueryProductArgs = {
  slug: Scalars['String'];
};


export type QueryProductsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

export type Product = {
  __typename?: 'Product';
  slug: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  firm?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  image: Scalars['String'];
  content: Array<Content>;
  category: Category;
};

export type Category = {
  __typename?: 'Category';
  slug: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type CartItemNew = {
  __typename?: 'CartItemNew';
  slug: Scalars['String'];
  quantity: Scalars['Int'];
};

export type CartItemsListQueryVariables = Exact<{ [key: string]: never; }>;


export type CartItemsListQuery = (
  { __typename?: 'Query' }
  & { cartItems: Array<(
    { __typename?: 'CartItemNew' }
    & Pick<CartItemNew, 'slug' | 'quantity'>
  )> }
);

export type ProductsListQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
}>;


export type ProductsListQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'slug' | 'title' | 'description' | 'image' | 'price'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'slug' | 'title'>
    ) }
  )> }
);

export type ProductInfoQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ProductInfoQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'title' | 'description' | 'firm' | 'capacity' | 'price' | 'image'>
    & { content: Array<(
      { __typename?: 'Content' }
      & Pick<Content, 'title' | 'content'>
    )>, category: (
      { __typename?: 'Category' }
      & Pick<Category, 'slug' | 'title'>
    ) }
  )> }
);

export type CategoryInfoQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CategoryInfoQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'title' | 'description' | 'image'>
  )> }
);


export const CartItemsListDocument = gql`
    query CartItemsList {
  cartItems @client {
    slug
    quantity
  }
}
    `;

/**
 * __useCartItemsListQuery__
 *
 * To run a query within a React component, call `useCartItemsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartItemsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartItemsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartItemsListQuery(baseOptions?: Apollo.QueryHookOptions<CartItemsListQuery, CartItemsListQueryVariables>) {
        return Apollo.useQuery<CartItemsListQuery, CartItemsListQueryVariables>(CartItemsListDocument, baseOptions);
      }
export function useCartItemsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartItemsListQuery, CartItemsListQueryVariables>) {
          return Apollo.useLazyQuery<CartItemsListQuery, CartItemsListQueryVariables>(CartItemsListDocument, baseOptions);
        }
export type CartItemsListQueryHookResult = ReturnType<typeof useCartItemsListQuery>;
export type CartItemsListLazyQueryHookResult = ReturnType<typeof useCartItemsListLazyQuery>;
export type CartItemsListQueryResult = Apollo.QueryResult<CartItemsListQuery, CartItemsListQueryVariables>;
export const ProductsListDocument = gql`
    query ProductsList($skip: Int, $first: Int, $category: String) {
  products(skip: $skip, first: $first, category: $category) {
    slug
    title
    description
    image
    price
    category {
      slug
      title
    }
  }
}
    `;

/**
 * __useProductsListQuery__
 *
 * To run a query within a React component, call `useProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsListQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useProductsListQuery(baseOptions?: Apollo.QueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
        return Apollo.useQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, baseOptions);
      }
export function useProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
          return Apollo.useLazyQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, baseOptions);
        }
export type ProductsListQueryHookResult = ReturnType<typeof useProductsListQuery>;
export type ProductsListLazyQueryHookResult = ReturnType<typeof useProductsListLazyQuery>;
export type ProductsListQueryResult = Apollo.QueryResult<ProductsListQuery, ProductsListQueryVariables>;
export const ProductInfoDocument = gql`
    query ProductInfo($slug: String!) {
  product(slug: $slug) {
    title
    description
    firm
    capacity
    price
    image
    content {
      title
      content
    }
    category {
      slug
      title
    }
  }
}
    `;

/**
 * __useProductInfoQuery__
 *
 * To run a query within a React component, call `useProductInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductInfoQuery(baseOptions: Apollo.QueryHookOptions<ProductInfoQuery, ProductInfoQueryVariables>) {
        return Apollo.useQuery<ProductInfoQuery, ProductInfoQueryVariables>(ProductInfoDocument, baseOptions);
      }
export function useProductInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductInfoQuery, ProductInfoQueryVariables>) {
          return Apollo.useLazyQuery<ProductInfoQuery, ProductInfoQueryVariables>(ProductInfoDocument, baseOptions);
        }
export type ProductInfoQueryHookResult = ReturnType<typeof useProductInfoQuery>;
export type ProductInfoLazyQueryHookResult = ReturnType<typeof useProductInfoLazyQuery>;
export type ProductInfoQueryResult = Apollo.QueryResult<ProductInfoQuery, ProductInfoQueryVariables>;
export const CategoryInfoDocument = gql`
    query CategoryInfo($slug: String!) {
  category(slug: $slug) {
    title
    description
    image
  }
}
    `;

/**
 * __useCategoryInfoQuery__
 *
 * To run a query within a React component, call `useCategoryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryInfoQuery(baseOptions: Apollo.QueryHookOptions<CategoryInfoQuery, CategoryInfoQueryVariables>) {
        return Apollo.useQuery<CategoryInfoQuery, CategoryInfoQueryVariables>(CategoryInfoDocument, baseOptions);
      }
export function useCategoryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryInfoQuery, CategoryInfoQueryVariables>) {
          return Apollo.useLazyQuery<CategoryInfoQuery, CategoryInfoQueryVariables>(CategoryInfoDocument, baseOptions);
        }
export type CategoryInfoQueryHookResult = ReturnType<typeof useCategoryInfoQuery>;
export type CategoryInfoLazyQueryHookResult = ReturnType<typeof useCategoryInfoLazyQuery>;
export type CategoryInfoQueryResult = Apollo.QueryResult<CategoryInfoQuery, CategoryInfoQueryVariables>;