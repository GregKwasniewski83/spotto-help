/**
 * MobileSearchModal Component
 * Full-screen search modal for mobile devices
 */

import { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';

interface MobileSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSearchModal({ isOpen, onClose }: MobileSearchModalProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    query,
    setQuery,
    results,
    isSearching,
    hasResults,
    showResults,
    clearSearch
  } = useSearch({ maxResults: 10 });

  // Auto-focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    clearSearch();
    onClose();
  };

  const handleResultClick = (slug: string) => {
    navigate(`/article/${slug}`);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex flex-col bg-white animate-slide-up">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search size={20} className="text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj w pomocy..."
            className="flex-1 text-base outline-none"
            style={{ color: '#ffffff' }}
          />
          {query.length > 0 && (
            <button
              onClick={clearSearch}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X size={20} />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-3 py-1 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded transition-colors"
          >
            Anuluj
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {!showResults && (
            <div className="p-6 text-center text-gray-500">
              <Search size={48} className="mx-auto mb-3 text-gray-300" />
              <p>Zacznij pisać, aby wyszukać artykuły pomocy</p>
            </div>
          )}

          {showResults && (
            <div className="p-4">
              {isSearching && (
                <div className="text-center py-8 text-gray-500">
                  Szukam...
                </div>
              )}

              {!isSearching && !hasResults && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-2">
                    Brak wyników dla "<span className="font-semibold">{query}</span>"
                  </p>
                  <p className="text-sm text-gray-500">
                    Spróbuj użyć innych słów kluczowych
                  </p>
                </div>
              )}

              {!isSearching && hasResults && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Znaleziono {results.length} {results.length === 1 ? 'wynik' : 'wyników'}
                  </p>

                  {results.map((result, index) => {
                    const { item, score } = result;
                    const screenNames: Record<string, string> = {
                      home: 'Home',
                      reservations: 'Rezerwacje',
                      shop: 'Sklep',
                      business: 'Biznes',
                      trainer: 'Trener',
                      profile: 'Profil',
                      troubleshooting: 'Rozwiązywanie problemów'
                    };
                    const screenName = screenNames[item.screen] || item.screen;
                    const matchQuality = score ? Math.round((1 - score) * 100) : 100;

                    return (
                      <button
                        key={`${item.slug}-${index}`}
                        onClick={() => handleResultClick(item.slug)}
                        className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <h4 className="font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            {matchQuality}%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{screenName}</span>
                          {item.role && (
                            <>
                              <span className="text-gray-300">•</span>
                              <span>{item.role}</span>
                            </>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
