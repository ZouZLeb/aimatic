import Link from 'next/link';
import type { Post } from '@/lib/posts';

type Props = { post: Post };

export function PostCard({ post }: Props) {
  const { frontmatter, slug } = post;

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      {frontmatter.category && (
        <Link
          href={`/blog/category/${frontmatter.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-xs font-bold uppercase tracking-widest text-primary mb-3 hover:underline"
        >
          {frontmatter.category}
        </Link>
      )}

      <Link href={`/blog/${slug}`}>
        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
          {frontmatter.title}
        </h2>
      </Link>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
        {frontmatter.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <time
          dateTime={frontmatter.publishedAt}
          className="text-xs text-muted-foreground"
        >
          {new Date(frontmatter.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <span className="text-xs text-muted-foreground">
            {frontmatter.tags.slice(0, 2).join(' · ')}
          </span>
        )}
      </div>
    </article>
  );
}
