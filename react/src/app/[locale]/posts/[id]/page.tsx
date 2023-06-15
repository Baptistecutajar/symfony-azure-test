import Link from 'next/link';

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { tags: ['collection'] },
  });
  const posts = await res.json();
  return posts.slice(0, 10).map((post: any) => ({
    id: post.id.toString(),
  }));
}

async function BlogPost({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { tags: ['blogpost', `blogpost--${id}`] },
  });
  const post = await res.json();
  return (
    <div>
      <Link href="/posts">Back to blog</Link>
      <h1>
        {post.title} ({post.id})
      </h1>
    </div>
  );
}

export default BlogPost;
