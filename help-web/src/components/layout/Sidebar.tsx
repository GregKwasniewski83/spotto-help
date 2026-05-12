import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, ShoppingBag, Briefcase, User, Settings, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getScreenName, getScreenDescription } from '@/lib/i18n/translations';
import { colors } from '@/lib/theme';

interface Screen {
  slug: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const screens: Screen[] = [
  { slug: 'home', icon: Home },
  { slug: 'reservations', icon: Calendar },
  { slug: 'shop', icon: ShoppingBag },
  { slug: 'business', icon: Briefcase },
  { slug: 'trainer', icon: User },
  { slug: 'profile', icon: Settings },
  { slug: 'troubleshooting', icon: AlertCircle },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { lang, t } = useLanguage();

  const isScreenActive = (slug: string) => {
    return location.pathname.includes(`/screen/${slug}`) || location.pathname.includes(`/${slug}`);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed lg:sticky left-0 w-64 z-40 transition-transform duration-300 ease-in-out overflow-y-auto',
          'top-[72px] h-[calc(100vh-72px)]',
          {
            'translate-x-0': isOpen,
            '-translate-x-full lg:translate-x-0': !isOpen,
          }
        )}
        style={{
          backgroundColor: colors.card,
          borderRight: `1px solid ${colors.border}`,
        }}
      >
        <nav className="p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: colors.textSecondary }}>
            {t('sidebar.screens')}
          </h2>
          <ul className="space-y-1">
            {screens.map((screen) => {
              const Icon = screen.icon;
              const isActive = isScreenActive(screen.slug);

              return (
                <li key={screen.slug}>
                  <Link
                    to={`/screen/${screen.slug}`}
                    onClick={() => onClose()}
                    className="flex items-start gap-3 px-3 py-3 rounded-lg transition-colors group"
                    style={{
                      backgroundColor: isActive ? 'rgba(77, 99, 172, 0.10)' : 'transparent',
                      color: isActive ? colors.primary : colors.textPrimary,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(77, 99, 172, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon
                      size={20}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: isActive ? colors.primary : colors.textSecondary }}
                    />
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-medium text-sm"
                        style={{ color: isActive ? colors.primary : colors.textPrimary }}
                      >
                        {getScreenName(screen.slug, lang)}
                      </div>
                      <p className="text-xs mt-0.5 line-clamp-2" style={{ color: colors.textSecondary, opacity: 0.75 }}>
                        {getScreenDescription(screen.slug, lang)}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${colors.border}` }}>
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: colors.textSecondary }}>
              {t('sidebar.resources')}
            </h2>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/getting-started"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm"
                  style={{ color: colors.textPrimary }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(77, 99, 172, 0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {t('sidebar.gettingStarted')}
                </Link>
              </li>
              <li>
                <Link
                  to="/glossary"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm"
                  style={{ color: colors.textPrimary }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(77, 99, 172, 0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {t('sidebar.glossary')}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
