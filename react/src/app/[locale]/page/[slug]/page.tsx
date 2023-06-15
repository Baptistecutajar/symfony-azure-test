import { useCtfPageQuery } from '@src/app/components/ctf-page/__generated/ctf-page.generated';
import CtfPage from '@src/app/components/ctf-page/ctf-page';

export async function generateStaticParams() {
  return [{ slug: 'home' }];
}
async function Page({ params: { slug } }: { params: { slug: string } }) {
  console.log('PAGE SLUG', slug);
  const test = await useCtfPageQuery.fetcher({ slug: 'home' })();
  const random = Math.random();
  const page = test.pageCollection?.items[0];
  if (!page) {
    return <div>Not found</div>;
  }
  return (
    <div>
      THIS IS A BASIC PAGE {slug} {page.slug}
      <div>
        RANDOM: {random}
        <pre>{JSON.stringify(page, null, 2)}</pre>
        <CtfPage {...page} />
      </div>
    </div>
  );
}

export default Page;
