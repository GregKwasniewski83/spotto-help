import { Link } from 'react-router-dom';
import { Search, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { colors, fonts, shadows } from '@/lib/theme';

export default function HomePage() {
  const { t } = useLanguage();

  const cardStyle: React.CSSProperties = {
    backgroundColor: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '24px',
    transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.15s',
    display: 'block',
  };

  const onCardEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = colors.primary;
    e.currentTarget.style.boxShadow = shadows.card;
  };
  const onCardLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = colors.border;
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1
          className="mb-4"
          style={{
            fontFamily: fonts.brand,
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
            color: colors.dark,
            letterSpacing: '-0.01em',
          }}
        >
          {t('home.welcome')}
        </h1>
        <p
          className="max-w-3xl mx-auto"
          style={{
            fontFamily: fonts.body,
            fontSize: '1.125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
          }}
        >
          {t('home.welcomeDesc')}
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative">
          <input
            type="text"
            placeholder={t('home.searchPlaceholder')}
            className="w-full px-6 py-4 text-lg focus:outline-none"
            style={{
              border: `2px solid ${colors.border}`,
              borderRadius: '12px',
              backgroundColor: colors.card,
              color: colors.textPrimary,
              boxShadow: '0 1px 2px rgba(35,38,43,0.04)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.boxShadow = `0 0 0 3px rgba(77, 99, 172, 0.15)`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(35,38,43,0.04)';
            }}
          />
          <Search size={24} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: colors.textSecondary, opacity: 0.6 }} />
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link to="/getting-started" style={cardStyle} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
          <BookOpen size={32} style={{ color: colors.primary, marginBottom: '16px' }} />
          <h3
            className="mb-2"
            style={{ fontFamily: fonts.brand, fontWeight: 600, fontSize: '1.125rem', color: colors.dark }}
          >
            {t('home.gettingStarted')}
          </h3>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {t('home.gettingStartedDesc')}
          </p>
        </Link>

        <Link to="/screen/home" style={cardStyle} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
          <Search size={32} style={{ color: colors.primary, marginBottom: '16px' }} />
          <h3
            className="mb-2"
            style={{ fontFamily: fonts.brand, fontWeight: 600, fontSize: '1.125rem', color: colors.dark }}
          >
            {t('home.searchFacilities')}
          </h3>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {t('home.searchFacilitiesDesc')}
          </p>
        </Link>

        <Link to="/troubleshooting" style={cardStyle} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
          <AlertCircle size={32} style={{ color: colors.accent, marginBottom: '16px' }} />
          <h3
            className="mb-2"
            style={{ fontFamily: fonts.brand, fontWeight: 600, fontSize: '1.125rem', color: colors.dark }}
          >
            {t('home.troubleshooting')}
          </h3>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {t('home.troubleshootingDesc')}
          </p>
        </Link>
      </div>

      {/* Popular Topics */}
      <div
        className="mb-8 p-6"
        style={{
          backgroundColor: colors.card,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={24} style={{ color: colors.primary }} />
          <h2 style={{ fontFamily: fonts.brand, fontWeight: 600, fontSize: '1.25rem', color: colors.dark }}>
            {t('home.popularTopics')}
          </h2>
        </div>
        <ul className="space-y-3">
          <li>
            <Link
              to="/screen/reservations"
              style={{ color: colors.primary, textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
            >
              {t('home.topic.cancel')}
            </Link>
          </li>
          <li>
            <Link
              to="/screen/shop"
              style={{ color: colors.primary, textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
            >
              {t('home.topic.pass')}
            </Link>
          </li>
          <li>
            <Link
              to="/screen/business"
              style={{ color: colors.primary, textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
            >
              {t('home.topic.tpay')}
            </Link>
          </li>
          <li>
            <Link
              to="/screen/trainer"
              style={{ color: colors.primary, textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
            >
              {t('home.topic.training')}
            </Link>
          </li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6" style={{ backgroundColor: 'rgba(77,99,172,0.08)', borderRadius: '12px' }}>
          <div style={{ fontFamily: fonts.brand, fontWeight: 700, fontSize: '2rem', color: colors.primary, marginBottom: '4px' }}>7</div>
          <div className="text-sm" style={{ color: colors.textSecondary }}>{t('home.stats.screens')}</div>
        </div>
        <div className="p-6" style={{ backgroundColor: 'rgba(255,86,34,0.08)', borderRadius: '12px' }}>
          <div style={{ fontFamily: fonts.brand, fontWeight: 700, fontSize: '2rem', color: colors.accent, marginBottom: '4px' }}>50+</div>
          <div className="text-sm" style={{ color: colors.textSecondary }}>{t('home.stats.guides')}</div>
        </div>
        <div className="p-6" style={{ backgroundColor: 'rgba(95,167,138,0.10)', borderRadius: '12px' }}>
          <div style={{ fontFamily: fonts.brand, fontWeight: 700, fontSize: '2rem', color: colors.bookButton, marginBottom: '4px' }}>100%</div>
          <div className="text-sm" style={{ color: colors.textSecondary }}>{t('home.stats.free')}</div>
        </div>
      </div>
    </div>
  );
}
