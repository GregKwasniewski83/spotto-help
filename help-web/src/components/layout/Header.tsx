import { Menu, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';

interface HeaderProps {
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

export default function Header({ onMenuClick, isMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and mobile menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <Menu size={24} className="text-gray-700" />
            </button>

            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">Spotto Pomoc</h1>
                  <p className="text-xs text-gray-500">Centrum pomocy i dokumentacji</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Search and Dashboard */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="flex-1 max-w-md">
              <SearchBar className="hidden md:block" />
            </div>
            <Link
              to="/dashboard"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors"
              title="Panel pokrycia dokumentacji"
            >
              <BarChart3 size={18} />
              <span className="font-medium">Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
