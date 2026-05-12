import { useState } from 'react';
import { Menu, BarChart3, Search, Home, ChevronRight, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import MobileSearchModal from '../search/MobileSearchModal';
import spottoLogo from '../../assets/spotto-logo.png';
import { getArticleBySlug } from '@/lib/content/loader';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName } from '@/lib/i18n/translations';

interface HeaderProps {
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

function Breadcrumbs() {
  const location = useLocation();
  const { lang, t } = useLanguage();
  const path = location.pathname;

  const crumbs: { label: string; to?: string }[] = [
    { label: t('breadcrumb.home'), to: '/' }
  ];

  // /screen/:screen
  const screenMatch = path.match(/^\/screen\/([^/]+)/);
  if (screenMatch) {
    const screen = screenMatch[1];
    crumbs.push({ label: getScreenName(screen, lang) });
  }

  // /article/...slug
  const articleMatch = path.match(/^\/article\/(.+)/);
  if (articleMatch) {
    const slug = articleMatch[1];
    const article = getArticleBySlug(slug, lang);
    if (article) {
      crumbs.push({
        label: getScreenName(article.screen, lang),
        to: `/screen/${article.screen}`
      });
      crumbs.push({ label: article.title });
    }
  }

  // /dashboard
  if (path === '/dashboard') {
    crumbs.push({ label: 'Dashboard' });
  }

  if (crumbs.length <= 1) return null;

  return (
    <div className="border-t border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center gap-1.5 py-2 text-sm overflow-x-auto scrollbar-hide">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
              {i > 0 && <ChevronRight size={14} className="text-gray-500 flex-shrink-0" />}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {i === 0 && <Home size={14} />}
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Header({ onMenuClick, isMobileMenuOpen }: HeaderProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === 'pl' ? 'en' : 'pl');
  };

  return (
    <header className="bg-[#23262B] sticky top-0 z-50">
      {/* Top row: Logo, Search, Dashboard */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo and mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
            >
              <Menu size={22} className="text-white" />
            </button>

            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <img src={spottoLogo} alt="Spotto" className="w-8 h-8 object-contain" />
                <div className="hidden sm:block">
                  <h1 className="font-bold text-white leading-tight" style={{ fontSize: '2rem' }}>{t('header.title')}</h1>
                  <p className="text-[11px] text-gray-400 leading-tight">{t('header.subtitle')}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Search, Language, Dashboard */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label={t('header.search')}
            >
              <Search size={20} className="text-white" />
            </button>

            <div className="flex-1 max-w-md">
              <SearchBar className="hidden md:block" />
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
              title={t('lang.switch')}
            >
              <Globe size={18} className="text-white" />
              <span className="text-white font-medium uppercase text-xs">{lang}</span>
            </button>

            <Link
              to="/dashboard"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
              title={t('header.dashboard')}
            >
              <BarChart3 size={16} />
              <span className="font-medium">Dashboard</span>
            </Link>

            <Link
              to="/dashboard"
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              title="Dashboard"
            >
              <BarChart3 size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumbs row */}
      <Breadcrumbs />

      {/* Mobile Search Modal */}
      <MobileSearchModal
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
    </header>
  );
}
