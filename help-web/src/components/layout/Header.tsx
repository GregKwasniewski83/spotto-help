import { useState } from 'react';
import { Menu, BarChart3, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import MobileSearchModal from '../search/MobileSearchModal';
import spottoLogo from '../../assets/spotto-logo.png';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { colors, fonts } from '@/lib/theme';

interface HeaderProps {
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

export default function Header({ onMenuClick, isMobileMenuOpen }: HeaderProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === 'pl' ? 'en' : 'pl');
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: colors.dark,
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Top row: Logo, Search, Dashboard */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Left: Logo + Spotto brand + Help Center label */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
            >
              <Menu size={22} className="text-white" />
            </button>

            {/* Brand mark — matches spotto.pl exactly */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src={spottoLogo}
                alt="Spotto"
                className="h-10 w-10 rounded-full logo-glow object-cover"
              />
              <span
                style={{
                  fontFamily: fonts.display,
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  letterSpacing: '-0.025em',
                  color: '#f0f4f7',
                  lineHeight: 1,
                }}
              >
                Spotto
              </span>
            </Link>

            {/* Help Center label — separate from brand mark */}
            <span
              className="hidden md:inline-flex items-center"
              aria-hidden="true"
              style={{
                color: 'rgba(255,255,255,0.18)',
                fontSize: '1.25rem',
                fontWeight: 200,
                margin: '0 2px',
              }}
            >
              /
            </span>
            <span
              className="hidden md:inline-flex truncate"
              style={{
                fontFamily: fonts.display,
                fontSize: '0.95rem',
                fontWeight: 400,
                color: '#9aa3b2',
                letterSpacing: '0.01em',
              }}
            >
              {t('header.helpCenter')}
            </span>
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

      {/* Mobile Search Modal */}
      <MobileSearchModal
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
    </header>
  );
}
