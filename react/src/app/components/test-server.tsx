import Link from 'next/link';

export const fetcher = async () => {
  const res = await fetch(`https://api.quotable.io/random?tags=technology`);
  const quote = await res.json();
  return quote;
};
export async function TestServer() {
  const quote = await fetcher();

  return (
    <div>
      <Link href="/dashboard">Go to dashboard</Link>
      <h3>
        FROM SERVER: {quote?.content} ({quote?.author})
      </h3>
    </div>
  );
}

export default TestServer;
