import { Children, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/github.css';
import { Link } from 'react-router-dom';
import { colors, fonts } from '@/lib/theme';

const linkStyle: React.CSSProperties = {
  color: colors.primary,
  textDecoration: 'none',
  fontWeight: 500,
};
const onLinkEnter = (e: React.MouseEvent<HTMLElement>) => {
  (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
  (e.currentTarget as HTMLElement).style.color = colors.primaryLight;
};
const onLinkLeave = (e: React.MouseEvent<HTMLElement>) => {
  (e.currentTarget as HTMLElement).style.textDecoration = 'none';
  (e.currentTarget as HTMLElement).style.color = colors.primary;
};
const headingStyle = (size: string): React.CSSProperties => ({
  fontFamily: fonts.brand,
  fontWeight: 700,
  color: colors.dark,
  fontSize: size,
});

/**
 * If a list item's text content contains " : ", bold the part before it.
 * Handles both plain text children and mixed React nodes.
 */
function boldDefinition(children: ReactNode): ReactNode {
  const arr = Children.toArray(children);

  // Find first text node that contains " : "
  let colonIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && (arr[i] as string).includes(' : ')) {
      colonIndex = i;
      break;
    }
  }

  if (colonIndex === -1) return children;

  const text = arr[colonIndex] as string;
  const [before, ...rest] = text.split(' : ');
  const after = rest.join(' : ');

  return [
    ...arr.slice(0, colonIndex),
    <strong key="def" className="font-semibold text-gray-900">{before}</strong>,
    <span key="sep" className="text-gray-500"> : </span>,
    after,
    ...arr.slice(colonIndex + 1),
  ];
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
  articleSlug?: string;
  isIndex?: boolean;
}

function resolveRelativePath(href: string, currentSlug: string, isIndex?: boolean): string {
  const cleanHref = href.replace(/\.md$/, '');
  const parts = currentSlug.split('/');

  // For index (README) pages, the slug IS the directory, so keep all parts.
  // For regular pages, strip the last segment (filename) to get the directory.
  const baseParts = isIndex ? [...parts] : parts.slice(0, -1);
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

/**
 * Groups flat markdown AST nodes into sections separated by h2 headings.
 * Each section becomes a card in the UI.
 */
function groupContentBySections(content: string): string[] {
  const lines = content.split('\n');
  const sections: string[] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (line.match(/^## /) && current.length > 0) {
      sections.push(current.join('\n'));
      current = [line];
    } else {
      current.push(line);
    }
  }

  if (current.length > 0) {
    sections.push(current.join('\n'));
  }

  return sections;
}

function MarkdownSection({ content, articleSlug, isIndex, isCard }: { content: string; articleSlug?: string; isIndex?: boolean; isCard: boolean }) {
  const wrapperClass = isCard ? 'p-6 mb-4' : 'mb-4';
  const wrapperStyle: React.CSSProperties = isCard
    ? {
        backgroundColor: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: '12px',
      }
    : {};

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="prose-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }]
          ]}
          components={{
            img: ({ src, alt }) => (
              <div className="flex justify-center my-4">
                <img
                  src={src}
                  alt={alt || ''}
                  className="rounded-lg shadow-md"
                  style={{ width: '250px', height: 'auto' }}
                  loading="lazy"
                  onError={(e) => {
                    const wrapper = (e.currentTarget as HTMLImageElement).parentElement;
                    if (wrapper) wrapper.style.display = 'none';
                  }}
                />
              </div>
            ),
            a: ({ href, children }) => {
              if (href?.startsWith('http')) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={onLinkEnter}
                    onMouseLeave={onLinkLeave}
                  >
                    {children}
                  </a>
                );
              }
              if (href?.startsWith('/')) {
                return (
                  <Link to={href} style={linkStyle} onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
                    {children}
                  </Link>
                );
              }
              if (href?.startsWith('#')) {
                return (
                  <a href={href} style={linkStyle} onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
                    {children}
                  </a>
                );
              }
              if (href?.endsWith('.md')) {
                const resolved = articleSlug
                  ? resolveRelativePath(href, articleSlug, isIndex)
                  : href.replace(/\.md$/, '').replace(/^\.\//, '');
                return (
                  <Link to={`/article/${resolved}`} style={linkStyle} onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
                    {children}
                  </Link>
                );
              }
              return (
                <a href={href} style={linkStyle} onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
                  {children}
                </a>
              );
            },
            code: ({ className, children }) => {
              const match = /language-(\w+)/.exec(className || '');
              if (match) {
                return <code className={className}>{children}</code>;
              }
              return (
                <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                  {children}
                </code>
              );
            },
            h1: ({ children, id }) => (
              <h1 id={id} className="mb-3" style={headingStyle('1.5rem')}>
                {children}
              </h1>
            ),
            h2: ({ children, id }) => (
              <h2 id={id} className="mb-3" style={headingStyle('1.25rem')}>
                {children}
              </h2>
            ),
            h3: ({ children, id }) => (
              <h3 id={id} className="mt-5 mb-2" style={{ ...headingStyle('1.125rem'), fontWeight: 600 }}>
                {children}
              </h3>
            ),
            h4: ({ children, id }) => (
              <h4 id={id} className="mt-4 mb-2" style={{ ...headingStyle('1rem'), fontWeight: 600 }}>
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 text-sm mb-3" style={{ lineHeight: '1.65' }}>
                {children}
              </p>
            ),
            li: ({ children }) => {
              // Auto-bold definition terms: "**Term** : description" or "Term : description"
              const enhanced = boldDefinition(children);
              return (
                <li className="text-gray-700 text-sm" style={{ lineHeight: '1.65' }}>
                  {enhanced}
                </li>
              );
            },
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-gray-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-1 mb-3 text-sm text-gray-700">
                {children}
              </ol>
            ),
            blockquote: ({ children }) => (
              <blockquote
                className="pl-4 py-2 my-4 text-sm"
                style={{
                  borderLeft: `4px solid ${colors.primary}`,
                  backgroundColor: 'rgba(77,99,172,0.06)',
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px',
                  color: colors.textPrimary,
                  lineHeight: '1.65',
                }}
              >
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2.5 text-sm text-gray-900" style={{ lineHeight: '1.5' }}>
                {children}
              </td>
            ),
            hr: () => <hr className="my-2 border-gray-200" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default function MarkdownRenderer({ content, className = '', articleSlug, isIndex }: MarkdownRendererProps) {
  const sections = groupContentBySections(content);

  return (
    <div className={`max-w-none ${className}`}>
      {sections.map((section, i) => {
        const isFirstSection = i === 0;
        const startsWithH2 = section.trimStart().startsWith('## ');
        // First section (before any h2) renders without card, h2 sections get cards
        const isCard = !isFirstSection && startsWithH2;

        return (
          <MarkdownSection
            key={i}
            content={section}
            articleSlug={articleSlug}
            isIndex={isIndex}
            isCard={isCard}
          />
        );
      })}
    </div>
  );
}
