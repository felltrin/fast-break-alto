import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  _id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  movies: Array<Movie>;
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', _id: string, title: string, year: number }> };


export const GetMoviesDocument = gql`
    query GetMovies {
  movies {
    _id
    title
    year
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
// @ts-ignore
export function useGetMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>): Apollo.UseSuspenseQueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export function useGetMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>): Apollo.UseSuspenseQueryResult<GetMoviesQuery | undefined, GetMoviesQueryVariables>;
export function useGetMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesSuspenseQueryHookResult = ReturnType<typeof useGetMoviesSuspenseQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;