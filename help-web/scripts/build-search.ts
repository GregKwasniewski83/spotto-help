#!/usr/bin/env node
/**
 * Search Index Builder Script
 * Generates search indexes from content-pl.json and content-en.json for Fuse.js
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface Article {
  slug: string;
  title: string;
  screen: string;
  content: string;
  excerpt: string;
  metadata: {
    screen: string;
    role?: string;
    difficulty?: string;
    status?: string;
  };
}

interface SearchItem {
  slug: string;
  title: string;
  screen: string;
  content: string;
  excerpt: string;
  role?: string;
  difficulty?: string;
}

/**
 * Strip markdown syntax from content for search
 */
function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/^#{1,6}\s+/gm, '') // Remove heading markers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/__(.+?)__/g, '$1') // Remove bold (alt)
    .replace(/_(.+?)_/g, '$1') // Remove italic (alt)
    .replace(/~~(.+?)~~/g, '$1') // Remove strikethrough
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\r?\n/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

async function buildSearchIndexForLang(lang: string, contentFile: string, outputFile: string) {
  const contentPath = path.resolve(__dirname, `../src/data/${contentFile}`);
  const outputPath = path.resolve(__dirname, `../src/data/${outputFile}`);

  if (!await fs.pathExists(contentPath)) {
    console.error(`❌ ${contentFile} not found: ${contentPath}`);
    console.log(`📝 Run "npm run build:content" first`);

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeJSON(outputPath, {
      items: [],
      stats: { totalItems: 0, lastBuilt: new Date().toISOString() },
      error: `${contentFile} not found`
    }, { spaces: 2 });

    return;
  }

  const contentData = await fs.readJSON(contentPath);
  const articles: Article[] = contentData.articles || [];

  console.log(`📄 Processing ${articles.length} articles for search (${lang})...`);

  const searchItems: SearchItem[] = articles.map(article => {
    const plainContent = stripMarkdown(article.content);

    return {
      slug: article.slug,
      title: article.title,
      screen: article.screen,
      content: plainContent.substring(0, 1000),
      excerpt: article.excerpt || plainContent.substring(0, 200),
      role: article.metadata.role,
      difficulty: article.metadata.difficulty
    };
  });

  const output = {
    items: searchItems,
    stats: {
      totalItems: searchItems.length,
      lastBuilt: new Date().toISOString()
    }
  };

  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeJSON(outputPath, output, { spaces: 2 });

  console.log(`   Indexed items (${lang}): ${searchItems.length}`);
  console.log(`   Output: ${outputPath}`);
}

async function buildSearchIndex() {
  console.log('🔍 Building search indexes...\n');

  try {
    await buildSearchIndexForLang('pl', 'content-pl.json', 'search-index-pl.json');
    await buildSearchIndexForLang('en', 'content-en.json', 'search-index-en.json');

    console.log('\n✅ Search index build complete!\n');
  } catch (error) {
    console.error('❌ Error building search index:', error);
    process.exit(1);
  }
}

buildSearchIndex();
