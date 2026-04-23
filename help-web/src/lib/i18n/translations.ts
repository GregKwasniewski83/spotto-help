export type Language = 'pl' | 'en';

export const translations = {
  // Header
  'header.title': { pl: 'Spotto Pomoc', en: 'Spotto Help' },
  'header.subtitle': { pl: 'Centrum pomocy i dokumentacji', en: 'Help & Documentation Center' },
  'header.search': { pl: 'Szukaj', en: 'Search' },
  'header.openMenu': { pl: 'Otwórz menu', en: 'Open menu' },
  'header.closeMenu': { pl: 'Zamknij menu', en: 'Close menu' },
  'header.dashboard': { pl: 'Panel pokrycia dokumentacji', en: 'Documentation coverage panel' },
  'breadcrumb.home': { pl: 'Start', en: 'Home' },

  // Screen names
  'screen.home': { pl: 'Home', en: 'Home' },
  'screen.reservations': { pl: 'Rezerwacje', en: 'Reservations' },
  'screen.shop': { pl: 'Sklep', en: 'Shop' },
  'screen.business': { pl: 'Biznes', en: 'Business' },
  'screen.trainer': { pl: 'Trener', en: 'Trainer' },
  'screen.profile': { pl: 'Profil', en: 'Profile' },
  'screen.troubleshooting': { pl: 'Rozwiązywanie problemów', en: 'Troubleshooting' },

  // Screen descriptions (Sidebar)
  'screenDesc.home': { pl: 'Wyszukiwanie obiektów, kategorie, ulubione', en: 'Facility search, categories, favourites' },
  'screenDesc.reservations': { pl: 'Historia rezerwacji, nadchodzące wydarzenia', en: 'Booking history, upcoming events' },
  'screenDesc.shop': { pl: 'Produkty, karnety, członkostwa', en: 'Products, passes, memberships' },
  'screenDesc.business': { pl: 'Panel zarządzania firmą', en: 'Business management panel' },
  'screenDesc.trainer': { pl: 'Profil trenera i treningi', en: 'Trainer profile and training sessions' },
  'screenDesc.profile': { pl: 'Ustawienia konta', en: 'Account settings' },
  'screenDesc.troubleshooting': { pl: 'Częste problemy i ich rozwiązania', en: 'Common problems and solutions' },

  // Sidebar
  'sidebar.screens': { pl: 'Ekrany aplikacji', en: 'App Screens' },
  'sidebar.resources': { pl: 'Dodatkowe zasoby', en: 'Additional Resources' },
  'sidebar.gettingStarted': { pl: 'Pierwsze kroki', en: 'Getting Started' },
  'sidebar.glossary': { pl: 'Słownik pojęć', en: 'Glossary' },

  // Footer
  'footer.about': { pl: 'O Spotto', en: 'About Spotto' },
  'footer.aboutText': {
    pl: 'Aplikacja mobilna do rezerwacji obiektów sportowych, treningów i zakupu karnetów.',
    en: 'Mobile app for booking sports facilities, training sessions, and purchasing passes.'
  },
  'footer.quickLinks': { pl: 'Szybkie linki', en: 'Quick Links' },
  'footer.troubleshooting': { pl: 'Rozwiązywanie problemów', en: 'Troubleshooting' },
  'footer.contact': { pl: 'Kontakt i wsparcie', en: 'Contact & Support' },
  'footer.docsRepo': { pl: 'Repozytorium dokumentacji', en: 'Documentation repository' },
  'footer.copyright': { pl: 'Spotto. Wszelkie prawa zastrzeżone.', en: 'Spotto. All rights reserved.' },

  // Search
  'search.placeholder': { pl: 'Szukaj w pomocy...', en: 'Search help...' },
  'search.ariaLabel': { pl: 'Wyszukaj dokumentację', en: 'Search documentation' },
  'search.clear': { pl: 'Wyczyść wyszukiwanie', en: 'Clear search' },
  'search.searching': { pl: 'Szukam...', en: 'Searching...' },
  'search.noResults': { pl: 'Brak wyników dla', en: 'No results for' },
  'search.tryOther': { pl: 'Spróbuj użyć innych słów kluczowych lub przejrzyj ekrany aplikacji.', en: 'Try different keywords or browse the app screens.' },
  'search.tryOtherShort': { pl: 'Spróbuj użyć innych słów kluczowych', en: 'Try different keywords' },
  'search.found': { pl: 'Znaleziono', en: 'Found' },
  'search.result': { pl: 'wynik', en: 'result' },
  'search.results': { pl: 'wyników', en: 'results' },
  'search.hint': { pl: 'Wskazówka: Użyj', en: 'Tip: Use' },
  'search.toNavigate': { pl: 'do nawigacji', en: 'to navigate' },
  'search.startTyping': { pl: 'Zacznij pisać, aby wyszukać artykuły pomocy', en: 'Start typing to search help articles' },
  'search.cancel': { pl: 'Anuluj', en: 'Cancel' },

  // Home page
  'home.welcome': { pl: 'Witamy w Centrum Pomocy Spotto', en: 'Welcome to Spotto Help Center' },
  'home.welcomeDesc': {
    pl: 'Znajdź odpowiedzi na pytania dotyczące korzystania z aplikacji Spotto, rezerwacji obiektów sportowych i zarządzania treningami.',
    en: 'Find answers to questions about using the Spotto app, booking sports facilities, and managing training sessions.'
  },
  'home.searchPlaceholder': { pl: 'Czego szukasz?', en: 'What are you looking for?' },
  'home.gettingStarted': { pl: 'Pierwsze kroki', en: 'Getting Started' },
  'home.gettingStartedDesc': {
    pl: 'Dowiedz się, jak rozpocząć korzystanie z aplikacji Spotto',
    en: 'Learn how to get started with the Spotto app'
  },
  'home.searchFacilities': { pl: 'Wyszukiwanie obiektów', en: 'Search Facilities' },
  'home.searchFacilitiesDesc': {
    pl: 'Jak szukać i rezerwować obiekty sportowe',
    en: 'How to search for and book sports facilities'
  },
  'home.troubleshooting': { pl: 'Rozwiązywanie problemów', en: 'Troubleshooting' },
  'home.troubleshootingDesc': {
    pl: 'Pomoc w rozwiązywaniu typowych problemów',
    en: 'Help with solving common problems'
  },
  'home.popularTopics': { pl: 'Popularne tematy', en: 'Popular Topics' },
  'home.topic.cancel': { pl: 'Jak anulować rezerwację?', en: 'How to cancel a booking?' },
  'home.topic.pass': { pl: 'Jak kupić karnet?', en: 'How to buy a pass?' },
  'home.topic.tpay': { pl: 'Jak skonfigurować płatności TPay?', en: 'How to set up TPay payments?' },
  'home.topic.training': { pl: 'Jak utworzyć trening jako trener?', en: 'How to create training as a trainer?' },
  'home.stats.screens': { pl: 'Głównych ekranów', en: 'Main Screens' },
  'home.stats.guides': { pl: 'Poradników', en: 'Guides' },
  'home.stats.free': { pl: 'Darmowe', en: 'Free' },

  // Screen page
  'screenPage.invalidScreen': { pl: 'Nieprawidłowy ekran', en: 'Invalid screen' },
  'screenPage.article': { pl: 'artykuł', en: 'article' },
  'screenPage.articles': { pl: 'artykuły', en: 'articles' },
  'screenPage.noDocs': { pl: 'Brak dokumentacji', en: 'No documentation' },
  'screenPage.docsInProgress': {
    pl: 'Dokumentacja dla ekranu "{screen}" jest w trakcie tworzenia.',
    en: 'Documentation for the "{screen}" screen is being created.'
  },
  'screenPage.underConstruction': { pl: 'Sekcja w budowie', en: 'Section under construction' },
  'screenPage.underConstructionDesc': {
    pl: 'Ta sekcja zostanie wkrótce wypełniona treścią. W międzyczasie możesz sprawdzić inne ekrany aplikacji lub wrócić do strony głównej.',
    en: 'This section will be filled with content soon. In the meantime, you can check other app screens or return to the home page.'
  },
  'screenPage.role': { pl: 'Rola:', en: 'Role:' },
  'screenPage.level': { pl: 'Poziom:', en: 'Level:' },
  'screenPage.sections': { pl: 'sekcji', en: 'sections' },
  'screenPage.notFound': { pl: 'Nie znalazłeś tego czego szukasz?', en: "Didn't find what you're looking for?" },
  'screenPage.notFoundDesc': {
    pl: 'Użyj wyszukiwarki u góry strony lub przejdź do sekcji rozwiązywania problemów.',
    en: 'Use the search bar at the top of the page or go to the troubleshooting section.'
  },
  'screenPage.goToTroubleshooting': { pl: 'Przejdź do rozwiązywania problemów →', en: 'Go to troubleshooting →' },

  // Article page
  'article.notFound': { pl: 'Artykuł nie znaleziony', en: 'Article not found' },
  'article.notFoundDesc': { pl: 'Artykuł o adresie "{slug}" nie istnieje.', en: 'The article at "{slug}" does not exist.' },
  'article.backHome': { pl: 'Wróć na stronę główną', en: 'Back to home page' },
  'article.role': { pl: 'Rola:', en: 'Role:' },
  'article.level': { pl: 'Poziom:', en: 'Level:' },
  'article.updated': { pl: 'Aktualizacja:', en: 'Updated:' },
  'article.prerequisites': { pl: 'Wymagania wstępne', en: 'Prerequisites' },
  'article.toc': { pl: 'Spis treści', en: 'Table of Contents' },
  'article.backTo': { pl: 'Wróć do', en: 'Back to' },
  'article.lastUpdated': { pl: 'Ostatnia aktualizacja:', en: 'Last updated:' },

  // 404 page
  'notFound.title': { pl: 'Nie znaleziono strony', en: 'Page not found' },
  'notFound.desc': {
    pl: 'Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.',
    en: 'Sorry, the page you are looking for does not exist or has been moved.'
  },
  'notFound.backHome': { pl: 'Wróć na stronę główną', en: 'Back to home page' },
  'notFound.search': { pl: 'Przeszukaj pomoc', en: 'Search help' },
  'notFound.popular': { pl: 'Popularne tematy:', en: 'Popular topics:' },
  'notFound.topic.search': { pl: 'Jak wyszukiwać obiekty sportowe?', en: 'How to search for sports facilities?' },
  'notFound.topic.reservations': { pl: 'Zarządzanie rezerwacjami', en: 'Managing reservations' },
  'notFound.topic.troubleshooting': { pl: 'Rozwiązywanie problemów', en: 'Troubleshooting' },

  // Dashboard
  'dashboard.title': { pl: 'Panel Pokrycia Dokumentacji', en: 'Documentation Coverage Panel' },
  'dashboard.desc': { pl: 'Śledź postęp i kompletność dokumentacji pomocy Spotto', en: 'Track the progress and completeness of Spotto help documentation' },
  'dashboard.totalArticles': { pl: 'Łącznie artykułów', en: 'Total Articles' },
  'dashboard.totalScreens': { pl: 'Ekranów', en: 'Screens' },
  'dashboard.withImages': { pl: 'Ze zdjęciami', en: 'With Images' },
  'dashboard.ofAll': { pl: 'wszystkich', en: 'of all' },
  'dashboard.coverageByScreen': { pl: 'Pokrycie według ekranów', en: 'Coverage by Screen' },
  'dashboard.noData': { pl: 'Brak danych do wyświetlenia', en: 'No data to display' },

  // Status badges
  'status.notStarted': { pl: 'Nie rozpoczęto', en: 'Not Started' },
  'status.inProgress': { pl: 'W trakcie', en: 'In Progress' },
  'status.completed': { pl: 'Ukończono', en: 'Completed' },

  // Language
  'lang.switch': { pl: 'Switch to English', en: 'Zmień na polski' },
} as const;

export type TranslationKey = keyof typeof translations;

export function getScreenName(screen: string, lang: Language): string {
  const key = `screen.${screen}` as TranslationKey;
  return translations[key]?.[lang] || screen;
}

export function getScreenDescription(screen: string, lang: Language): string {
  const key = `screenDesc.${screen}` as TranslationKey;
  return translations[key]?.[lang] || '';
}
