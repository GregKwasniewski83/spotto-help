/**
 * Content Loader
 * Utilities for loading and accessing parsed markdown content
 */

import contentPl from '@/data/content-pl.json';
import contentEn from '@/data/content-en.json';
import type { Article } from '@/types/content';
import type { Language } from '@/lib/i18n/translations';

interface ContentData {
  articles: Article[];
  screens: Array<{
    screen: string;
    articleCount: number;
    statuses: {
      completed: number;
      inProgress: number;
      notStarted: number;
    };
  }>;
  stats: {
    totalArticles: number;
    totalScreens: number;
    lastBuilt: string;
  };
}

const contentMap: Record<Language, ContentData> = {
  pl: contentPl as ContentData,
  en: contentEn as ContentData,
};

// Module-level language state for non-React callers (e.g. breadcrumbs)
let currentLang: Language = 'pl';

export function setContentLanguage(lang: Language) {
  currentLang = lang;
}

function getContent(lang?: Language): ContentData {
  return contentMap[lang || currentLang];
}

/**
 * Get all articles
 */
export function getAllArticles(lang?: Language): Article[] {
  return getContent(lang).articles;
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string, lang?: Language): Article | undefined {
  return getContent(lang).articles.find(article => article.slug === slug);
}

/**
 * Get articles for a specific screen
 */
export function getArticlesByScreen(screen: string, lang?: Language): Article[] {
  return getContent(lang).articles.filter(article => article.screen === screen);
}

/**
 * Get screen summary
 */
export function getScreenSummary(screen: string, lang?: Language) {
  return getContent(lang).screens.find(s => s.screen === screen);
}

/**
 * Get all screens
 */
export function getAllScreens(lang?: Language) {
  return getContent(lang).screens;
}

/**
 * Get content stats
 */
export function getContentStats(lang?: Language) {
  return getContent(lang).stats;
}

/**
 * Search articles by title or content (simple search)
 */
export function searchArticles(query: string, lang?: Language): Article[] {
  const lowerQuery = query.toLowerCase();
  return getContent(lang).articles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
}
