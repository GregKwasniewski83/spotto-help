import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { colors, fonts } from '@/lib/theme';
import spottoLogo from '../../assets/spotto-logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const linkStyle: React.CSSProperties = {
    color: '#cbd2e0',
    transition: 'color 0.15s',
  };
  const linkHover = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = '#ffffff';
  };
  const linkLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = '#cbd2e0';
  };

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: colors.dark,
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        color: '#cbd2e0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3
              className="text-sm uppercase mb-4"
              style={{ color: '#ffffff', fontFamily: fonts.brand, fontWeight: 600, letterSpacing: '0.12em' }}
            >
              {t('footer.about')}
            </h3>
            <p className="text-sm" style={{ color: '#a5acbd' }}>
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm uppercase mb-4"
              style={{ color: '#ffffff', fontFamily: fonts.brand, fontWeight: 600, letterSpacing: '0.12em' }}
            >
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/getting-started" className="text-sm" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
                  {t('sidebar.gettingStarted')}
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-sm" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
                  {t('sidebar.glossary')}
                </Link>
              </li>
              <li>
                <Link to="/troubleshooting" className="text-sm" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
                  {t('footer.troubleshooting')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm uppercase mb-4"
              style={{ color: '#ffffff', fontFamily: fonts.brand, fontWeight: 600, letterSpacing: '0.12em' }}
            >
              {t('footer.contact')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@spotto.pl"
                  className="flex items-center gap-2 text-sm"
                  style={linkStyle}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  <Mail size={16} />
                  support@spotto.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a
            href="https://spotto.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
            title="spotto.pl"
          >
            <img
              src={spottoLogo}
              alt="Spotto"
              className="h-6 w-6 rounded-full logo-glow object-cover"
            />
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: '0.875rem',
                fontWeight: 300,
                letterSpacing: '-0.025em',
                color: '#f0f4f7',
                lineHeight: 1,
              }}
            >
              Spotto
            </span>
          </a>
          <p className="text-sm text-center" style={{ color: '#7c8499' }}>
            &copy; {currentYear} — {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
