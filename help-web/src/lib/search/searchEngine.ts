/**
 * Search Engine using Fuse.js
 * Provides fuzzy search across all documentation content
 */

import Fuse, { IFuseOptions, FuseResultMatch } from 'fuse.js';
import searchIndexPl from '@/data/search-index-pl.json';
import searchIndexEn from '@/data/search-index-en.json';
import type { Language } from '@/lib/i18n/translations';

interface SearchItem {
  slug: string;
  title: string;
  screen: string;
  content: string;
  excerpt: string;
  role?: string;
  difficulty?: string;
}

interface SearchIndexData {
  items: SearchItem[];
  stats: {
    totalItems: number;
    lastBuilt: string;
  };
}

export interface SearchResult {
  item: SearchItem;
  matches?: FuseResultMatch[];
  score?: number;
  refIndex: number;
}

// Fuse.js configuration
const fuseOptions: IFuseOptions<SearchItem> = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'excerpt', weight: 2 },
    { name: 'content', weight: 1 },
    { name: 'screen', weight: 1.5 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
  useExtendedSearch: false,
};

const indexMap: Record<Language, SearchIndexData> = {
  pl: searchIndexPl as SearchIndexData,
  en: searchIndexEn as SearchIndexData,
};

class SearchEngine {
  private fuseInstances: Record<Language, Fuse<SearchItem>>;

  constructor() {
    this.fuseInstances = {
      pl: new Fuse(indexMap.pl.items, fuseOptions),
      en: new Fuse(indexMap.en.items, fuseOptions),
    };
  }

  search(query: string, maxResults: number = 10, lang: Language = 'pl'): SearchResult[] {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const fuse = this.fuseInstances[lang];
    const results = fuse.search(query, { limit: maxResults });
    return results as SearchResult[];
  }

  getAllItems(lang: Language = 'pl'): SearchItem[] {
    return indexMap[lang].items;
  }

  searchByScreen(screen: string, lang: Language = 'pl'): SearchItem[] {
    return indexMap[lang].items.filter(item => item.screen === screen);
  }

  getStats(lang: Language = 'pl') {
    return {
      totalItems: indexMap[lang].items.length,
      lastBuilt: indexMap[lang].stats.lastBuilt
    };
  }
}

export const searchEngine = new SearchEngine();
