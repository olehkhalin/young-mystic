import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  product?: Maybe<Product>;
  products?: Maybe<ProductsResult>;
  category?: Maybe<Category>;
};


export type QueryProductArgs = {
  slug: Scalars['String'];
};


export type QueryProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  slugs?: Maybe<Array<Scalars['String']>>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String'];
};

export type ProductsResult = {
  __typename?: 'ProductsResult';
  count: Scalars['Int'];
  data: Array<Product>;
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

export type CartItemsListQueryVariables = Exact<{
  slugs: Array<Scalars['String']> | Scalars['String'];
}>;


export type CartItemsListQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<(
    { __typename?: 'ProductsResult' }
    & { data: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'slug' | 'title' | 'description' | 'image' | 'price' | 'firm' | 'capacity'>
    )> }
  )> }
);

export type ProductsListQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
}>;


export type ProductsListQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<(
    { __typename?: 'ProductsResult' }
    & Pick<ProductsResult, 'count'>
    & { data: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'slug' | 'title' | 'description' | 'image' | 'price'>
      & { category: (
        { __typename?: 'Category' }
        & Pick<Category, 'slug' | 'title'>
      ) }
    )> }
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
    query CartItemsList($slugs: [String!]!) {
  products(slugs: $slugs) {
    data {
      slug
      title
      description
      image
      price
      firm
      capacity
    }
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
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useCartItemsListQuery(baseOptions: Apollo.QueryHookOptions<CartItemsListQuery, CartItemsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartItemsListQuery, CartItemsListQueryVariables>(CartItemsListDocument, options);
      }
export function useCartItemsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartItemsListQuery, CartItemsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartItemsListQuery, CartItemsListQueryVariables>(CartItemsListDocument, options);
        }
export type CartItemsListQueryHookResult = ReturnType<typeof useCartItemsListQuery>;
export type CartItemsListLazyQueryHookResult = ReturnType<typeof useCartItemsListLazyQuery>;
export type CartItemsListQueryResult = Apollo.QueryResult<CartItemsListQuery, CartItemsListQueryVariables>;
export const ProductsListDocument = gql`
    query ProductsList($offset: Int, $limit: Int, $category: String) {
  products(offset: $offset, limit: $limit, category: $category) {
    count
    data {
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
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useProductsListQuery(baseOptions?: Apollo.QueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
      }
export function useProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductInfoQuery, ProductInfoQueryVariables>(ProductInfoDocument, options);
      }
export function useProductInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductInfoQuery, ProductInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductInfoQuery, ProductInfoQueryVariables>(ProductInfoDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryInfoQuery, CategoryInfoQueryVariables>(CategoryInfoDocument, options);
      }
export function useCategoryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryInfoQuery, CategoryInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryInfoQuery, CategoryInfoQueryVariables>(CategoryInfoDocument, options);
        }
export type CategoryInfoQueryHookResult = ReturnType<typeof useCategoryInfoQuery>;
export type CategoryInfoLazyQueryHookResult = ReturnType<typeof useCategoryInfoLazyQuery>;
export type CategoryInfoQueryResult = Apollo.QueryResult<CategoryInfoQuery, CategoryInfoQueryVariables>;