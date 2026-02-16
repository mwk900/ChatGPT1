import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article'
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'MatiWozniak'
    }
  };

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="mb-2 text-sm text-brand-accent">{post.category}</p>
        <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-3 text-sm text-brand-muted">
          By MatiWozniak · {new Date(post.date).toLocaleDateString()} · {post.readTime}
        </p>
      </header>
      <div className="space-y-5 text-lg leading-relaxed text-brand-muted">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex gap-3">
        <Link
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
          className="rounded-full border border-brand-border px-4 py-2 text-sm"
        >
          Share on Twitter
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://mwk000.netlify.app/blog/' + post.slug)}`}
          className="rounded-full border border-brand-border px-4 py-2 text-sm"
        >
          Share on LinkedIn
        </Link>
      </div>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Related Posts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((entry) => (
            <Link key={entry.slug} href={`/blog/${entry.slug}`} className="card hover:border-brand-accent">
              <p className="text-xs text-brand-accent">{entry.category}</p>
              <p className="mt-2 font-semibold">{entry.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}
