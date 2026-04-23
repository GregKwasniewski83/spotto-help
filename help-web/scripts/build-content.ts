#!/usr/bin/env node
/**
 * Content Builder Script
 * Parses markdown files from ../docs/ and generates content.json
 */

import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface Article {
  slug: string;
  title: string;
  screen: string;
  content: string;
  metadata: {
    screen: string;
    role?: string;
    difficulty?: string;
    status?: string;
    lastUpdated?: string;
    prerequisites?: string[];
  };
  headings: Array<{ level: number; text: string; id: string }>;
  excerpt?: string;
}

/**
 * Extract headings from markdown content
 */
function extractHeadings(content: string): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9ąćęłńóśźż\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Extract title from markdown content (first H1)
 */
function extractTitle(content: string): string {
  const h1Match = content.match(/^#\s+(.+)$/m);
  return h1Match ? h1Match[1].trim() : 'Untitled';
}

/**
 * Generate excerpt from content (first 200 characters)
 */
function generateExcerpt(content: string): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/^#{1,6}\s+.+$/gm, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_~`]/g, '') // Remove emphasis markers
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  return plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
}

/**
 * Transform image paths in content
 */
function transformImagePaths(content: string): string {
  return content.replace(/\((?:\.\.\/)+assets\//g, '(/assets/');
}

/**
 * Determine screen from file path
 */
function getScreenFromPath(filePath: string): string {
  const parts = filePath.split('/');
  // First directory after docs/ is the screen name
  return parts[0] || 'common';
}

async function buildContentForLang(lang: string, docsDir: string, outputFile: string) {
  const docsPath = path.resolve(__dirname, `../../${docsDir}`);
  const outputPath = path.resolve(__dirname, `../src/data/${outputFile}`);

  try {
    // Check if docs directory exists
    if (!await fs.pathExists(docsPath)) {
      console.error(`❌ Docs directory not found: ${docsPath}`);
      console.log(`📝 Creating placeholder ${outputFile}`);

      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeJSON(outputPath, {
        articles: [],
        screens: [],
        lastBuilt: new Date().toISOString(),
        error: 'Docs directory not found'
      }, { spaces: 2 });

      return;
    }

    // Find all markdown files
    console.log(`📂 Scanning for markdown files in: ${docsPath}`);
    const files = await glob('**/*.md', { cwd: docsPath });
    console.log(`📄 Found ${files.length} markdown files\n`);

    const articles: Article[] = [];
    const screens = new Set<string>();

    // Excluded files (unpublished modules)
    const excludedFiles = ['home/features/community-wall.md'];

    // Process each markdown file
    for (const file of files) {
      if (excludedFiles.includes(file)) {
        console.log(`⏭ Skipped (excluded): ${file}`);
        continue;
      }
      const filePath = path.join(docsPath, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');

      try {
        // Parse frontmatter
        const { data, content } = matter(fileContent);

        // Generate slug (remove .md extension, normalize path)
        const slug = file
          .replace(/\.md$/i, '')
          .replace(/\\/g, '/')
          .replace(/\/README$/i, ''); // Remove /README from slug

        // Skip if it's just a directory README without useful content
        if (file.match(/\/README\.md$/i) && content.trim().length < 50) {
          console.log(`⏭️  Skipping directory index: ${file}`);
          continue;
        }

        // Extract title
        const title = data.title || extractTitle(content) || path.basename(file, '.md');

        // Determine screen
        const screen = data.screen || getScreenFromPath(file);
        screens.add(screen);

        // Extract headings
        const headings = extractHeadings(content);

        // Transform image paths
        const transformedContent = transformImagePaths(content);

        // Generate excerpt
        const excerpt = generateExcerpt(content);

        // Build article object
        const isIndex = /README\.md$/i.test(file);

        const article: Article = {
          slug,
          title,
          screen,
          content: transformedContent,
          isIndex,
          metadata: {
            screen,
            role: data.role,
            difficulty: data.difficulty,
            status: data.status,
            lastUpdated: data.lastUpdated || new Date().toISOString(),
            prerequisites: data.prerequisites || []
          },
          headings,
          excerpt
        };

        articles.push(article);
        console.log(`✓ Processed: ${file} → ${slug}`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }

    // Sort articles by slug
    articles.sort((a, b) => a.slug.localeCompare(b.slug));

    // Build screen summary
    const screenSummary = Array.from(screens).sort().map(screen => {
      const screenArticles = articles.filter(a => a.screen === screen);
      return {
        screen,
        articleCount: screenArticles.length,
        statuses: {
          completed: screenArticles.filter(a => a.metadata.status === '🟢').length,
          inProgress: screenArticles.filter(a => a.metadata.status === '🟡').length,
          notStarted: screenArticles.filter(a => a.metadata.status === '🔴').length,
        }
      };
    });

    // Build output structure
    const output = {
      articles,
      screens: screenSummary,
      stats: {
        totalArticles: articles.length,
        totalScreens: screens.size,
        lastBuilt: new Date().toISOString()
      }
    };

    // Write to output file
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeJSON(outputPath, output, { spaces: 2 });

    // Print summary
    console.log(`\n📊 Content Build Summary (${lang}):`)
    console.log(`   Articles: ${articles.length}`);
    console.log(`   Screens: ${screens.size}`);
    console.log(`   Output: ${outputPath}`);

  } catch (error) {
    console.error(`❌ Error building content (${lang}):`, error);
    process.exit(1);
  }
}

async function buildContent() {
  console.log('🔨 Building content from markdown files...\n');
  await buildContentForLang('pl', 'docs', 'content-pl.json');
  await buildContentForLang('en', 'docs-en', 'content-en.json');
  console.log('\n✅ Content build complete!\n');
}

buildContent();
