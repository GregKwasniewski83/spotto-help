---
title: "Integracja KSeF"
screen: business
role: "Właściciel firmy"
difficulty: "Zaawansowana"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Integracja KSeF

## Opis

KSeF (Krajowy System e-Faktur) to system elektronicznego fakturowania prowadzony przez Ministerstwo Finansów. Integracja pozwala automatycznie wystawiać i przesyłać e-faktury bezpośrednio z aplikacji Spotto. System obsługuje dwie metody autoryzacji: **token** i **certyfikat kwalifikowany**.

## Porównanie metod autoryzacji

| Kryterium | Token | Certyfikat |
|-----------|-------|------------|
| **Łatwość konfiguracji** | Prosta : skopiuj i wklej | Wymaga pliku .pfx/.p12 i hasła |
| **Poziom bezpieczeństwa** | Standardowy (RSA-OAEP) | Najwyższy (klucz kryptograficzny) |
| **Czas ważności** | Krótki : wymaga odnawiania | Długi : 1-2 lata (do daty wygaśnięcia) |
| **Koszt** | Bezpłatny | Zależy od dostawcy certyfikatu |
| **Zalecane użycie** | Testowanie, szybki start, małe firmy | Produkcja, większe firmy, wyższe wymagania |
| **Źródło** | Strona KSeF Ministerstwa Finansów | Kwalifikowany dostawca usług zaufania |

---

## Metoda 1: Konfiguracja za pomocą tokenu

Token autoryzacyjny to najprostsza metoda połączenia z KSeF. Generujesz go na stronie Ministerstwa Finansów i wklejasz w aplikacji.

### Co potrzebujesz

- Token autoryzacyjny KSeF (minimum 20 znaków)
- Token uzyskasz na stronie: **ksef.mf.gov.pl** → logowanie profilem zaufanym lub e-dowodem → sekcja „Generowanie tokenu"

### Krok po kroku

**Krok 1: Otwórz sekcję KSeF**

Na ekranie **Biznes** przewiń do karty **Status KSeF**. Jeśli KSeF nie jest skonfigurowany, zobaczysz status „Nie skonfigurowano" i przycisk **Konfiguruj**.

![Karta statusu KSeF : Screenshot #28](../../../assets/images/business/ksef-status-card.png)

**Krok 2: Dotknij „Konfiguruj"**

Otworzy się ekran konfiguracji KSeF z wyborem metody autoryzacji.

**Krok 3: Wybierz zakładkę „Token"**

Na ekranie konfiguracji dotknij zakładki **Token** (powinna być domyślnie aktywna).

**Krok 4: Wklej token autoryzacyjny**

W polu **Token KSeF** wklej token skopiowany ze strony KSeF Ministerstwa Finansów.

| Walidacja | Wymaganie |
|-----------|-----------|
| **Minimalna długość** | 20 znaków |
| **Dozwolone znaki** | Litery, cyfry, znaki specjalne |
| **Kopiowanie** | Zalecane kopiuj/wklej : unikaj ręcznego przepisywania |

> 💡 **Wskazówka**: Token możesz skopiować ze strony KSeF i wkleić w aplikacji. Upewnij się, że skopiowałeś cały token bez obcinania.

**Krok 5: Wybierz środowisko**

Wybierz środowisko pracy z KSeF:

| Środowisko | Adres API | Opis |
|------------|-----------|------|
| **Testowe** | ksef-test.mf.gov.pl | Do testów : faktury nie są oficjalne, nie trafiają do systemu KSeF |
| **Produkcyjne** | ksef.mf.gov.pl | Prawdziwe e-faktury wysyłane do oficjalnego systemu KSeF |

> 💡 **Wskazówka**: Zalecamy rozpoczęcie od środowiska **testowego**, aby upewnić się, że konfiguracja działa prawidłowo, a dopiero potem przejście na produkcję.

![Konfiguracja KSeF tokenem : Screenshot #29](../../../assets/images/business/ksef-config-token.png)

**Krok 6: Dotknij „Zapisz"**

System automatycznie:
1. Zaszyfruje token kluczem publicznym KSeF (RSA-OAEP)
2. Przetestuje połączenie z serwerem KSeF w wybranym środowisku
3. Zweryfikuje uprawnienia do wystawiania faktur na Twój NIP
4. Wyświetli wynik testu

**Wynik testu:**
- ✅ **Zielona ikona** : połączenie działa prawidłowo, KSeF jest gotowy
- ❌ **Czerwona ikona** : błąd połączenia, sprawdź token i spróbuj ponownie

---

## Metoda 2: Konfiguracja za pomocą certyfikatu kwalifikowanego

Certyfikat kwalifikowany zapewnia najwyższy poziom bezpieczeństwa. Jest to ta sama technologia, co podpis kwalifikowany używany w e-urzędach i bankowości elektronicznej.

### Co potrzebujesz

- Plik certyfikatu kwalifikowanego w formacie **PKCS#12** (rozszerzenie .pfx lub .p12)
- **Hasło** do pliku certyfikatu (ustawione podczas eksportu)
- Certyfikat musi pochodzić od kwalifikowanego dostawcy usług zaufania

| Dostawca | Strona |
|----------|--------|
| **Certum** | certum.pl |
| **KIR** | elektronicznypodpis.pl |
| **Sigillum** | sigillum.pl |
| **PWPW** | sigillum.pl |
| **EuroCert** | eurocert.pl |

### Krok po kroku

**Krok 1: Otwórz sekcję KSeF**

Na ekranie **Biznes** przewiń do karty **Status KSeF** i dotknij **Konfiguruj**. Jeśli KSeF był już konfigurowany tokenem, dotknij **Rekonfiguruj**.

**Krok 2: Wybierz zakładkę „Certyfikat"**

Na ekranie konfiguracji dotknij zakładki **Certyfikat**.

![Konfiguracja KSeF certyfikatem : Screenshot #55](../../../assets/images/business/ksef-config-certificate.png)

**Krok 3: Wgraj plik certyfikatu**

Dotknij przycisku **Wybierz plik certyfikatu**. Otworzy się systemowy selektor plików. Wskaż plik certyfikatu na urządzeniu.

| Obsługiwany format | Rozszerzenie | Opis |
|--------------------|-------------|------|
| **PKCS#12** | .pfx | Format Microsoft : zawiera klucz prywatny i certyfikat |
| **PKCS#12** | .p12 | Format standardowy : identyczny z .pfx |

Po wybraniu pliku zobaczysz jego nazwę wyświetloną pod przyciskiem.

> ⚠️ **Ważne**: Upewnij się, że plik certyfikatu pochodzi od kwalifikowanego dostawcy usług zaufania. Certyfikaty samopodpisane (self-signed) nie są akceptowane przez KSeF.

**Krok 4: Wprowadź hasło certyfikatu**

W polu **Hasło certyfikatu** wpisz hasło zabezpieczające plik .pfx/.p12.

| Ważne informacje o haśle | |
|---------------------------|---|
| **Czym jest to hasło?** | Hasło ustawione podczas eksportu certyfikatu do pliku .pfx/.p12 |
| **Czy jest przechowywane?** | Nie : hasło jest używane jednorazowo do odczytania klucza prywatnego |
| **Nie pamiętam hasła** | Wyeksportuj certyfikat ponownie z nowym hasłem u dostawcy |

> 💡 **Wskazówka**: To hasło dotyczy samego pliku certyfikatu, a **nie** hasła do konta u dostawcy certyfikatu. Są to dwa różne hasła.

**Krok 5: Wybierz środowisko**

Tak samo jak przy metodzie tokenowej : wybierz **Testowe** lub **Produkcyjne**.

| Środowisko | Adres API | Opis |
|------------|-----------|------|
| **Testowe** | ksef-test.mf.gov.pl | Do testów : faktury nie trafiają do oficjalnego systemu |
| **Produkcyjne** | ksef.mf.gov.pl | Prawdziwe e-faktury w systemie KSeF |

**Krok 6: Dotknij „Zapisz"**

System automatycznie:
1. Odczyta certyfikat z pliku za pomocą podanego hasła
2. Zweryfikuje ważność certyfikatu (datę rozpoczęcia i wygaśnięcia)
3. Sprawdzi, czy certyfikat pochodzi od kwalifikowanego dostawcy
4. Użyje klucza prywatnego do podpisania żądania autoryzacyjnego
5. Przetestuje połączenie z serwerem KSeF w wybranym środowisku
6. Zweryfikuje uprawnienia do wystawiania faktur na Twój NIP
7. Wyświetli wynik testu

**Wynik testu:**
- ✅ **Zielona ikona** : certyfikat prawidłowy, połączenie działa
- ❌ **Czerwona ikona** : błąd, sprawdź certyfikat, hasło i datę ważności

---

## Bezpieczeństwo

### Token : jak działa zabezpieczenie

Po wprowadzeniu tokenu aplikacja:
1. Szyfruje token kluczem publicznym KSeF algorytmem **RSA-OAEP**
2. Przesyła zaszyfrowany token do serwera KSeF
3. KSeF odszyfrowuje token swoim kluczem prywatnym i otwiera sesję
4. Sesja jest dodatkowo zabezpieczona kluczem symetrycznym **AES-256**

Token **nie jest przechowywany** lokalnie na urządzeniu po zapisaniu konfiguracji.

### Certyfikat : jak działa zabezpieczenie

Certyfikat kwalifikowany zawiera klucz prywatny, który:
1. Służy do **podpisywania żądań** autoryzacyjnych kryptograficznie
2. Zapewnia **niezaprzeczalność** : tylko posiadacz certyfikatu mógł podpisać żądanie
3. Jest chroniony hasłem pliku .pfx/.p12

Hasło certyfikatu **nie jest przechowywane** : jest używane jednorazowo do odczytania klucza.

---

## Status i zarządzanie

Po skonfigurowaniu KSeF (dowolną metodą) na karcie KSeF zobaczysz:

| Element | Opis |
|---------|------|
| **Status** | Skonfigurowano / Nie skonfigurowano |
| **Metoda** | Token lub Certyfikat |
| **Środowisko** | Etykieta: Testowe lub Produkcyjne |
| **Ostatnia synchronizacja** | Data i godzina ostatniej komunikacji z KSeF |
| **Przełącznik** | Włącz/wyłącz integrację KSeF bez usuwania konfiguracji |
| **Rekonfiguruj** | Przycisk do zmiany ustawień lub metody autoryzacji |

### Zmiana metody autoryzacji

Możesz w dowolnym momencie zmienić metodę:
1. Dotknij **Rekonfiguruj** na karcie KSeF
2. Wybierz nową zakładkę (Token → Certyfikat lub odwrotnie)
3. Wprowadź nowe dane autoryzacyjne
4. Zapisz : nowa konfiguracja zastąpi poprzednią

### Wyłączenie integracji

Przełącznik na karcie KSeF pozwala tymczasowo wyłączyć integrację bez usuwania konfiguracji. Po ponownym włączeniu nie musisz podawać danych od nowa.

---

## Ograniczenia

| Ograniczenie | Opis |
|-------------|------|
| **Firmy podrzędne** | KSeF nie jest dostępny dla firm podrzędnych korzystających z TPay firmy nadrzędnej : e-faktury wystawiane są centralnie |
| **Ważność tokenu** | Token ma ograniczony czas ważności : po wygaśnięciu wygeneruj nowy na stronie KSeF |
| **Ważność certyfikatu** | Po wygaśnięciu certyfikatu trzeba uzyskać nowy od dostawcy i ponownie skonfigurować |
| **Kwalifikowani dostawcy** | Akceptowane są wyłącznie certyfikaty od kwalifikowanych dostawców usług zaufania |

---

## Rozwiązywanie problemów

| Problem | Przyczyna | Rozwiązanie |
|---------|-----------|-------------|
| Test połączenia tokenem nie powiódł się | Token wygasł lub jest nieprawidłowy | Wygeneruj nowy token na stronie KSeF Ministerstwa Finansów |
| „Token wydaje się nieprawidłowy" | Token za krótki | Token musi mieć minimum 20 znaków : skopiuj cały token |
| Certyfikat nie jest akceptowany | Niewłaściwy format pliku | Użyj formatu .pfx lub .p12 (PKCS#12) |
| Błąd hasła certyfikatu | Nieprawidłowe hasło pliku | To hasło pliku certyfikatu, nie hasło konta u dostawcy |
| Certyfikat wygasł | Data ważności minęła | Uzyskaj nowy certyfikat od dostawcy |
| Nie widzę sekcji KSeF | Firma podrzędna z TPay rodzica | KSeF jest zarządzany przez firmę nadrzędną |
| Błąd połączenia z serwerem | Serwer KSeF niedostępny | Spróbuj ponownie za kilka minut : serwer KSeF może mieć przerwę techniczną |

---

## Powiązane

- [Jak skonfigurować KSeF : przewodnik](../how-to-setup-ksef.md)
- [Integracja TPay](./tpay-integration.md)
- [Firmy podrzędne](./child-businesses.md)

---

**Ostatnia aktualizacja**: 2026-03-29
