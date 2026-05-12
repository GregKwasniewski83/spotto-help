/**
 * CoverageDashboard Component
 * Displays documentation coverage statistics
 */

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layers, Image } from 'lucide-react';
import { getAllArticles, getAllScreens } from '@/lib/content/loader';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName } from '@/lib/i18n/translations';

export default function CoverageDashboard() {
  const { lang, t } = useLanguage();
  const articles = getAllArticles(lang);
  const screens = getAllScreens(lang);

  const totalArticles = articles.length;
  const totalScreens = screens.length;

  const articlesWithImages = useMemo(() => {
    return articles.filter(a => a.content.includes('!['));
  }, [articles]);

  const sortedScreens = useMemo(() => {
    return screens
      .map(screen => ({
        ...screen,
        displayName: getScreenName(screen.screen, lang)
      }))
      .sort((a, b) => b.articleCount - a.articleCount);
  }, [screens, lang]);

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{t('dashboard.totalArticles')}</h3>
            <FileText size={20} className="text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalArticles}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{t('dashboard.totalScreens')}</h3>
            <Layers size={20} className="text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalScreens}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{t('dashboard.withImages')}</h3>
            <Image size={20} className="text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{articlesWithImages.length}</p>
          <p className="text-sm text-gray-500 mt-1">
            {totalArticles > 0 ? Math.round((articlesWithImages.length / totalArticles) * 100) : 0}% {t('dashboard.ofAll')}
          </p>
        </div>
      </div>

      {/* Coverage by Screen */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('dashboard.coverageByScreen')}</h3>
        <div className="space-y-3">
          {sortedScreens.length > 0 ? (
            sortedScreens.map(({ screen, displayName, articleCount }) => {
              const percentage = totalArticles > 0
                ? Math.round((articleCount / totalArticles) * 100)
                : 0;

              return (
                <Link
                  key={screen}
                  to={`/screen/${screen}`}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 group-hover:text-primary-600">
                        {displayName}
                      </span>
                      <span className="text-sm text-gray-600">
                        {articleCount} {articleCount === 1 ? t('screenPage.article') : t('screenPage.articles')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-12 text-right">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-4">{t('dashboard.noData')}</p>
          )}
        </div>
      </div>
    </div>
  );
}
