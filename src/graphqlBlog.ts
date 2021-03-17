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

export type GhostQuery = {
  __typename?: 'GhostQuery';
  /** https://ghost.org/docs/api/v3/content/#authors */
  author?: Maybe<GhostAuthor>;
  /** https://ghost.org/docs/api/v3/content/#authors */
  authors?: Maybe<GhostAuthorsConnection>;
  /** https://ghost.org/docs/api/v3/content/#pages */
  page?: Maybe<GhostPage>;
  /** https://ghost.org/docs/api/v3/content/#pages */
  pages?: Maybe<GhostPagesConnection>;
  /** https://ghost.org/docs/api/v3/content/#posts */
  post?: Maybe<GhostPost>;
  /** https://ghost.org/docs/api/v3/content/#posts */
  posts?: Maybe<GhostPostsConnection>;
  /** https://ghost.org/docs/api/v3/content/#settings */
  settings?: Maybe<GhostSettings>;
  /** https://ghost.org/docs/api/v3/content/#tags */
  tag?: Maybe<GhostTag>;
  /** https://ghost.org/docs/api/v3/content/#tags */
  tags?: Maybe<GhostTagsConnection>;
};

export type GhostQueryAuthorArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
};

export type GhostQueryAuthorsArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type GhostQueryPageArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
};

export type GhostQueryPagesArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type GhostQueryPostArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
};

export type GhostQueryPostsArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type GhostQueryTagArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
};

export type GhostQueryTagsArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  formats?: Maybe<Array<Maybe<GhostFormat>>>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type GhostAuthor = {
  __typename?: 'GhostAuthor';
  bio?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  count?: Maybe<GhostPostsCount>;
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type GhostPostsCount = {
  __typename?: 'GhostPostsCount';
  posts?: Maybe<Scalars['Int']>;
};

export enum GhostFormat {
  Html = 'html',
  Plaintext = 'plaintext',
}

export type GhostAuthorsConnection = {
  __typename?: 'GhostAuthorsConnection';
  edges?: Maybe<Array<Maybe<GhostAuthorsEdge>>>;
  meta?: Maybe<GhostMeta>;
  pageInfo: GhostPageInfo;
};

export type GhostAuthorsEdge = {
  __typename?: 'GhostAuthorsEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GhostAuthor>;
};

export type GhostMeta = {
  __typename?: 'GhostMeta';
  /** https://ghost.org/docs/content-api/#pagination */
  pagination?: Maybe<GhostPagination>;
};

export type GhostPagination = {
  __typename?: 'GhostPagination';
  limit?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type GhostPageInfo = {
  __typename?: 'GhostPageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type GhostPage = {
  __typename?: 'GhostPage';
  access?: Maybe<Scalars['Boolean']>;
  authors?: Maybe<Array<Maybe<GhostAuthor>>>;
  canonicalUrl?: Maybe<Scalars['String']>;
  codeinjectionFoot?: Maybe<Scalars['String']>;
  codeinjectionHead?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  customExcerpt?: Maybe<Scalars['String']>;
  customTemplate?: Maybe<Scalars['String']>;
  emailSubject?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  ogTitle?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  primaryAuthor?: Maybe<GhostAuthor>;
  primaryTag?: Maybe<GhostTag>;
  publishedAt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  sendEmailWhenPublished?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
};

export type GhostTag = {
  __typename?: 'GhostTag';
  accentColor?: Maybe<Scalars['String']>;
  canonicalUrl?: Maybe<Scalars['String']>;
  codeinjectionFoot?: Maybe<Scalars['String']>;
  codeinjectionHead?: Maybe<Scalars['String']>;
  count?: Maybe<GhostPostsCount>;
  description?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  ogTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
};

export type GhostPagesConnection = {
  __typename?: 'GhostPagesConnection';
  edges?: Maybe<Array<Maybe<GhostPagesEdge>>>;
  meta?: Maybe<GhostMeta>;
  pageInfo: GhostPageInfo;
};

export type GhostPagesEdge = {
  __typename?: 'GhostPagesEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GhostPage>;
};

export type GhostPost = {
  __typename?: 'GhostPost';
  access?: Maybe<Scalars['Boolean']>;
  authors?: Maybe<Array<Maybe<GhostAuthor>>>;
  canonicalUrl?: Maybe<Scalars['String']>;
  codeinjectionFoot?: Maybe<Scalars['String']>;
  codeinjectionHead?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  customExcerpt?: Maybe<Scalars['String']>;
  customTemplate?: Maybe<Scalars['String']>;
  emailSubject?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  ogTitle?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  plaintext?: Maybe<Scalars['String']>;
  primaryAuthor?: Maybe<GhostAuthor>;
  primaryTag?: Maybe<GhostTag>;
  publishedAt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  sendEmailWhenPublished?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
};

export type GhostPostsConnection = {
  __typename?: 'GhostPostsConnection';
  edges?: Maybe<Array<Maybe<GhostPostsEdge>>>;
  meta?: Maybe<GhostMeta>;
  pageInfo: GhostPageInfo;
};

export type GhostPostsEdge = {
  __typename?: 'GhostPostsEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GhostPost>;
};

export type GhostSettings = {
  __typename?: 'GhostSettings';
  codeinjectionFoot?: Maybe<Scalars['String']>;
  codeinjectionHead?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  membersSupportAddress?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  navigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  ogTitle?: Maybe<Scalars['String']>;
  secondaryNavigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  timezone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GhostNavigation = {
  __typename?: 'GhostNavigation';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GhostTagsConnection = {
  __typename?: 'GhostTagsConnection';
  edges?: Maybe<Array<Maybe<GhostTagsEdge>>>;
  meta?: Maybe<GhostMeta>;
  pageInfo: GhostPageInfo;
};

export type GhostTagsEdge = {
  __typename?: 'GhostTagsEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GhostTag>;
};

export type BlogListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  page?: Maybe<Scalars['Int']>;
}>;

export type BlogListQuery = (
  { __typename?: 'GhostQuery' }
  & { posts?: Maybe<(
    { __typename?: 'GhostPostsConnection' }
    & { meta?: Maybe<(
      { __typename?: 'GhostMeta' }
      & { pagination?: Maybe<(
        { __typename?: 'GhostPagination' }
        & Pick<GhostPagination, 'total'>
      )> }
    )>, edges?: Maybe<Array<Maybe<(
      { __typename?: 'GhostPostsEdge' }
      & { node?: Maybe<(
        { __typename?: 'GhostPost' }
        & Pick<GhostPost, 'id' | 'slug' | 'createdAt' | 'title' | 'excerpt' | 'featureImage'>
        & { primaryTag?: Maybe<(
          { __typename?: 'GhostTag' }
          & Pick<GhostTag, 'slug' | 'name'>
        )> }
      )> }
    )>>> }
  )> }
);

export type BlogInfoQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type BlogInfoQuery = (
  { __typename?: 'GhostQuery' }
  & { post?: Maybe<(
    { __typename?: 'GhostPost' }
    & Pick<GhostPost, 'featureImage' | 'title' | 'excerpt' | 'createdAt' | 'html'>
    & { primaryTag?: Maybe<(
      { __typename?: 'GhostTag' }
      & Pick<GhostTag, 'slug' | 'name'>
    )>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'GhostTag' }
      & Pick<GhostTag, 'id' | 'name' | 'visibility'>
    )>>> }
  )> }
);

export type BlogCategoriesListQueryVariables = Exact<{ [key: string]: never; }>;

export type BlogCategoriesListQuery = (
  { __typename?: 'GhostQuery' }
  & { tags?: Maybe<(
    { __typename?: 'GhostTagsConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'GhostTagsEdge' }
      & { node?: Maybe<(
        { __typename?: 'GhostTag' }
        & Pick<GhostTag, 'id' | 'slug' | 'name' | 'visibility'>
      )> }
    )>>> }
  )> }
);

export type BlogCategoryInfoQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;

export type BlogCategoryInfoQuery = (
  { __typename?: 'GhostQuery' }
  & { tag?: Maybe<(
    { __typename?: 'GhostTag' }
    & Pick<GhostTag, 'slug' | 'name' | 'description' | 'featureImage'>
  )> }
);

export const BlogListDocument = gql`
    query BlogList($limit: Int, $filter: [String], $page: Int) {
  posts(include: ["tags"], limit: $limit, filter: $filter, page: $page) {
    meta {
      pagination {
        total
      }
    }
    edges {
      node {
        id
        slug
        primaryTag {
          slug
          name
        }
        createdAt
        title
        excerpt
        featureImage
      }
    }
  }
}
    `;

/**
 * __useBlogListQuery__
 *
 * To run a query within a React component, call `useBlogListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useBlogListQuery(baseOptions?: Apollo.QueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
  return Apollo.useQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, baseOptions);
}
export function useBlogListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
  return Apollo.useLazyQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, baseOptions);
}
export type BlogListQueryHookResult = ReturnType<typeof useBlogListQuery>;
export type BlogListLazyQueryHookResult = ReturnType<typeof useBlogListLazyQuery>;
export type BlogListQueryResult = Apollo.QueryResult<BlogListQuery, BlogListQueryVariables>;
export const BlogInfoDocument = gql`
    query BlogInfo($slug: String!) {
  post(slug: $slug, include: ["tags"]) {
    primaryTag {
      slug
      name
    }
    featureImage
    title
    excerpt
    createdAt
    html
    tags {
      id
      name
      visibility
    }
  }
}
    `;

/**
 * __useBlogInfoQuery__
 *
 * To run a query within a React component, call `useBlogInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogInfoQuery(baseOptions: Apollo.QueryHookOptions<BlogInfoQuery, BlogInfoQueryVariables>) {
  return Apollo.useQuery<BlogInfoQuery, BlogInfoQueryVariables>(BlogInfoDocument, baseOptions);
}
export function useBlogInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogInfoQuery, BlogInfoQueryVariables>) {
  return Apollo.useLazyQuery<BlogInfoQuery, BlogInfoQueryVariables>(BlogInfoDocument, baseOptions);
}
export type BlogInfoQueryHookResult = ReturnType<typeof useBlogInfoQuery>;
export type BlogInfoLazyQueryHookResult = ReturnType<typeof useBlogInfoLazyQuery>;
export type BlogInfoQueryResult = Apollo.QueryResult<BlogInfoQuery, BlogInfoQueryVariables>;
export const BlogCategoriesListDocument = gql`
    query BlogCategoriesList {
  tags {
    edges {
      node {
        id
        slug
        name
        visibility
      }
    }
  }
}
    `;

/**
 * __useBlogCategoriesListQuery__
 *
 * To run a query within a React component, call `useBlogCategoriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCategoriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCategoriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogCategoriesListQuery(baseOptions?: Apollo.QueryHookOptions<BlogCategoriesListQuery, BlogCategoriesListQueryVariables>) {
  return Apollo.useQuery<BlogCategoriesListQuery, BlogCategoriesListQueryVariables>(BlogCategoriesListDocument, baseOptions);
}
export function useBlogCategoriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCategoriesListQuery, BlogCategoriesListQueryVariables>) {
  return Apollo.useLazyQuery<BlogCategoriesListQuery, BlogCategoriesListQueryVariables>(BlogCategoriesListDocument, baseOptions);
}
export type BlogCategoriesListQueryHookResult = ReturnType<typeof useBlogCategoriesListQuery>;
export type BlogCategoriesListLazyQueryHookResult = ReturnType<typeof useBlogCategoriesListLazyQuery>;
export type BlogCategoriesListQueryResult = Apollo.QueryResult<BlogCategoriesListQuery, BlogCategoriesListQueryVariables>;
export const BlogCategoryInfoDocument = gql`
    query BlogCategoryInfo($slug: String) {
  tag(slug: $slug) {
    slug
    name
    description
    featureImage
  }
}
    `;

/**
 * __useBlogCategoryInfoQuery__
 *
 * To run a query within a React component, call `useBlogCategoryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCategoryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCategoryInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogCategoryInfoQuery(baseOptions?: Apollo.QueryHookOptions<BlogCategoryInfoQuery, BlogCategoryInfoQueryVariables>) {
  return Apollo.useQuery<BlogCategoryInfoQuery, BlogCategoryInfoQueryVariables>(BlogCategoryInfoDocument, baseOptions);
}
export function useBlogCategoryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCategoryInfoQuery, BlogCategoryInfoQueryVariables>) {
  return Apollo.useLazyQuery<BlogCategoryInfoQuery, BlogCategoryInfoQueryVariables>(BlogCategoryInfoDocument, baseOptions);
}
export type BlogCategoryInfoQueryHookResult = ReturnType<typeof useBlogCategoryInfoQuery>;
export type BlogCategoryInfoLazyQueryHookResult = ReturnType<typeof useBlogCategoryInfoLazyQuery>;
export type BlogCategoryInfoQueryResult = Apollo.QueryResult<BlogCategoryInfoQuery, BlogCategoryInfoQueryVariables>;
