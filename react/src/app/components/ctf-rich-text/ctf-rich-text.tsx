import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, TopLevelBlock } from '@contentful/rich-text-types';
import Link from 'next/link';

import { ContentPart } from '@/src/lib/__generated/graphql.types';
import { ExtractArrayValueType } from '@/src/types/types.helpers';

import { CtfContentPart } from '../ctf-content-part/ctf-content-part';
import { DemoFieldsFragment } from '../ctf-demo/__generated/ctf-demo.generated';

export type EmbeddedEntryType = ContentPart | null;
type Hyperlinks = NonNullable<DemoFieldsFragment['wysiwyg']>['links']['entries']['hyperlink'];
type Hyperlink = NonNullable<ExtractArrayValueType<Hyperlinks>>;
export interface ContentfulRichTextInterface {
  json?: Document;
  links?:
    | {
        entries: {
          block: Array<EmbeddedEntryType>;
          hyperlink: Hyperlinks;
        };
      }
    | any;
}

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
  switch (entry?.__typename) {
    case 'ContentPart':
      return <CtfContentPart {...entry} />;
    default:
      return null;
  }
};

export const contentfulBaseRichTextOptions = ({ links }: ContentfulRichTextInterface): Options => ({
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: node => {
      const page = links?.entries?.hyperlink.find(
        (h: Hyperlink) => h.sys.id === node.data.target.sys.id,
      );
      return (
        <Link href={`/${page.slug}`}>
          {documentToReactComponents({
            nodeType: BLOCKS.DOCUMENT,
            content: node.content as TopLevelBlock[],
            data: {},
          })}
        </Link>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const entry = links?.entries?.block?.find(
        (item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id,
      );

      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },
  },
});
export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return (
    <article className="prose prose-sm max-w-none">
      {/* @ts-ignore */}
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
