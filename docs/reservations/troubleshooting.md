---
title: "Rozwiązywanie problemów : Ekran Rezerwacje"
screen: reservations
role: "Użytkownik"
difficulty: "Średnia"
status: "🟢"
lastUpdated: "2026-03-28"
---
# Rozwiązywanie problemów : Ekran Rezerwacje

Poniżej znajdziesz rozwiązania najczęstszych problemów związanych z rezerwacjami w aplikacji Spotto.

---

## Przeglądanie rezerwacji

### Rezerwacja nie pojawia się po płatności

**Problem**: Zapłaciłem/am, ale rezerwacja nie widnieje na liście.

**Przyczyny**:
- Opóźnienie w synchronizacji (aplikacja próbuje do 5 razy)
- Płatność jest jeszcze przetwarzana
- Sesja wygasła podczas płatności

**Rozwiązanie**:
1. Poczekaj 10-15 sekund : aplikacja automatycznie synchronizuje nowe rezerwacje
2. Pociągnij ekran w dół, aby odświeżyć
3. Sprawdź sekcję „Oczekujące płatności" : rezerwacja może czekać na dokończenie płatności
4. Zamknij i otwórz ponownie aplikację
5. Jeśli nie pojawi się po 15 minutach, skontaktuj się z obsługą z numerem transakcji

---

### Lista rezerwacji jest pusta

**Problem**: Nie widzę żadnych rezerwacji, chociaż je mam.

**Przyczyny**:
- Brak połączenia z internetem
- Wszystkie rezerwacje są w przeszłości (wyświetlane są tylko nadchodzące)
- Problem z sesją użytkownika

**Rozwiązanie**:
1. Sprawdź połączenie z internetem
2. Pamiętaj, że ekran pokazuje tylko **nadchodzące** rezerwacje
3. Wyloguj się i zaloguj ponownie
4. Zaktualizuj aplikację do najnowszej wersji

---

## Anulowanie

### Nie mogę anulować rezerwacji

**Problem**: Przycisk anulowania jest nieaktywny lub pojawia się błąd.

**Przyczyny**:
- Do rezerwacji pozostało mniej niż 48 godzin
- Rezerwacja jest na dziś lub w przeszłości
- Rezerwacja opłacona karnetem/voucherem
- Rezerwacja jest już anulowana

**Rozwiązanie**:
1. Sprawdź datę rezerwacji : musi być > 48h w przyszłości
2. Rezerwacje opłacone karnetem nie mogą być anulowane : skontaktuj się z obiektem
3. Jeśli widzisz błąd „Nie można anulować", przeczytaj komunikat : zawiera powód odmowy

---

### Błąd „Zasada 48 godzin"

**Problem**: Pojawia się komunikat o niemożności anulowania z powodu zasady 48 godzin.

**Rozwiązanie**: Zasada jest obligatoryjna i nie można jej obejść. Opcje:
1. Skontaktuj się bezpośrednio z obiektem (telefon lub e-mail z widoku szczegółów)
2. Poproś obiekt o anulowanie po ich stronie
3. W przypadku poważnych okoliczności skontaktuj się z obsługą Spotto

---

### Częściowe anulowanie nie działa

**Problem**: Nie widzę opcji częściowego anulowania.

**Przyczyny**:
- Rezerwacja ma tylko 1 slot czasowy
- Wszystkie sloty oprócz jednego zostały już anulowane

**Rozwiązanie**: Częściowe anulowanie wymaga minimum 2 aktywnych slotów. Dla rezerwacji jednogodzinnych użyj pełnego anulowania.

---

## Płatności

### Płatność nie powiodła się

**Problem**: Próba płatności kończy się błędem.

**Przyczyny**:
- Niewystarczające środki
- Wygasła karta
- Problem z systemem TPay
- Timeout połączenia

**Rozwiązanie**:
1. Sprawdź stan konta bankowego
2. Spróbuj innej metody płatności (karta → BLIK → przelew)
3. Poczekaj 5 minut i spróbuj ponownie
4. Rezerwacja powinna nadal być w sekcji „Oczekujące płatności"

---

### Zwrot nie dotarł na konto

**Problem**: Anulowałem/am rezerwację, ale nie otrzymałem/am zwrotu.

**Przyczyny**:
- Zwrot jest w trakcie przetwarzania (3-5 dni roboczych)
- Problem po stronie banku
- Zwrot na kartę może trwać dłużej niż przelew

**Rozwiązanie**:
1. Poczekaj pełne 5 dni roboczych od momentu anulowania
2. Sprawdź historię transakcji w banku (zwrot może być ukryty pod inną nazwą)
3. Jeśli po 7 dniach brak zwrotu : skontaktuj się z obsługą Spotto, podając:
   - Numer rezerwacji (widoczny w szczegółach)
   - Datę anulowania
   - Kwotę oczekiwanego zwrotu

---

### Oczekująca płatność wygasła

**Problem**: Rezerwacja zniknęła z oczekujących, ale nie zapłaciłem/am.

**Rozwiązanie**: Oczekujące płatności mają ograniczony czas ważności. Po jego upływie rezerwacja jest automatycznie anulowana. Dokonaj nowej rezerwacji na [ekranie Home](../home/how-to-book-facility.md).

---

## Ogólne

### Ekran Rezerwacje się nie ładuje

**Problem**: Ekran jest pusty lub wyświetla błąd.

**Rozwiązanie**:
1. Sprawdź połączenie z internetem
2. Zamknij i otwórz aplikację
3. Wyczyść pamięć podręczną:
   - **Android**: Ustawienia → Aplikacje → Spotto → Pamięć → Wyczyść pamięć podręczną
   - **iOS**: Usuń i zainstaluj aplikację ponownie
4. Zaktualizuj do najnowszej wersji

---

## Nadal potrzebujesz pomocy?

Jeśli powyższe rozwiązania nie pomogły:
- Sprawdź [FAQ ekranu Rezerwacje](./faq.md)
- Skontaktuj się z zespołem wsparcia Spotto

---

**Ostatnia aktualizacja**: 2026-03-28
