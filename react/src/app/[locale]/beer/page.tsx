import { UiCounter } from '@/ui/uilib';

import { Counter } from './counter';

async function Beer() {
  const res = await fetch('https://api.punkapi.com/v2/beers/random', {
    next: { tags: ['collection', 'collection1'] },
  });
  const beers = await res.json();
  return (
    <>
      <h1>{beers[0].name}</h1>
      <Counter />
      <UiCounter />
    </>
  );
}

export default Beer;
