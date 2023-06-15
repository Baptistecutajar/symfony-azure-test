import { useCtfDemoQuery } from './__generated/ctf-demo.generated';

export const CtfDemoFetcher = async (data: { id?: string; locale?: string; preview?: boolean }) => {
  const result = await useCtfDemoQuery.fetcher({ ...data })();
  return {
    ...result.componentDemo,
    persons: result.topicPersonCollection,
  };
};
