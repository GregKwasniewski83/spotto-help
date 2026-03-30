/**
 * useSearch Hook
 * Manages search state and debouncing
 */

import { useState, useEffect, useMemo } from 'react';
import { searchEngine, SearchResult } from '@/lib/search/searchEngine';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface UseSearchOptions {
  debounceMs?: number;
  maxResults?: number;
  minQueryLength?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const {
    debounceMs = 300,
    maxResults = 10,
    minQueryLength = 2
  } = options;

  const { lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, debounceMs]);

  // Perform search when debounced query or language changes
  useEffect(() => {
    if (debouncedQuery.length < minQueryLength) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const searchResults = searchEngine.search(debouncedQuery, maxResults, lang);
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [debouncedQuery, maxResults, minQueryLength, lang]);

  const hasResults = results.length > 0;
  const showResults = query.length >= minQueryLength;

  return useMemo(
    () => ({
      query,
      setQuery,
      results,
      isSearching,
      hasResults,
      showResults,
      clearSearch: () => {
        setQuery('');
        setResults([]);
      }
    }),
    [query, results, isSearching, hasResults, showResults]
  );
}
