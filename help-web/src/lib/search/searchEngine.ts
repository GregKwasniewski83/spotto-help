/**
 * Search Engine using Fuse.js
 * Provides fuzzy search across all documentation content
 */

import Fuse, { IFuseOptions, FuseResultMatch } from 'fuse.js';
import searchIndex from '@/data/search-index.json';

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
    { name: 'title', weight: 3 },      // Title is most important
    { name: 'excerpt', weight: 2 },     // Excerpt is second
    { name: 'content', weight: 1 },     // Full content is third
    { name: 'screen', weight: 1.5 },    // Screen name is important
  ],
  threshold: 0.3,                       // 0.0 = perfect match, 1.0 = match anything
  includeScore: true,                   // Include match score
  includeMatches: true,                 // Include match positions for highlighting
  minMatchCharLength: 2,                // Minimum characters to match
  ignoreLocation: true,                 // Search entire string
  useExtendedSearch: false,             // Don't use special search syntax
};

class SearchEngine {
  private fuse: Fuse<SearchItem>;
  private items: SearchItem[];

  constructor() {
    const data = searchIndex as SearchIndexData;
    this.items = data.items;
    this.fuse = new Fuse(this.items, fuseOptions);
  }

  /**
   * Search for articles
   */
  search(query: string, maxResults: number = 10): SearchResult[] {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const results = this.fuse.search(query, { limit: maxResults });
    return results as SearchResult[];
  }

  /**
   * Get all items (for displaying recent or popular)
   */
  getAllItems(): SearchItem[] {
    return this.items;
  }

  /**
   * Search by screen
   */
  searchByScreen(screen: string): SearchItem[] {
    return this.items.filter(item => item.screen === screen);
  }

  /**
   * Get stats
   */
  getStats() {
    return {
      totalItems: this.items.length,
      lastBuilt: (searchIndex as SearchIndexData).stats.lastBuilt
    };
  }
}

// Export singleton instance
export const searchEngine = new SearchEngine();
