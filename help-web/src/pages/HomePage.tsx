import { Link } from 'react-router-dom';
import { Search, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('home.welcome')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('home.welcomeDesc')}
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative">
          <input
            type="text"
            placeholder={t('home.searchPlaceholder')}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            style={{ color: '#ffffff' }}
          />
          <Search size={24} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link
          to="/getting-started"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
        >
          <BookOpen size={32} className="text-primary-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.gettingStarted')}</h3>
          <p className="text-gray-600 text-sm">
            {t('home.gettingStartedDesc')}
          </p>
        </Link>

        <Link
          to="/screen/home"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
        >
          <Search size={32} className="text-primary-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.searchFacilities')}</h3>
          <p className="text-gray-600 text-sm">
            {t('home.searchFacilitiesDesc')}
          </p>
        </Link>

        <Link
          to="/troubleshooting"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
        >
          <AlertCircle size={32} className="text-accent-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.troubleshooting')}</h3>
          <p className="text-gray-600 text-sm">
            {t('home.troubleshootingDesc')}
          </p>
        </Link>
      </div>

      {/* Popular Topics */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={24} className="text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">{t('home.popularTopics')}</h2>
        </div>
        <ul className="space-y-3">
          <li>
            <Link to="/screen/reservations" className="text-primary-600 hover:text-primary-700 hover:underline">
              {t('home.topic.cancel')}
            </Link>
          </li>
          <li>
            <Link to="/screen/shop" className="text-primary-600 hover:text-primary-700 hover:underline">
              {t('home.topic.pass')}
            </Link>
          </li>
          <li>
            <Link to="/screen/business" className="text-primary-600 hover:text-primary-700 hover:underline">
              {t('home.topic.tpay')}
            </Link>
          </li>
          <li>
            <Link to="/screen/trainer" className="text-primary-600 hover:text-primary-700 hover:underline">
              {t('home.topic.training')}
            </Link>
          </li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-primary-50 rounded-lg">
          <div className="text-3xl font-bold text-primary-700 mb-1">7</div>
          <div className="text-sm text-gray-600">{t('home.stats.screens')}</div>
        </div>
        <div className="p-6 bg-accent-50 rounded-lg">
          <div className="text-3xl font-bold text-accent-700 mb-1">50+</div>
          <div className="text-sm text-gray-600">{t('home.stats.guides')}</div>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-700 mb-1">100%</div>
          <div className="text-sm text-gray-600">{t('home.stats.free')}</div>
        </div>
      </div>
    </div>
  );
}
