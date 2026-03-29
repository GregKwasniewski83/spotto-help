import { useParams, Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { getArticlesByScreen, getScreenSummary } from '@/lib/content/loader';
import StatusBadge from '@/components/common/StatusBadge';

const screenNames: Record<string, string> = {
  home: 'Home',
  reservations: 'Rezerwacje',
  shop: 'Sklep',
  business: 'Biznes',
  trainer: 'Trener',
  profile: 'Profil',
  troubleshooting: 'Rozwiązywanie problemów'
};

export default function ScreenPage() {
  const { screen } = useParams<{ screen: string }>();

  if (!screen) {
    return <div>Nieprawidłowy ekran</div>;
  }

  const articles = getArticlesByScreen(screen);
  const summary = getScreenSummary(screen);
  const screenDisplayName = screenNames[screen] || screen;

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {screenDisplayName}
        </h1>

        {summary && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{summary.articleCount} {summary.articleCount === 1 ? 'artykuł' : 'artykuły'}</span>
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
            Brak dokumentacji
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Dokumentacja dla ekranu "{screenDisplayName}" jest w trakcie tworzenia.
          </p>
          <div className="max-w-2xl mx-auto text-left bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">🚧 Sekcja w budowie</h3>
            <p className="text-sm text-gray-700">
              Ta sekcja zostanie wkrótce wypełniona treścią. W międzyczasie możesz sprawdzić inne
              ekrany aplikacji lub wrócić do strony głównej.
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
                    <span className="font-medium">Rola:</span> {article.metadata.role}
                  </span>
                )}
                {article.metadata.difficulty && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Poziom:</span> {article.metadata.difficulty}
                    </span>
                  </>
                )}
                {article.headings.length > 0 && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span>{article.headings.length} sekcji</span>
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
          <h3 className="font-semibold text-gray-900 mb-2">💡 Nie znalazłeś tego czego szukasz?</h3>
          <p className="text-sm text-gray-700 mb-4">
            Użyj wyszukiwarki u góry strony lub przejdź do sekcji rozwiązywania problemów.
          </p>
          <Link
            to="/troubleshooting"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Przejdź do rozwiązywania problemów →
          </Link>
        </div>
      )}
    </div>
  );
}
