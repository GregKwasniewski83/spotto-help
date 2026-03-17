/**
 * TypeScript type definitions for help content
 */

export interface ArticleMetadata {
  screen: string;              // "home" | "reservations" | "shop" | "business" | "trainer" | "profile" | "troubleshooting"
  role?: string;               // "Player" | "Business Owner" | "Trainer" | "All"
  difficulty?: string;         // "Łatwa" | "Średnia" | "Zaawansowana"
  status?: string;             // "🔴" | "🟡" | "🟢"
  lastUpdated?: string;        // ISO date string
  prerequisites?: string[];    // List of prerequisite article slugs
  title?: string;              // Article title (can be overridden from H1)
}

export interface Heading {
  level: number;               // 1-6
  text: string;                // Heading text
  id: string;                  // Slug for anchor links
}

export interface Article {
  slug: string;                // "home/how-to-search-facilities"
  title: string;               // Article title
  screen: string;              // "home"
  content: string;             // Raw markdown content
  metadata: ArticleMetadata;   // Frontmatter data
  headings: Heading[];         // Table of contents
  excerpt?: string;            // First 200 characters (for search/previews)
}

export interface ScreenSection {
  screen: string;              // "home"
  displayName: string;         // "Home" or "Rezerwacje"
  articles: Article[];         // All articles for this screen
  subsections: {
    howTo: Article[];          // How-to guides
    features: Article[];       // Feature explanations
    troubleshooting: Article[]; // Troubleshooting articles
    faq?: Article;             // FAQ article (if exists)
  };
  coverageStats: {
    total: number;
    completed: number;
    inProgress: number;
    notStarted: number;
  };
}

export interface SearchItem {
  slug: string;
  title: string;
  screen: string;
  content: string;             // Plaintext, no markdown
  excerpt: string;             // First 200 chars
  metadata: ArticleMetadata;
}

export interface SearchResult {
  item: SearchItem;
  matches?: Array<{
    key: string;
    value: string;
    indices: Array<[number, number]>;
  }>;
  score?: number;
}

export type StatusType = '🔴' | '🟡' | '🟢';

export interface StatusConfig {
  emoji: StatusType;
  label: string;
  color: string;
}
