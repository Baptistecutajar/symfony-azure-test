import Link from 'next/link';

import { Button } from '@/ui/button/Button';

export default function Home() {
  return (
    <main>
      dashboard
      <Button>Test</Button>
      <Link href="/home-app">Go to home app</Link>
    </main>
  );
}
