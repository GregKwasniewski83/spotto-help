import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              O Spotto
            </h3>
            <p className="text-sm text-gray-600">
              Aplikacja mobilna do rezerwacji obiektów sportowych, treningów i zakupu karnetów.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Szybkie linki
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/getting-started" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Pierwsze kroki
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Słownik pojęć
                </Link>
              </li>
              <li>
                <Link to="/troubleshooting" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Rozwiązywanie problemów
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Kontakt i wsparcie
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@spotto.pl"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Mail size={16} />
                  support@spotto.pl
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GregKwasniewski83/spotto-help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Github size={16} />
                  Repozytorium dokumentacji
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Spotto. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
