import { useParams, Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { getArticlesByScreen, getScreenSummary } from '@/lib/content/loader';
import StatusBadge from '@/components/common/StatusBadge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName } from '@/lib/i18n/translations';

export default function ScreenPage() {
  const { screen } = useParams<{ screen: string }>();
  const { lang, t } = useLanguage();

  if (!screen) {
    return <div>{t('screenPage.invalidScreen')}</div>;
  }

  const articles = getArticlesByScreen(screen, lang);
  const summary = getScreenSummary(screen, lang);
  const screenDisplayName = getScreenName(screen, lang);

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {screenDisplayName}
        </h1>

        {summary && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{summary.articleCount} {summary.articleCount === 1 ? t('screenPage.article') : t('screenPage.articles')}</span>
            {summary.statuses && (
              <>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    🟢 {summary.statuses.completed}
                  </span>
                  <span className="flex items-center gap-1">
                    🟡 {summary.statuses.inProgress}
                  </span>
                  <span className="flex items-center gap-1">
                    🔴 {summary.statuses.notStarted}
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Articles List */}
      {articles.length === 0 ? (
        <div className="text-center py-16">
          <FileQuestion size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            {t('screenPage.noDocs')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {t('screenPage.docsInProgress').replace('{screen}', screenDisplayName)}
          </p>
          <div className="max-w-2xl mx-auto text-left bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">🚧 {t('screenPage.underConstruction')}</h3>
            <p className="text-sm text-gray-700">
              {t('screenPage.underConstructionDesc')}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/article/${article.slug}`}
              className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-primary-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h2>
                {article.metadata.status && (
                  <StatusBadge status={article.metadata.status} />
                )}
              </div>

              {article.excerpt && (
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-500">
                {article.metadata.role && (
                  <span className="flex items-center gap-1">
                    <span className="font-medium">{t('screenPage.role')}</span> {article.metadata.role}
                  </span>
                )}
                {article.metadata.difficulty && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">{t('screenPage.level')}</span> {article.metadata.difficulty}
                    </span>
                  </>
                )}
                {article.headings.length > 0 && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span>{article.headings.length} {t('screenPage.sections')}</span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Help Section */}
      {articles.length > 0 && (
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">💡 {t('screenPage.notFound')}</h3>
          <p className="text-sm text-gray-700 mb-4">
            {t('screenPage.notFoundDesc')}
          </p>
          <Link
            to="/troubleshooting"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            {t('screenPage.goToTroubleshooting')}
          </Link>
        </div>
      )}
    </div>
  );
}
