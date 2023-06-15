'use client';
import useSWR from 'swr';
const wait = (time: number) => {
  return new Promise(r => {
    setTimeout(() => r(true), time);
  });
};
const fetcher = async () => {
  const res = await fetch(`https://api.quotable.io/random?tags=technology`);
  const quote = await res.json();
  await wait(2000);
  return quote;
};
export function TestClient() {
  const { data, isLoading } = useSWR('/api/user', fetcher);

  return (
    <div>
      <h3>
        FROM client:
        {isLoading ? (
          'LOADING'
        ) : (
          <div>
            {data?.content} ({data?.author})
          </div>
        )}
      </h3>
    </div>
  );
}

export default TestClient;
