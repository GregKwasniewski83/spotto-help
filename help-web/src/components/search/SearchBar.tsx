import { useRef, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './SearchResults';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const {
    query,
    setQuery,
    results,
    isSearching,
    hasResults,
    showResults,
    clearSearch
  } = useSearch({ maxResults: 8 });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Optionally clear search when clicking outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === 'Escape') {
        clearSearch();
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [clearSearch]);

  const handleResultClick = (slug: string) => {
    navigate(`/article/${slug}`);
    clearSearch();
    inputRef.current?.blur();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full pl-10 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          style={{ backgroundColor: '#f3f4f6', color: '#1f2937', border: '1px solid #d1d5db' }}
          aria-label={t('search.ariaLabel')}
        />

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {isSearching ? (
            <Loader2 size={18} className="text-gray-400 animate-spin" />
          ) : query.length > 0 ? (
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={t('search.clear')}
            >
              <X size={18} />
            </button>
          ) : null}
        </div>
      </div>

      {showResults && (
        <SearchResults
          results={results}
          query={query}
          hasResults={hasResults}
          isSearching={isSearching}
          onResultClick={handleResultClick}
        />
      )}

      {!query && (
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none">
          <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded">
            ⌘K
          </kbd>
        </div>
      )}
    </div>
  );
}
