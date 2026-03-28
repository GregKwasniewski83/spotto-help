import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/github.css';
import { Link } from 'react-router-dom';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  articleSlug?: string;
}

function resolveRelativePath(href: string, currentSlug: string): string {
  const cleanHref = href.replace(/\.md$/, '');
  const parts = currentSlug.split('/');
  const baseParts = parts.length === 1 ? [...parts] : parts.slice(0, -1);
  const hrefParts = cleanHref.split('/');
  const resultParts = [...baseParts];

  for (const part of hrefParts) {
    if (part === '.') continue;
    if (part === '..') {
      resultParts.pop();
    } else {
      resultParts.push(part);
    }
  }

  return resultParts.join('/').replace(/\/README$/, '');
}

export default function MarkdownRenderer({ content, className = '', articleSlug }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ]}
        components={{
          // Custom image rendering
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg shadow-md my-4"
              loading="lazy"
            />
          ),
          // Custom link rendering (convert relative links to router links)
          a: ({ href, children }) => {
            // External links
            if (href?.startsWith('http')) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {children}
                </a>
              );
            }
            // Internal links
            if (href?.startsWith('/')) {
              return (
                <Link
                  to={href}
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {children}
                </Link>
              );
            }
            // Anchor links
            if (href?.startsWith('#')) {
              return (
                <a
                  href={href}
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {children}
                </a>
              );
            }
            // Relative markdown links (convert to router links)
            if (href?.endsWith('.md')) {
              const resolved = articleSlug
                ? resolveRelativePath(href, articleSlug)
                : href.replace(/\.md$/, '').replace(/^\.\//, '');
              return (
                <Link
                  to={`/article/${resolved}`}
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} className="text-primary-600 hover:text-primary-700 hover:underline">
                {children}
              </a>
            );
          },
          // Custom code block rendering
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            if (match) {
              // Block code with syntax highlighting (handled by rehype-highlight)
              return (
                <code className={className}>
                  {children}
                </code>
              );
            }
            // Inline code
            return (
              <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                {children}
              </code>
            );
          },
          // Custom heading rendering (for better styling)
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
              {children}
            </h4>
          ),
          // Custom blockquote rendering
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 text-gray-700 italic">
              {children}
            </blockquote>
          ),
          // Custom table rendering
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
