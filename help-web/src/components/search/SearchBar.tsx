import { useRef, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './SearchResults';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({ className = '', placeholder = 'Szukaj w pomocy...' }: SearchBarProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        // clearSearch();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Cmd+K or Ctrl+K to focus search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
      // Escape to clear search
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
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          aria-label="Wyszukaj dokumentację"
        />

        {/* Search Icon */}
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />

        {/* Loading or Clear Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {isSearching ? (
            <Loader2 size={18} className="text-gray-400 animate-spin" />
          ) : query.length > 0 ? (
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X size={18} />
            </button>
          ) : null}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <SearchResults
          results={results}
          query={query}
          hasResults={hasResults}
          isSearching={isSearching}
          onResultClick={handleResultClick}
        />
      )}

      {/* Keyboard Shortcut Hint */}
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
