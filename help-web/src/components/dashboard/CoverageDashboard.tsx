/**
 * CoverageDashboard Component
 * Displays documentation coverage statistics and status
 */

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Clock, Circle, TrendingUp } from 'lucide-react';
import { getAllArticles, getAllScreens } from '@/lib/content/loader';

interface StatusCounts {
  completed: number;
  inProgress: number;
  notStarted: number;
  noStatus: number;
}

export default function CoverageDashboard() {
  const articles = getAllArticles();
  const screens = getAllScreens();

  // Calculate status distribution
  const statusCounts = useMemo((): StatusCounts => {
    return articles.reduce((acc, article) => {
      const status = article.metadata.status;
      if (status === '🟢') acc.completed++;
      else if (status === '🟡') acc.inProgress++;
      else if (status === '🔴') acc.notStarted++;
      else acc.noStatus++;
      return acc;
    }, { completed: 0, inProgress: 0, notStarted: 0, noStatus: 0 });
  }, [articles]);

  const totalArticles = articles.length;
  const completionRate = totalArticles > 0
    ? Math.round((statusCounts.completed / totalArticles) * 100)
    : 0;

  // Sort screens by article count and add display names
  const sortedScreens = useMemo(() => {
    const screenNames: Record<string, string> = {
      home: 'Home',
      reservations: 'Rezerwacje',
      shop: 'Sklep',
      business: 'Biznes',
      trainer: 'Trener',
      profile: 'Profil',
      troubleshooting: 'Rozwiązywanie problemów'
    };

    return screens
      .map(screen => ({
        ...screen,
        displayName: screenNames[screen.screen] || screen.screen
      }))
      .sort((a, b) => b.articleCount - a.articleCount);
  }, [screens]);

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Articles */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Łącznie artykułów</h3>
            <FileText size={20} className="text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalArticles}</p>
        </div>

        {/* Completion Rate */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Ukończone</h3>
            <TrendingUp size={20} className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{completionRate}%</p>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

        {/* In Progress */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">W trakcie</h3>
            <Clock size={20} className="text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{statusCounts.inProgress}</p>
          <p className="text-sm text-gray-500 mt-1">
            {totalArticles > 0 ? Math.round((statusCounts.inProgress / totalArticles) * 100) : 0}% wszystkich
          </p>
        </div>

        {/* Not Started */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Nie rozpoczęto</h3>
            <Circle size={20} className="text-red-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{statusCounts.notStarted}</p>
          <p className="text-sm text-gray-500 mt-1">
            {totalArticles > 0 ? Math.round((statusCounts.notStarted / totalArticles) * 100) : 0}% wszystkich
          </p>
        </div>
      </div>

      {/* Status Distribution */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rozkład statusów</h3>
        <div className="space-y-3">
          {/* Completed */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-40">
              <CheckCircle size={18} className="text-green-500" />
              <span className="text-sm font-medium text-gray-700">Ukończono</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: totalArticles > 0 ? `${(statusCounts.completed / totalArticles) * 100}%` : '0%'
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {statusCounts.completed}
                </span>
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-40">
              <Clock size={18} className="text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">W trakcie</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: totalArticles > 0 ? `${(statusCounts.inProgress / totalArticles) * 100}%` : '0%'
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {statusCounts.inProgress}
                </span>
              </div>
            </div>
          </div>

          {/* Not Started */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-40">
              <Circle size={18} className="text-red-500" />
              <span className="text-sm font-medium text-gray-700">Nie rozpoczęto</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: totalArticles > 0 ? `${(statusCounts.notStarted / totalArticles) * 100}%` : '0%'
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {statusCounts.notStarted}
                </span>
              </div>
            </div>
          </div>

          {/* No Status */}
          {statusCounts.noStatus > 0 && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 w-40">
                <Circle size={18} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Brak statusu</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gray-400 h-3 rounded-full transition-all duration-300"
                      style={{
                        width: totalArticles > 0 ? `${(statusCounts.noStatus / totalArticles) * 100}%` : '0%'
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {statusCounts.noStatus}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Coverage by Screen */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pokrycie według ekranów</h3>
        <div className="space-y-3">
          {sortedScreens.length > 0 ? (
            sortedScreens.map(({ screen, displayName, articleCount, statuses }) => {
              const screenCompletionRate = articleCount > 0
                ? Math.round((statuses.completed / articleCount) * 100)
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
                        {articleCount} {articleCount === 1 ? 'artykuł' : 'artykułów'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${screenCompletionRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-12 text-right">
                        {screenCompletionRate}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span>🟢 {statuses.completed}</span>
                      <span>🟡 {statuses.inProgress}</span>
                      <span>🔴 {statuses.notStarted}</span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-4">Brak danych do wyświetlenia</p>
          )}
        </div>
      </div>
    </div>
  );
}
