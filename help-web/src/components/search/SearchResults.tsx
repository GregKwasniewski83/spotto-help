import { SearchResult } from '@/lib/search/searchEngine';
import { FileText, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName } from '@/lib/i18n/translations';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  hasResults: boolean;
  isSearching: boolean;
  onResultClick: (slug: string) => void;
}

export default function SearchResults({
  results,
  query,
  hasResults,
  isSearching,
  onResultClick
}: SearchResultsProps) {
  const { lang, t } = useLanguage();

  if (isSearching) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
        <div className="p-4 text-center text-gray-500">
          {t('search.searching')}
        </div>
      </div>
    );
  }

  if (!hasResults) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
        <div className="p-6 text-center">
          <AlertCircle size={48} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-600 mb-2">
            {t('search.noResults')} "<span className="font-semibold">{query}</span>"
          </p>
          <p className="text-sm text-gray-500">
            {t('search.tryOther')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      <div className="p-2">
        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {t('search.found')} {results.length} {results.length === 1 ? t('search.result') : t('search.results')}
        </div>

        <ul className="space-y-1">
          {results.map((result, index) => {
            const { item, score } = result;
            const screenName = getScreenName(item.screen, lang);
            const matchQuality = score ? Math.round((1 - score) * 100) : 100;

            return (
              <li key={`${item.slug}-${index}`}>
                <button
                  onClick={() => onResultClick(item.slug)}
                  className="w-full text-left px-3 py-3 rounded-md hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <FileText
                      size={18}
                      className="text-gray-400 group-hover:text-primary-500 mt-0.5 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 truncate">
                          {highlightMatch(item.title, query)}
                        </h4>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {matchQuality}%
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                        {highlightMatch(item.excerpt, query)}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{screenName}</span>
                        {item.role && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span>{item.role}</span>
                          </>
                        )}
                        {item.difficulty && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span>{item.difficulty}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500 bg-gray-50">
        <span className="inline-flex items-center gap-1">
          {t('search.hint')}{' '}
          <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">
            ↑
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">
            ↓
          </kbd>
          {t('search.toNavigate')}
        </span>
      </div>
    </div>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) {
    return text;
  }

  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-yellow-200 font-semibold">
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
