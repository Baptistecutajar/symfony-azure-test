import Link from 'next/link';

async function Blog() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { tags: ['collection'] },
  });
  const posts = await res.json();
  const random = Math.random();
  return (
    <>
      <ul>
        <li>TEST {random}</li>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog;
