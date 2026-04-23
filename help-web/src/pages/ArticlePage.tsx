import { useParams, Link, Navigate } from 'react-router-dom';
import { Home, Clock, User, BarChart2 } from 'lucide-react';
import { getArticleBySlug } from '@/lib/content/loader';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName } from '@/lib/i18n/translations';

export default function ArticlePage() {
  const { '*': slug } = useParams();
  const { lang, t } = useLanguage();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const article = getArticleBySlug(slug, lang);

  if (!article) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('article.notFound')}
        </h1>
        <p className="text-gray-600 mb-8">
          {t('article.notFoundDesc').replace('{slug}', slug)}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Home size={20} />
          {t('article.backHome')}
        </Link>
      </div>
    );
  }

  const screenDisplayName = getScreenName(article.screen, lang);
  const dateLocale = lang === 'pl' ? 'pl-PL' : 'en-GB';

  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              {article.metadata.role && (
                <span className="flex items-center gap-1.5">
                  <User size={16} />
                  <span className="font-medium">{t('article.role')}</span> {article.metadata.role}
                </span>
              )}
              {article.metadata.difficulty && (
                <span className="flex items-center gap-1.5">
                  <BarChart2 size={16} />
                  <span className="font-medium">{t('article.level')}</span> {article.metadata.difficulty}
                </span>
              )}
              {article.metadata.lastUpdated && (
                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span className="font-medium">{t('article.updated')}</span>{' '}
                  {new Date(article.metadata.lastUpdated).toLocaleDateString(dateLocale)}
                </span>
              )}
            </div>
          </div>

          {/* Prerequisites */}
          {article.metadata.prerequisites && article.metadata.prerequisites.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">📋 {t('article.prerequisites')}</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {article.metadata.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Markdown Content */}
          <article className="prose-wrapper">
            <MarkdownRenderer content={article.content} articleSlug={slug} isIndex={article.isIndex} />
          </article>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link
                to={`/screen/${article.screen}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                ← {t('article.backTo')} {screenDisplayName}
              </Link>
              <div className="text-sm text-gray-500">
                {t('article.lastUpdated')}{' '}
                {new Date(article.metadata.lastUpdated || '').toLocaleDateString(dateLocale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        {article.headings.length > 0 && (
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  {t('article.toc')}
                </h3>
                <nav className="space-y-2">
                  {article.headings.map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.id}`}
                      className={`block text-sm hover:text-primary-600 transition-colors ${
                        heading.level === 1
                          ? 'font-semibold text-gray-900'
                          : heading.level === 2
                          ? 'font-medium text-gray-700 pl-2'
                          : 'text-gray-600 pl-4'
                      }`}
                      style={{
                        paddingLeft: `${(heading.level - 1) * 0.75}rem`
                      }}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
