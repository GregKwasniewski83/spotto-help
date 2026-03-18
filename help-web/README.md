# Spotto Help Web Portal

Modern React-based web application serving as the public help portal for Spotto mobile app users.

## Features

- 📱 **Screen-based Navigation** - 7 main sections mirroring the mobile app structure
- 🔍 **Full-text Search** - Client-side fuzzy search with Fuse.js
- 📝 **Markdown Rendering** - Syntax highlighting, images, and interactive elements
- 📊 **Coverage Dashboard** - Track documentation completion and status
- 🎨 **Modern UI** - TailwindCSS 4 with custom Spotto theme
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- ⚡ **Fast Build** - Static site generation with Vite

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **TypeScript 5.6** - Type safety
- **TailwindCSS 4** - Utility-first styling
- **React Router v7** - Client-side routing
- **Fuse.js 7** - Fuzzy search
- **react-markdown 9** - Markdown rendering
- **gray-matter** - Frontmatter parsing

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Build content and start dev server
npm run dev

# Server runs on http://localhost:5173
```

### Building for Production

```bash
# Build content, search index, and production bundle
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
help-web/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Sidebar, Footer, Layout
│   │   ├── navigation/    # Breadcrumbs, TOC
│   │   ├── search/        # SearchBar, SearchResults, MobileSearchModal
│   │   ├── content/       # MarkdownRenderer
│   │   ├── common/        # LoadingSpinner, Skeleton, StatusBadge
│   │   └── dashboard/     # CoverageDashboard
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ScreenPage.tsx
│   │   ├── ArticlePage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── lib/
│   │   ├── content/       # loader.ts
│   │   └── search/        # searchEngine.ts
│   ├── hooks/             # useSearch
│   ├── types/             # TypeScript types
│   ├── data/              # Generated content.json and search-index.json
│   └── assets/styles/     # Global CSS
├── scripts/
│   ├── build-content.ts   # Parse markdown → JSON
│   └── build-search.ts    # Generate search index
├── public/                # Static assets (copied from ../assets/)
└── dist/                  # Production build output
```

## Content Pipeline

The application uses a build-time content pipeline:

1. **Markdown Parsing** (`build-content.ts`)
   - Reads all `../docs/**/*.md` files
   - Extracts frontmatter metadata
   - Transforms image paths
   - Generates slugs from file paths
   - Extracts headings for TOC
   - Outputs to `src/data/content.json`

2. **Search Indexing** (`build-search.ts`)
   - Reads `content.json`
   - Strips markdown syntax
   - Tokenizes content
   - Builds Fuse.js index structure
   - Outputs to `src/data/search-index.json`

3. **Asset Copying** (Vite plugin)
   - Copies `../assets/images/**` to `public/assets/images/`

## Markdown Frontmatter

Each markdown file should include frontmatter:

```yaml
---
title: "Article Title"
screen: "home"              # home | reservations | shop | business | trainer | profile | troubleshooting
role: "Player"              # Optional: Player | Business Owner | Trainer
difficulty: "Easy"          # Optional: Easy | Medium | Advanced
status: "🟢"                # Optional: 🔴 Not started | 🟡 In progress | 🟢 Completed
lastUpdated: "2024-12-20"
prerequisites: ["other-article-slug"]  # Optional
---

# Article Content

Your markdown content here...
```

## Search Features

- **Weighted Search** - Title (3x), Excerpt (2x), Screen (1.5x), Content (1x)
- **Fuzzy Matching** - Threshold: 0.3 (0 = exact, 1 = match anything)
- **Debounced Input** - 300ms delay for better performance
- **Min Query Length** - 2 characters
- **Keyboard Shortcuts** - `Cmd+K` (focus), `Escape` (clear)
- **Mobile Modal** - Full-screen search on mobile devices

## Deployment

### OVH Server (Production)

The app automatically deploys to your OVH server via FTP when pushing to `main` branch.

**Required GitHub Secrets:**
- `FTP_SERVER` - Your OVH server hostname
- `FTP_USERNAME` - FTP username
- `FTP_PASSWORD` - FTP password

**Deployment Location:** `/spotto-help/` on your server

**URL:** Configure your web server (nginx/apache) to serve from this directory

### Manual Deployment

```bash
# Build for production
npm run build

# Upload dist/ folder via FTP/SFTP to your server
scp -r help-web/dist/* user@server:/path/to/spotto-help/
```

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy-help-web.yml`):

- **Triggers**: Push/PR to `main` affecting `docs/`, `help-web/`, or `assets/`
- **Steps**:
  1. Install dependencies
  2. Build content and search index
  3. Build production bundle
  4. Upload artifacts (for review)
  5. Deploy to OVH server via FTP (on push to main)

## Performance

- **Bundle Size**: ~712KB (gzipped: ~217KB)
  - React vendor: 101KB (34KB gzipped)
  - Main bundle: 266KB (78KB gzipped)
  - Markdown: 346KB (106KB gzipped)
- **Code Splitting**: Automatic route-based chunks
- **Asset Caching**: 1 year for static assets
- **Search Index**: ~3 articles = ~10KB

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Full production build |
| `npm run build:content` | Parse markdown to JSON |
| `npm run build:search` | Generate search index |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## Troubleshooting

### Build Errors

**"Cannot find module '@/data/content.json'"**
- Run `npm run build:content` first

**"TypeScript errors in searchEngine.ts"**
- Check Fuse.js types are installed: `npm install --save-dev @types/fuse.js`

### Dev Server Issues

**Port 5173 already in use**
- Change port in `vite.config.ts`: `server: { port: 3001 }`

**Assets not loading**
- Check `../assets/images/` directory exists
- Verify Vite static copy plugin configuration

## Contributing

1. Create markdown files in `../docs/`
2. Add images to `../assets/images/`
3. Run `npm run dev` to preview
4. Build and test: `npm run build && npm run preview`
5. Commit and push to trigger CI/CD

## License

Proprietary - Spotto Space

## Support

For issues or questions:
- Check existing documentation in `../docs/`
- Contact: support@spotto.pl
# Test deployment
<!-- Deployment test: Wed Mar 18 14:52:54 CET 2026 -->
