import { useEffect } from 'react';
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
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--spotto-background)' }}>
      <ScrollToTop />
      <LanguageSync />
      <Header />

      <div className="flex flex-1">
        {/* Sidebar — desktop only */}
        <div className="hidden lg:block">
          <Sidebar isOpen={false} onClose={() => {}} />
        </div>

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
