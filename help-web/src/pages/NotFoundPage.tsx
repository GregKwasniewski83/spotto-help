import { Link } from 'react-router-dom';
import { AlertCircle, Home, Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <AlertCircle size={64} className="mx-auto text-gray-400 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          {t('notFound.desc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Home size={20} />
            {t('notFound.backHome')}
          </Link>
          <Link
            to="/search"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search size={20} />
            {t('notFound.search')}
          </Link>
        </div>

        <div className="mt-12 text-left max-w-md mx-auto bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">{t('notFound.popular')}</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/screen/home" className="text-primary-600 hover:text-primary-700 hover:underline">
                {t('notFound.topic.search')}
              </Link>
            </li>
            <li>
              <Link to="/screen/reservations" className="text-primary-600 hover:text-primary-700 hover:underline">
                {t('notFound.topic.reservations')}
              </Link>
            </li>
            <li>
              <Link to="/troubleshooting" className="text-primary-600 hover:text-primary-700 hover:underline">
                {t('notFound.topic.troubleshooting')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
