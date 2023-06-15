import { SiteQuery } from './__generated/graphql.types';
import { useSiteQuery } from './graphql/__generated/sites.generated';
import { ExtractArrayValueType } from '../types/types.helpers';

type Sites = NonNullable<SiteQuery['siteCollection']>['items'];
type Site = NonNullable<ExtractArrayValueType<Sites>>;

const siteSingleton: null | Site = null;

export const getSiteConfig = async (): Promise<Site> => {
  if (siteSingleton) {
    return siteSingleton;
  }
  const slug = process.env.CONTENTFUL_SITE_SLUG!;
  const sites = await useSiteQuery.fetcher({ slug })();
  const site = sites.siteCollection?.items[0];
  if (!site) {
    throw new Error(`Site with slug: ${slug} seems not exist`);
  }
  return site;
};
