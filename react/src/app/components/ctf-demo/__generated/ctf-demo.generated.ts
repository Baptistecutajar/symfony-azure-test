import * as Types from '../../../../lib/__generated/graphql.types';

import { ContentPartFieldsFragment } from '../../ctf-content-part/__generated/ctf-content-part.generated';
import { ContentPartFieldsFragmentDoc } from '../../ctf-content-part/__generated/ctf-content-part.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type DemoFieldsFragment = { __typename: 'ComponentDemo', title?: string | null, sys: { __typename?: 'Sys', id: string }, wysiwyg?: { __typename?: 'ComponentDemoWysiwyg', json: any, links: { __typename?: 'ComponentDemoWysiwygLinks', entries: { __typename?: 'ComponentDemoWysiwygEntries', block: Array<{ __typename?: 'ComponentCta' } | { __typename?: 'ComponentDemo' } | { __typename?: 'ComponentDuplex' } | { __typename?: 'ComponentHeroBanner' } | { __typename?: 'ComponentInfoBlock' } | { __typename?: 'ComponentProductTable' } | { __typename?: 'ComponentQuote' } | { __typename?: 'ComponentTextBlock' } | (
          { __typename?: 'ContentPart' }
          & ContentPartFieldsFragment
        ) | { __typename?: 'FooterMenu' } | { __typename?: 'MenuGroup' } | { __typename?: 'NavigationMenu' } | { __typename?: 'Page' } | { __typename?: 'Seo' } | { __typename?: 'Site' } | { __typename?: 'TopicBusinessInfo' } | { __typename?: 'TopicPerson' } | { __typename?: 'TopicProduct' } | { __typename?: 'TopicProductFeature' } | null>, hyperlink: Array<{ __typename?: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDemo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentPart', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Site', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type DemoPersonsFieldsFragment = { __typename: 'TopicPersonCollection', items: Array<{ __typename?: 'TopicPerson', name?: string | null, sys: { __typename?: 'Sys', id: string } } | null> };

export type CtfDemoQueryVariables = Types.Exact<{
  id?: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfDemoQuery = { __typename?: 'Query', componentDemo?: (
    { __typename?: 'ComponentDemo' }
    & DemoFieldsFragment
  ) | null, topicPersonCollection?: (
    { __typename?: 'TopicPersonCollection' }
    & DemoPersonsFieldsFragment
  ) | null };

export const DemoFieldsFragmentDoc = `
    fragment DemoFields on ComponentDemo {
  __typename
  sys {
    id
  }
  title
  wysiwyg {
    json
    links {
      entries {
        block {
          ...ContentPartFields
        }
        hyperlink {
          sys {
            id
          }
          ... on Page {
            slug
          }
        }
      }
    }
  }
}
    `;
export const DemoPersonsFieldsFragmentDoc = `
    fragment DemoPersonsFields on TopicPersonCollection {
  __typename
  items {
    sys {
      id
    }
    name
  }
}
    `;
export const CtfDemoDocument = `
    query CtfDemo($id: String! = "rZ6la3WG2fspn2vCvUU0y", $locale: String, $preview: Boolean) {
  componentDemo(id: $id, locale: $locale, preview: $preview) {
    ...DemoFields
  }
  topicPersonCollection(limit: 100, locale: $locale, preview: $preview) {
    ...DemoPersonsFields
  }
}
    ${DemoFieldsFragmentDoc}
${ContentPartFieldsFragmentDoc}
${DemoPersonsFieldsFragmentDoc}`;
export const useCtfDemoQuery = <
      TData = CtfDemoQuery,
      TError = unknown
    >(
      variables?: CtfDemoQueryVariables,
      options?: UseQueryOptions<CtfDemoQuery, TError, TData>
    ) =>
    useQuery<CtfDemoQuery, TError, TData>(
      variables === undefined ? ['CtfDemo'] : ['CtfDemo', variables],
      customFetcher<CtfDemoQuery, CtfDemoQueryVariables>(CtfDemoDocument, variables),
      options
    );

useCtfDemoQuery.getKey = (variables?: CtfDemoQueryVariables) => variables === undefined ? ['CtfDemo'] : ['CtfDemo', variables];
;

useCtfDemoQuery.fetcher = (variables?: CtfDemoQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfDemoQuery, CtfDemoQueryVariables>(CtfDemoDocument, variables, options);