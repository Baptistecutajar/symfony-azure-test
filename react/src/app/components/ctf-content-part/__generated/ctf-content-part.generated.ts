import * as Types from '../../../../lib/__generated/graphql.types';

export type ContentPartFieldsFragment = { __typename: 'ContentPart', title?: string | null, sys: { __typename?: 'Sys', id: string } };

export const ContentPartFieldsFragmentDoc = `
    fragment ContentPartFields on ContentPart {
  __typename
  sys {
    id
  }
  title
}
    `;