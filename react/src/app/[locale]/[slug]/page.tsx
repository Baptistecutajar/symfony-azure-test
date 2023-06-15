import { CounterContextProvider } from '@/src/context/counter.context';
import { getSiteConfig } from '@/src/lib/site-config';

import { ComponentGqlResolver } from '../../components/component-gql-resolver';
import {
  CtfPageFieldsFragment,
  useCtfPageQuery,
  useCtfPageSlugsQuery,
} from '../../components/ctf-page/__generated/ctf-page.generated';

const getPage = async (
  slug: string,
  locale: string,
  preview = false,
): Promise<CtfPageFieldsFragment | false> => {
  const pageResult = await useCtfPageQuery.fetcher({ slug, locale, preview })();
  if (pageResult.pageCollection?.items[0]) {
    return pageResult.pageCollection?.items[0];
  }
  return false;
  // throw new Error('Failed to fetch data');
};

export async function generateStaticParams() {
  const siteConfig = await getSiteConfig();
  const pages: { slug: string; locale: string }[] = [];
  if (siteConfig.locales) {
    for (const locale of siteConfig.locales) {
      if (locale) {
        const localPages = await useCtfPageSlugsQuery.fetcher({ locale })();
        localPages.pageCollection?.items.forEach(localPage => {
          if (localPage?.slug) {
            pages.push({
              slug: localPage?.slug,
              locale,
            });
          }
        });
      }
    }
  }

  return pages;
}

type PageProps = {
  params: { slug: string; locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
const isPreview = (data: PageProps) => {
  try {
    return !!data?.searchParams?.preview;
  } catch {
    return false;
  }
};
export default async function HomeApp(data: PageProps) {
  const { params } = data;
  const preview = isPreview(data);
  const page = await getPage(params.slug, params.locale, preview);
  if (!page) {
    return <div>Page {params.slug} seems contain error</div>;
  }
  return (
    <main>
      <h1>{page?.pageName}</h1>
      <CounterContextProvider>
        {page.topSectionCollection?.items.map(component => (
          <div key={component?.sys.id}>
            {/* @ts-ignore */}
            <ComponentGqlResolver {...component} preview={preview} locale={params.locale} />
          </div>
        ))}
      </CounterContextProvider>
    </main>
  );
}
