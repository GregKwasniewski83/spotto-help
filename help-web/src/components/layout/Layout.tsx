import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LanguageProvider, useLanguage } from '@/lib/i18n/LanguageContext';
import { setContentLanguage } from '@/lib/content/loader';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LanguageSync() {
  const { lang } = useLanguage();
  useEffect(() => {
    setContentLanguage(lang);
  }, [lang]);
  return null;
}

function LayoutInner() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <LanguageSync />
      <Header onMenuClick={toggleSidebar} isMobileMenuOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function Layout() {
  return (
    <LanguageProvider>
      <LayoutInner />
    </LanguageProvider>
  );
}
