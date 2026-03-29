import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, ShoppingBag, Briefcase, User, Settings, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

interface Screen {
  name: string;
  slug: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
}

const screens: Screen[] = [
  {
    name: 'Home',
    slug: 'home',
    icon: Home,
    description: 'Wyszukiwanie obiektów, kategorie, ulubione'
  },
  {
    name: 'Rezerwacje',
    slug: 'reservations',
    icon: Calendar,
    description: 'Historia rezerwacji, nadchodzące wydarzenia'
  },
  {
    name: 'Sklep',
    slug: 'shop',
    icon: ShoppingBag,
    description: 'Produkty, karnety, członkostwa'
  },
  {
    name: 'Biznes',
    slug: 'business',
    icon: Briefcase,
    description: 'Panel zarządzania firmą'
  },
  {
    name: 'Trener',
    slug: 'trainer',
    icon: User,
    description: 'Profil trenera i treningi'
  },
  {
    name: 'Profil',
    slug: 'profile',
    icon: Settings,
    description: 'Ustawienia konta'
  },
  {
    name: 'Rozwiązywanie problemów',
    slug: 'troubleshooting',
    icon: AlertCircle,
    description: 'Częste problemy i ich rozwiązania'
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

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
          'fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out overflow-y-auto',
          {
            'translate-x-0': isOpen,
            '-translate-x-full lg:translate-x-0': !isOpen,
          }
        )}
      >
        <nav className="p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Ekrany aplikacji
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
                    className={clsx(
                      'flex items-start gap-3 px-3 py-3 rounded-lg transition-colors group',
                      {
                        'bg-primary-50 text-primary-700': isActive,
                        'text-gray-700 hover:bg-gray-50': !isActive,
                      }
                    )}
                  >
                    <Icon
                      size={20}
                      className={clsx(
                        'mt-0.5 flex-shrink-0',
                        {
                          'text-primary-600': isActive,
                          'text-gray-500 group-hover:text-primary-500': !isActive,
                        }
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={clsx(
                        'font-medium text-sm',
                        {
                          'text-primary-700': isActive,
                          'text-gray-900': !isActive,
                        }
                      )}>
                        {screen.name}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {screen.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Dodatkowe zasoby
            </h2>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/getting-started"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Pierwsze kroki
                </Link>
              </li>
              <li>
                <Link
                  to="/glossary"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Słownik pojęć
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
