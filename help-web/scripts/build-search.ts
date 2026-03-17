#!/usr/bin/env node
/**
 * Search Index Builder Script
 * Generates search index from content.json for Fuse.js
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

async function buildSearchIndex() {
  console.log('🔍 Building search index...\n');

  try {
    const contentPath = path.resolve(__dirname, '../src/data/content.json');
    const outputPath = path.resolve(__dirname, '../src/data/search-index.json');

    // Check if content.json exists
    if (!await fs.pathExists(contentPath)) {
      console.error(`❌ content.json not found: ${contentPath}`);
      console.log('📝 Run "npm run build:content" first');

      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeJSON(outputPath, {
        items: [],
        lastBuilt: new Date().toISOString(),
        error: 'content.json not found'
      }, { spaces: 2 });

      process.exit(1);
    }

    // Read content.json
    const contentData = await fs.readJSON(contentPath);
    const articles: Article[] = contentData.articles || [];

    console.log(`📄 Processing ${articles.length} articles for search...`);

    // Build search items
    const searchItems: SearchItem[] = articles.map(article => {
      // Strip markdown from content for better search results
      const plainContent = stripMarkdown(article.content);

      return {
        slug: article.slug,
        title: article.title,
        screen: article.screen,
        content: plainContent.substring(0, 1000), // Limit content length for search
        excerpt: article.excerpt || plainContent.substring(0, 200),
        role: article.metadata.role,
        difficulty: article.metadata.difficulty
      };
    });

    // Build output structure
    const output = {
      items: searchItems,
      stats: {
        totalItems: searchItems.length,
        lastBuilt: new Date().toISOString()
      }
    };

    // Write to output file
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeJSON(outputPath, output, { spaces: 2 });

    // Print summary
    console.log('\n📊 Search Index Summary:');
    console.log(`   Indexed items: ${searchItems.length}`);
    console.log(`   Output: ${outputPath}`);
    console.log('\n✅ Search index build complete!\n');

  } catch (error) {
    console.error('❌ Error building search index:', error);
    process.exit(1);
  }
}

buildSearchIndex();
