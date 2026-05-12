/**
 * DashboardPage
 * Displays documentation coverage and statistics
 */

import CoverageDashboard from '@/components/dashboard/CoverageDashboard';
import { BarChart3 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 size={32} className="text-primary-500" />
          <h1 className="text-4xl font-bold text-gray-900">
            {t('dashboard.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('dashboard.desc')}
        </p>
      </div>

      {/* Coverage Dashboard */}
      <CoverageDashboard />
    </div>
  );
}
