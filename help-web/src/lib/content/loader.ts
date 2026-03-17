/**
 * Content Loader
 * Utilities for loading and accessing parsed markdown content
 */

import contentData from '@/data/content.json';
import type { Article } from '@/types/content';

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

// Type assertion for imported JSON
const content = contentData as ContentData;

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
  return content.articles;
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return content.articles.find(article => article.slug === slug);
}

/**
 * Get articles for a specific screen
 */
export function getArticlesByScreen(screen: string): Article[] {
  return content.articles.filter(article => article.screen === screen);
}

/**
 * Get screen summary
 */
export function getScreenSummary(screen: string) {
  return content.screens.find(s => s.screen === screen);
}

/**
 * Get all screens
 */
export function getAllScreens() {
  return content.screens;
}

/**
 * Get content stats
 */
export function getContentStats() {
  return content.stats;
}

/**
 * Search articles by title or content (simple search)
 */
export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return content.articles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
}
