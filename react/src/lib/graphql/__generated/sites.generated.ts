import * as Types from '../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type SiteQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SiteQuery = { __typename?: 'Query', siteCollection?: { __typename?: 'SiteCollection', items: Array<{ __typename?: 'Site', locales?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };


export const SiteDocument = `
    query Site($slug: String!, $preview: Boolean) {
  siteCollection(where: {siteSlug: $slug}, preview: $preview, limit: 1000) {
    items {
      sys {
        id
      }
      locales
    }
  }
}
    `;
export const useSiteQuery = <
      TData = SiteQuery,
      TError = unknown
    >(
      variables: SiteQueryVariables,
      options?: UseQueryOptions<SiteQuery, TError, TData>
    ) =>
    useQuery<SiteQuery, TError, TData>(
      ['Site', variables],
      customFetcher<SiteQuery, SiteQueryVariables>(SiteDocument, variables),
      options
    );

useSiteQuery.getKey = (variables: SiteQueryVariables) => ['Site', variables];
;

useSiteQuery.fetcher = (variables: SiteQueryVariables, options?: RequestInit['headers']) => customFetcher<SiteQuery, SiteQueryVariables>(SiteDocument, variables, options);