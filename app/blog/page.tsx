import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="space-y-8">
      <header>
        <h1 className="section-title">Blog</h1>
        <p className="mt-2 text-brand-muted">Short insights on learning, projects, and industry observations.</p>
      </header>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="card hover:border-brand-accent">
            <p className="mb-2 text-xs uppercase tracking-wide text-brand-accent">{post.category}</p>
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:text-brand-accent">
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-brand-muted">
              {new Date(post.date).toLocaleDateString()} · {post.readTime}
            </p>
            <p className="mt-3 text-brand-muted">{post.excerpt.slice(0, 150)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
