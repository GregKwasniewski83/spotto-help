/**
 * Script to add Reservations section articles to content.json and search-index.json
 * Run: node scripts/add-reservations.js
 */

const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/data/content.json');
const searchPath = path.join(__dirname, '../src/data/search-index.json');

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const searchIndex = JSON.parse(fs.readFileSync(searchPath, 'utf8'));

// ============================================================
// RESERVATIONS ARTICLES
// ============================================================

const reservationsArticles = [

// ---- 1. OVERVIEW ----
{
  slug: "reservations",
  title: "Ekran Rezerwacje - Pomoc",
  screen: "reservations",
  content: `
# Ekran Rezerwacje

**Twoje centrum zarządzania rezerwacjami** — przeglądaj nadchodzące wizyty, zarządzaj płatnościami i anuluj rezerwacje w jednym miejscu.

## Przegląd ekranu

Ekran Rezerwacje wyświetla się po dotknięciu ikony kalendarza na dolnym pasku nawigacji. Znajdziesz tu kompletny przegląd swoich aktywności sportowych.

![IMG_RES_001 — Przegląd ekranu Rezerwacje](/assets/images/reservations/reservations-overview.png)

### Co znajdziesz na ekranie Rezerwacje

| Sekcja | Opis | Więcej |
|--------|------|--------|
| Nadchodzące wydarzenia | Lista rezerwacji i treningów posortowana wg daty | [Szczegóły](./features/reservation-details.md) |
| Oczekujące płatności | Niedokończone transakcje wymagające uwagi | [Jak dokończyć](./how-to-pay-pending.md) |
| Statusy rezerwacji | Kolorowe oznaczenia stanu rezerwacji | [Szczegóły](./features/booking-status.md) |
| Anulowanie | Pełne lub częściowe anulowanie z możliwością zwrotu | [Polityka zwrotów](./features/refund-policy.md) |

---

## Przewodniki krok po kroku

### Przeglądanie

- [Jak przeglądać rezerwacje](./how-to-view-bookings.md) — znajdź nadchodzące i przeszłe rezerwacje

### Zarządzanie

- [Jak anulować rezerwację](./how-to-cancel-booking.md) — pełne anulowanie ze zwrotem środków
- [Jak anulować częściowo](./how-to-partial-cancel.md) — anuluj wybrane godziny, zachowaj resztę
- [Jak dokończyć płatność](./how-to-pay-pending.md) — opłać oczekującą rezerwację

---

## Szczegółowe opisy funkcji

- [Szczegóły rezerwacji](./features/reservation-details.md) — co zawiera widok szczegółów
- [Statusy rezerwacji](./features/booking-status.md) — znaczenie kolorów i statusów
- [Polityka anulowania i zwrotów](./features/refund-policy.md) — zasada 48h, opłata 5%, terminy
- [Częściowe anulowanie](./features/partial-cancellation.md) — jak działa anulowanie wybranych slotów

---

## Najczęściej zadawane pytania

Zobacz [FAQ ekranu Rezerwacje](./faq.md) — odpowiedzi na pytania o anulowanie, zwroty, statusy i płatności.

---

## Rozwiązywanie problemów

Masz problem? Zobacz [Troubleshooting](./troubleshooting.md) — rozwiązania najczęstszych problemów:

- Rezerwacja nie pojawia się po płatności
- Nie mogę anulować rezerwacji
- Zwrot nie dotarł na konto
- Błąd przy płatności

---

## Powiązane tematy

- [Jak zarezerwować obiekt (ekran Home)](../home/how-to-book-facility.md)
- [Jak dołączyć do treningu](../home/how-to-join-training.md)
- [Problemy z płatnościami](../troubleshooting/payments/payment-failed.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Ekran Rezerwacje", id: "ekran-rezerwacje" },
    { level: 2, text: "Przegląd ekranu", id: "przegląd-ekranu" },
    { level: 3, text: "Co znajdziesz na ekranie Rezerwacje", id: "co-znajdziesz-na-ekranie-rezerwacje" },
    { level: 2, text: "Przewodniki krok po kroku", id: "przewodniki-krok-po-kroku" },
    { level: 3, text: "Przeglądanie", id: "przeglądanie" },
    { level: 3, text: "Zarządzanie", id: "zarządzanie" },
    { level: 2, text: "Szczegółowe opisy funkcji", id: "szczegółowe-opisy-funkcji" },
    { level: 2, text: "Najczęściej zadawane pytania", id: "najczęściej-zadawane-pytania" },
    { level: 2, text: "Rozwiązywanie problemów", id: "rozwiązywanie-problemów" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Twoje centrum zarządzania rezerwacjami — przeglądaj nadchodzące wizyty, zarządzaj płatnościami i anuluj rezerwacje w jednym miejscu. Ekran Rezerwacje wyświetla się po dotknięciu ikony kalendarza..."
},

// ---- 2. HOW-TO: VIEW BOOKINGS ----
{
  slug: "reservations/how-to-view-bookings",
  title: "Jak przeglądać rezerwacje",
  screen: "reservations",
  content: `
# Jak przeglądać rezerwacje

**Ekran**: Rezerwacje
**Rola**: Gracz
**Trudność**: Łatwa

## Przegląd

Ekran Rezerwacje pokazuje wszystkie Twoje nadchodzące rezerwacje obiektów sportowych oraz treningi, posortowane od najbliższych. Możesz szybko sprawdzić szczegóły każdej wizyty.

---

## Kroki

### Krok 1: Otwórz ekran Rezerwacje

Dotknij ikony **kalendarza** na dolnym pasku nawigacji aplikacji.

![IMG_RES_002 — Pasek nawigacji z zaznaczonym przyciskiem Rezerwacje](/assets/images/reservations/nav-bar-reservations.png)

### Krok 2: Przeglądaj nadchodzące wydarzenia

Na ekranie zobaczysz listę nadchodzących wydarzeń. Każda karta zawiera:

- **Zdjęcie** — avatar obiektu lub ikona trenera
- **Tytuł** — nazwa obiektu lub treningu
- **Data i godzina** — sformatowana jako „Dziś", „Jutro" lub pełna data
- **Lokalizacja** — adres obiektu
- **Czas trwania** — liczba zarezerwowanych godzin
- **Cena** — łączny koszt
- **Typ** — plakietka „Rezerwacja" lub „Trening"

![IMG_RES_003 — Lista nadchodzących rezerwacji](/assets/images/reservations/upcoming-list.png)

> 💡 **Wskazówka**: Nowo utworzona rezerwacja pojawi się z niebieskim obramowaniem i pulsującą animacją, abyś łatwo ją znalazł/a.

### Krok 3: Zobacz wszystkie rezerwacje

Jeśli masz więcej rezerwacji niż widać na ekranie, dotknij przycisku **Zobacz wszystkie** u góry sekcji.

![IMG_RES_004 — Przycisk Zobacz wszystkie](/assets/images/reservations/see-all-button.png)

Otworzy się pełnoekranowa lista ze wszystkimi nadchodzącymi wydarzeniami.

### Krok 4: Otwórz szczegóły rezerwacji

Dotknij dowolnej karty, aby zobaczyć pełne szczegóły:

- Informacje o obiekcie (nazwa, adres, kontakt)
- Zarezerwowane godziny (sloty czasowe)
- Dane trenera (jeśli wynajęty)
- Rozbicie ceny
- Status płatności
- Numer rezerwacji
- Przyciski akcji (płatność, anulowanie)

![IMG_RES_005 — Widok szczegółów rezerwacji](/assets/images/reservations/reservation-details.png)

---

## Typy wydarzeń

Na liście zobaczysz dwa typy wydarzeń:

| Typ | Plakietka | Opis |
|-----|-----------|------|
| **Rezerwacja** | Niebieska | Zarezerwowany obiekt sportowy (kort, sala, strzelnica) |
| **Trening** | Zielona | Trening z trenerem, na który się zapisałeś/aś |

---

## Weryfikacja

Przeglądanie działa poprawnie, jeśli:
- Widzisz listę swoich nadchodzących rezerwacji
- Karty zawierają daty, nazwy i ceny
- Możesz dotknąć kartę, aby zobaczyć szczegóły

---

## Rozwiązywanie problemów

### Problem: Lista jest pusta
**Rozwiązanie**: Jeśli nie masz nadchodzących rezerwacji, zobaczysz komunikat zachęcający do dokonania pierwszej rezerwacji. Przejdź do [ekranu Home](../home/README.md), aby zarezerwować obiekt.

### Problem: Nowa rezerwacja nie pojawia się
**Rozwiązanie**: Poczekaj kilka sekund — aplikacja synchronizuje nowe rezerwacje z serwisem (do 5 prób). Jeśli nadal nie widać, pociągnij ekran w dół, aby odświeżyć.

---

## Powiązane tematy

- [Jak anulować rezerwację](./how-to-cancel-booking.md)
- [Jak dokończyć płatność](./how-to-pay-pending.md)
- [Statusy rezerwacji](./features/booking-status.md)
- [Szczegóły rezerwacji](./features/reservation-details.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Jak przeglądać rezerwacje", id: "jak-przeglądać-rezerwacje" },
    { level: 2, text: "Przegląd", id: "przegląd" },
    { level: 2, text: "Kroki", id: "kroki" },
    { level: 3, text: "Krok 1: Otwórz ekran Rezerwacje", id: "krok-1-otwórz-ekran-rezerwacje" },
    { level: 3, text: "Krok 2: Przeglądaj nadchodzące wydarzenia", id: "krok-2-przeglądaj-nadchodzące-wydarzenia" },
    { level: 3, text: "Krok 3: Zobacz wszystkie rezerwacje", id: "krok-3-zobacz-wszystkie-rezerwacje" },
    { level: 3, text: "Krok 4: Otwórz szczegóły rezerwacji", id: "krok-4-otwórz-szczegóły-rezerwacji" },
    { level: 2, text: "Typy wydarzeń", id: "typy-wydarzeń" },
    { level: 2, text: "Weryfikacja", id: "weryfikacja" },
    { level: 2, text: "Rozwiązywanie problemów", id: "rozwiązywanie-problemów" },
    { level: 3, text: "Problem: Lista jest pusta", id: "problem-lista-jest-pusta" },
    { level: 3, text: "Problem: Nowa rezerwacja nie pojawia się", id: "problem-nowa-rezerwacja-nie-pojawia-się" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Ekran Rezerwacje pokazuje wszystkie Twoje nadchodzące rezerwacje obiektów sportowych oraz treningi, posortowane od najbliższych. Możesz szybko sprawdzić szczegóły każdej wizyty..."
},

// ---- 3. HOW-TO: CANCEL BOOKING ----
{
  slug: "reservations/how-to-cancel-booking",
  title: "Jak anulować rezerwację",
  screen: "reservations",
  content: `
# Jak anulować rezerwację

**Ekran**: Rezerwacje
**Rola**: Gracz
**Trudność**: Łatwa

## Przegląd

Jeśli zmienisz plany, możesz anulować całą rezerwację i otrzymać zwrot środków. Anulowanie jest dostępne dla rezerwacji z przyszłą datą, z uwzględnieniem zasady 48 godzin.

---

## Zanim zaczniesz

- Rezerwacja musi mieć **przyszłą datę** (nie dziś i nie w przeszłości)
- Do rozpoczęcia rezerwacji musi pozostać **więcej niż 48 godzin**
- Rezerwacja nie może być opłacona voucherem/karnetem
- Status rezerwacji musi być: potwierdzona, oczekująca, aktywna lub częściowo anulowana

---

## Kroki

### Krok 1: Otwórz szczegóły rezerwacji

Na ekranie Rezerwacje dotknij karty rezerwacji, którą chcesz anulować.

![IMG_RES_006 — Dotknij karty rezerwacji](/assets/images/reservations/tap-reservation-card.png)

### Krok 2: Dotknij „Anuluj wszystko"

W widoku szczegółów przewiń na dół do sekcji akcji. Dotknij przycisku **Anuluj wszystko**.

![IMG_RES_007 — Przycisk Anuluj wszystko](/assets/images/reservations/cancel-all-button.png)

> ⚠️ **Ważne**: Jeśli przycisk jest nieaktywny (szary), oznacza to, że rezerwacja nie kwalifikuje się do anulowania — sprawdź warunki w sekcji „Zanim zaczniesz".

### Krok 3: Potwierdź anulowanie

Pojawi się okno potwierdzenia z pytaniem, czy na pewno chcesz anulować. Dotknij **Potwierdź anulowanie**.

![IMG_RES_008 — Okno potwierdzenia anulowania](/assets/images/reservations/cancel-confirmation.png)

### Krok 4: Poczekaj na przetworzenie

Aplikacja przetworzy anulowanie — zobaczysz wskaźnik ładowania. Po zakończeniu:

- Pojawi się **potwierdzenie anulowania** ze szczegółami zwrotu
- Kwota zwrotu = 95% ceny (5% opłata za anulowanie)
- Zwrot trafi na konto w ciągu 3-5 dni roboczych

![IMG_RES_009 — Potwierdzenie anulowania ze zwrotem](/assets/images/reservations/cancel-success.png)

---

## Zasady anulowania

| Zasada | Opis |
|--------|------|
| **Termin** | Min. 48 godzin przed rozpoczęciem |
| **Opłata** | 5% wartości rezerwacji |
| **Zwrot** | 95% na konto w 3-5 dni roboczych |
| **Karnety** | Rezerwacje opłacone karnetem/voucherem nie podlegają anulowaniu |
| **Dziś/przeszłość** | Rezerwacje na dziś i z przeszłości nie mogą być anulowane |

> 💡 **Wskazówka**: Jeśli chcesz anulować tylko niektóre godziny, użyj funkcji [częściowego anulowania](./how-to-partial-cancel.md).

---

## Weryfikacja

Anulowanie zakończyło się sukcesem, jeśli:
- Widzisz potwierdzenie z kwotą zwrotu
- Status rezerwacji zmienił się na „Anulowana"
- Rezerwacja zniknęła z listy nadchodzących

---

## Rozwiązywanie problemów

### Problem: Przycisk anulowania jest nieaktywny
**Rozwiązanie**: Sprawdź, czy:
- Do rezerwacji pozostało więcej niż 48 godzin
- Rezerwacja nie została opłacona karnetem
- Rezerwacja nie jest już anulowana

### Problem: Błąd „Nie można anulować w ciągu 48 godzin"
**Rozwiązanie**: Zasada 48h jest obligatoryjna. Jeśli do Twojej rezerwacji pozostało mniej niż 48 godzin, anulowanie nie jest możliwe. Skontaktuj się bezpośrednio z obiektem.

### Problem: Zwrot nie dotarł po 5 dniach roboczych
**Rozwiązanie**: Zwroty są przetwarzane przez system TPay. Jeśli środki nie dotarły po 5 dniach:
1. Sprawdź historię transakcji w banku
2. Skontaktuj się z obsługą Spotto, podając numer rezerwacji

---

## Powiązane tematy

- [Jak anulować częściowo](./how-to-partial-cancel.md)
- [Polityka anulowania i zwrotów](./features/refund-policy.md)
- [Statusy rezerwacji](./features/booking-status.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: ["reservations/how-to-view-bookings"] },
  headings: [
    { level: 1, text: "Jak anulować rezerwację", id: "jak-anulować-rezerwację" },
    { level: 2, text: "Przegląd", id: "przegląd" },
    { level: 2, text: "Zanim zaczniesz", id: "zanim-zaczniesz" },
    { level: 2, text: "Kroki", id: "kroki" },
    { level: 3, text: "Krok 1: Otwórz szczegóły rezerwacji", id: "krok-1-otwórz-szczegóły-rezerwacji" },
    { level: 3, text: "Krok 2: Dotknij Anuluj wszystko", id: "krok-2-dotknij-anuluj-wszystko" },
    { level: 3, text: "Krok 3: Potwierdź anulowanie", id: "krok-3-potwierdź-anulowanie" },
    { level: 3, text: "Krok 4: Poczekaj na przetworzenie", id: "krok-4-poczekaj-na-przetworzenie" },
    { level: 2, text: "Zasady anulowania", id: "zasady-anulowania" },
    { level: 2, text: "Weryfikacja", id: "weryfikacja" },
    { level: 2, text: "Rozwiązywanie problemów", id: "rozwiązywanie-problemów" },
    { level: 3, text: "Problem: Przycisk anulowania jest nieaktywny", id: "problem-przycisk-anulowania-jest-nieaktywny" },
    { level: 3, text: "Problem: Nie można anulować w ciągu 48 godzin", id: "problem-nie-można-anulować-w-ciągu-48-godzin" },
    { level: 3, text: "Problem: Zwrot nie dotarł po 5 dniach roboczych", id: "problem-zwrot-nie-dotarł-po-5-dniach-roboczych" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Jeśli zmienisz plany, możesz anulować całą rezerwację i otrzymać zwrot środków. Anulowanie jest dostępne dla rezerwacji z przyszłą datą, z uwzględnieniem zasady 48 godzin..."
},

// ---- 4. HOW-TO: PARTIAL CANCEL ----
{
  slug: "reservations/how-to-partial-cancel",
  title: "Jak częściowo anulować rezerwację",
  screen: "reservations",
  content: `
# Jak częściowo anulować rezerwację

**Ekran**: Rezerwacje
**Rola**: Gracz
**Trudność**: Średnia

## Przegląd

Jeśli zarezerwowałeś/aś obiekt na kilka godzin, ale chcesz zrezygnować z części z nich, możesz anulować wybrane sloty czasowe, zachowując resztę rezerwacji. Otrzymasz zwrot proporcjonalny do anulowanych godzin.

---

## Zanim zaczniesz

- Rezerwacja musi mieć **więcej niż jeden slot czasowy**
- Nie możesz anulować **wszystkich** slotów (użyj pełnego anulowania)
- Obowiązują te same zasady co przy pełnym anulowaniu (48h, przyszła data)

---

## Kroki

### Krok 1: Otwórz szczegóły rezerwacji

Na ekranie Rezerwacje dotknij karty rezerwacji, którą chcesz częściowo anulować.

### Krok 2: Dotknij „Anuluj częściowo"

W widoku szczegółów dotknij przycisku **Anuluj częściowo**. Przycisk jest widoczny tylko dla rezerwacji z wieloma slotami.

![IMG_RES_010 — Przycisk częściowego anulowania](/assets/images/reservations/partial-cancel-button.png)

### Krok 3: Wybierz sloty do anulowania

Otworzy się ekran z listą wszystkich zarezerwowanych godzin. Każdy slot pokazuje:

- **Godzina** — np. „10:00"
- **Cena** — koszt danego slotu
- **Status** — „Aktywny" lub „Anulowany" (jeśli już wcześniej anulowany)

Dotknij slotów, które chcesz anulować. Wybrane sloty podświetlą się niebieskim obramowaniem z ikoną zaznaczenia.

![IMG_RES_011 — Wybór slotów do anulowania](/assets/images/reservations/select-slots.png)

> ⚠️ **Ważne**: Sloty już anulowane (szare) nie mogą być ponownie wybrane. Musisz pozostawić przynajmniej jeden aktywny slot.

### Krok 4: Sprawdź podsumowanie

Na dole ekranu zobaczysz:
- Liczbę wybranych slotów
- Łączną cenę anulowanych slotów

Dotknij **Anuluj wybrane**.

### Krok 5: Potwierdź w oknie potwierdzenia

Pojawi się nakładka z potwierdzeniem zawierająca:
- Liczbę slotów do anulowania
- **Szacowany zwrot** (95% wartości — po odliczeniu 5% opłaty)

![IMG_RES_012 — Potwierdzenie częściowego anulowania](/assets/images/reservations/partial-cancel-confirm.png)

Dotknij **Potwierdź**, aby anulować wybrane sloty.

### Krok 6: Zobacz podsumowanie

Po przetworzeniu zobaczysz podsumowanie:

| Informacja | Przykład |
|------------|---------|
| Anulowane sloty | 2 z 4 |
| Oryginalna cena | 200 zł |
| Pozostała cena | 100 zł |
| Kwota zwrotu | 95 zł |
| Opłata za anulowanie | 5% (5 zł) |

![IMG_RES_013 — Podsumowanie częściowego anulowania](/assets/images/reservations/partial-cancel-summary.png)

> 💡 Okno zamknie się automatycznie po 3 sekundach.

---

## Weryfikacja

Częściowe anulowanie zakończyło się sukcesem, jeśli:
- Widzisz podsumowanie z kwotą zwrotu
- Status rezerwacji zmienił się na „Częściowa"
- Anulowane sloty są oznaczone przekreśleniem w szczegółach

---

## Rozwiązywanie problemów

### Problem: Nie widzę przycisku „Anuluj częściowo"
**Rozwiązanie**: Przycisk pojawia się tylko, gdy rezerwacja ma więcej niż jeden slot czasowy. Jeśli masz rezerwację na jedną godzinę, użyj [pełnego anulowania](./how-to-cancel-booking.md).

### Problem: Nie mogę wybrać slotu
**Rozwiązanie**: Slot jest prawdopodobnie już anulowany (szary kolor). Możesz anulować tylko aktywne sloty.

---

## Powiązane tematy

- [Jak anulować rezerwację (pełne)](./how-to-cancel-booking.md)
- [Polityka anulowania i zwrotów](./features/refund-policy.md)
- [Częściowe anulowanie — szczegóły](./features/partial-cancellation.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Średnia", status: "🟢", lastUpdated: "2026-03-28", prerequisites: ["reservations/how-to-view-bookings"] },
  headings: [
    { level: 1, text: "Jak częściowo anulować rezerwację", id: "jak-częściowo-anulować-rezerwację" },
    { level: 2, text: "Przegląd", id: "przegląd" },
    { level: 2, text: "Zanim zaczniesz", id: "zanim-zaczniesz" },
    { level: 2, text: "Kroki", id: "kroki" },
    { level: 3, text: "Krok 1: Otwórz szczegóły rezerwacji", id: "krok-1-otwórz-szczegóły-rezerwacji" },
    { level: 3, text: "Krok 2: Dotknij Anuluj częściowo", id: "krok-2-dotknij-anuluj-częściowo" },
    { level: 3, text: "Krok 3: Wybierz sloty do anulowania", id: "krok-3-wybierz-sloty-do-anulowania" },
    { level: 3, text: "Krok 4: Sprawdź podsumowanie", id: "krok-4-sprawdź-podsumowanie" },
    { level: 3, text: "Krok 5: Potwierdź w oknie potwierdzenia", id: "krok-5-potwierdź-w-oknie-potwierdzenia" },
    { level: 3, text: "Krok 6: Zobacz podsumowanie", id: "krok-6-zobacz-podsumowanie" },
    { level: 2, text: "Weryfikacja", id: "weryfikacja" },
    { level: 2, text: "Rozwiązywanie problemów", id: "rozwiązywanie-problemów" },
    { level: 3, text: "Problem: Nie widzę przycisku Anuluj częściowo", id: "problem-nie-widzę-przycisku-anuluj-częściowo" },
    { level: 3, text: "Problem: Nie mogę wybrać slotu", id: "problem-nie-mogę-wybrać-slotu" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Jeśli zarezerwowałeś/aś obiekt na kilka godzin, ale chcesz zrezygnować z części z nich, możesz anulować wybrane sloty czasowe, zachowując resztę rezerwacji..."
},

// ---- 5. HOW-TO: PAY PENDING ----
{
  slug: "reservations/how-to-pay-pending",
  title: "Jak dokończyć oczekującą płatność",
  screen: "reservations",
  content: `
# Jak dokończyć oczekującą płatność

**Ekran**: Rezerwacje
**Rola**: Gracz
**Trudność**: Łatwa

## Przegląd

Jeśli nie dokończyłeś/aś płatności za rezerwację, pojawi się ona w sekcji **Oczekujące płatności** na ekranie Rezerwacje. Możesz dokończyć transakcję lub ją anulować.

---

## Kroki

### Krok 1: Znajdź sekcję oczekujących płatności

Na ekranie Rezerwacje u góry zobaczysz sekcję z ikoną alertu i nagłówkiem **Oczekujące płatności**.

![IMG_RES_014 — Sekcja oczekujących płatności](/assets/images/reservations/pending-payments-section.png)

> 💡 Sekcja wyświetla się tylko wtedy, gdy masz niedokończone transakcje. Jeśli jej nie widzisz — nie masz oczekujących płatności.

### Krok 2: Sprawdź szczegóły płatności

Każda karta oczekującej płatności zawiera:
- **Opis** — nazwa obiektu lub treningu
- **Kwota** — cena do zapłaty
- **Czas** — kiedy została utworzona (np. „5 minut temu")
- **Status** — „Oczekuje płatności"

### Krok 3: Dotknij „Płatność"

Dotknij niebieskiego przycisku **Płatność** na karcie.

![IMG_RES_015 — Przycisk Płatność](/assets/images/reservations/pay-button.png)

### Krok 4: Dokończ płatność w TPay

Otworzy się przeglądarka z systemem płatności TPay. Wybierz metodę płatności:
- **Karta płatnicza** (Visa, Mastercard)
- **Szybki przelew** bankowy
- **BLIK**

Dokończ transakcję zgodnie z instrukcjami na stronie TPay.

### Krok 5: Wróć do aplikacji

Po zakończeniu płatności wróć do aplikacji Spotto. Aplikacja automatycznie sprawdzi status płatności.

- **Sukces** — zobaczysz zielone potwierdzenie, rezerwacja zostanie potwierdzona
- **Timeout** — żółte ostrzeżenie, spróbuj ponownie za chwilę
- **Błąd** — czerwony komunikat, spróbuj innej metody płatności

![IMG_RES_016 — Potwierdzenie płatności](/assets/images/reservations/payment-success.png)

---

## Anulowanie oczekującej płatności

Jeśli nie chcesz kontynuować rezerwacji:

1. Dotknij szarego przycisku **Anuluj** na karcie płatności
2. W oknie potwierdzenia dotknij **Anuluj płatność**
3. Rezerwacja zostanie anulowana, a karta zniknie z listy

---

## Ważne informacje

- Oczekujące płatności mają **ograniczony czas ważności**
- Jeśli nie zapłacisz w wyznaczonym terminie, rezerwacja zostanie automatycznie anulowana
- Aplikacja sprawdza status płatności automatycznie (do 30 prób co 2 sekundy)

---

## Weryfikacja

Płatność zakończyła się sukcesem, jeśli:
- Widzisz zielone potwierdzenie
- Karta zniknęła z sekcji oczekujących płatności
- Rezerwacja pojawia się na liście nadchodzących z statusem „Potwierdzona"

---

## Rozwiązywanie problemów

### Problem: Płatność nie przechodzi
**Rozwiązanie**: Sprawdź stan konta bankowego, ważność karty, i spróbuj innej metody (np. BLIK zamiast karty).

### Problem: Po płatności nadal widzę „Oczekujące"
**Rozwiązanie**: Poczekaj minutę i odśwież ekran. Jeśli problem się utrzymuje, sprawdź historię transakcji w banku — jeśli środki zostały pobrane, skontaktuj się z obsługą.

---

## Powiązane tematy

- [Jak przeglądać rezerwacje](./how-to-view-bookings.md)
- [Statusy rezerwacji](./features/booking-status.md)
- [Rozwiązywanie problemów z płatnościami](./troubleshooting.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Jak dokończyć oczekującą płatność", id: "jak-dokończyć-oczekującą-płatność" },
    { level: 2, text: "Przegląd", id: "przegląd" },
    { level: 2, text: "Kroki", id: "kroki" },
    { level: 3, text: "Krok 1: Znajdź sekcję oczekujących płatności", id: "krok-1-znajdź-sekcję-oczekujących-płatności" },
    { level: 3, text: "Krok 2: Sprawdź szczegóły płatności", id: "krok-2-sprawdź-szczegóły-płatności" },
    { level: 3, text: "Krok 3: Dotknij Płatność", id: "krok-3-dotknij-płatność" },
    { level: 3, text: "Krok 4: Dokończ płatność w TPay", id: "krok-4-dokończ-płatność-w-tpay" },
    { level: 3, text: "Krok 5: Wróć do aplikacji", id: "krok-5-wróć-do-aplikacji" },
    { level: 2, text: "Anulowanie oczekującej płatności", id: "anulowanie-oczekującej-płatności" },
    { level: 2, text: "Ważne informacje", id: "ważne-informacje" },
    { level: 2, text: "Weryfikacja", id: "weryfikacja" },
    { level: 2, text: "Rozwiązywanie problemów", id: "rozwiązywanie-problemów" },
    { level: 3, text: "Problem: Płatność nie przechodzi", id: "problem-płatność-nie-przechodzi" },
    { level: 3, text: "Problem: Po płatności nadal widzę Oczekujące", id: "problem-po-płatności-nadal-widzę-oczekujące" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Jeśli nie dokończyłeś/aś płatności za rezerwację, pojawi się ona w sekcji Oczekujące płatności na ekranie Rezerwacje. Możesz dokończyć transakcję lub ją anulować..."
},

// ---- 6. FEATURES INDEX ----
{
  slug: "reservations/features",
  title: "Funkcje ekranu Rezerwacje",
  screen: "reservations",
  content: `
# Funkcje ekranu Rezerwacje

Szczegółowe opisy wszystkich funkcji dostępnych na ekranie zarządzania rezerwacjami w Spotto.

## Dostępne opisy

- [Szczegóły rezerwacji](./reservation-details.md) — pełny widok informacji o rezerwacji
- [Statusy rezerwacji](./booking-status.md) — znaczenie kolorów i stanów rezerwacji
- [Polityka anulowania i zwrotów](./refund-policy.md) — zasada 48h, opłata 5%, terminy zwrotów
- [Częściowe anulowanie](./partial-cancellation.md) — anulowanie wybranych godzin z rezerwacji

## Zobacz też

- [Przewodniki krok po kroku](../README.md) — jak przeglądać, anulować, płacić
- [FAQ](../faq.md) — najczęstsze pytania
- [Troubleshooting](../troubleshooting.md) — rozwiązywanie problemów

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Funkcje ekranu Rezerwacje", id: "funkcje-ekranu-rezerwacje" },
    { level: 2, text: "Dostępne opisy", id: "dostępne-opisy" },
    { level: 2, text: "Zobacz też", id: "zobacz-też" }
  ],
  excerpt: "Szczegółowe opisy wszystkich funkcji dostępnych na ekranie zarządzania rezerwacjami w Spotto. Szczegóły rezerwacji, statusy, polityka zwrotów, częściowe anulowanie..."
},

// ---- 7. FEATURE: BOOKING STATUS ----
{
  slug: "reservations/features/booking-status",
  title: "Statusy rezerwacji",
  screen: "reservations",
  content: `
# Statusy rezerwacji

## Opis

Każda rezerwacja w Spotto ma przypisany status, który informuje o jej aktualnym stanie. Status wyświetla się jako kolorowa plakietka na karcie rezerwacji i w widoku szczegółów.

## Lista statusów

| Status | Kolor | Znaczenie | Można anulować? |
|--------|-------|-----------|-----------------|
| **Potwierdzona** | 🟢 Zielony | Rezerwacja opłacona i gotowa | Tak |
| **Oczekująca** | 🟡 Żółty | Oczekuje na płatność lub potwierdzenie | Tak |
| **Aktywna** | 🔵 Niebieski | Rezerwacja trwa właśnie teraz | Tak* |
| **Częściowa** | 🟡 Żółty | Część slotów została anulowana | Tak |
| **Częściowy zwrot** | 🟡 Żółty | Zwrot za anulowane sloty przetworzony | Tak |
| **Zakończona** | ⚪ Szary | Rezerwacja zrealizowana — wizyta odbyta | Nie |
| **Anulowana** | 🔴 Czerwony | Rezerwacja w pełni anulowana | Nie |

*Aktywna rezerwacja może być anulowana tylko jeśli spełnia zasadę 48h.

## Cykl życia rezerwacji

\`\`\`
Utworzona → Oczekująca → Potwierdzona → Aktywna → Zakończona
                ↓              ↓            ↓
            Anulowana      Częściowa    Anulowana
                           ↓
                     Częściowy zwrot
\`\`\`

## Gdzie widzisz status

- **Lista rezerwacji** — kolorowa plakietka na karcie
- **Szczegóły rezerwacji** — w sekcji „Informacje o rezerwacji"
- **Oczekujące płatności** — osobna sekcja dla statusu „Oczekująca"

## Co robić w zależności od statusu

| Status | Zalecane działanie |
|--------|-------------------|
| Oczekująca | [Dokończ płatność](../how-to-pay-pending.md) |
| Potwierdzona | Przygotuj się na wizytę |
| Częściowa | Sprawdź, które godziny są nadal aktywne |
| Anulowana | Możesz dokonać nowej rezerwacji |

## Powiązane

- [Jak przeglądać rezerwacje](../how-to-view-bookings.md)
- [Szczegóły rezerwacji](./reservation-details.md)
- [Polityka zwrotów](./refund-policy.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Statusy rezerwacji", id: "statusy-rezerwacji" },
    { level: 2, text: "Opis", id: "opis" },
    { level: 2, text: "Lista statusów", id: "lista-statusów" },
    { level: 2, text: "Cykl życia rezerwacji", id: "cykl-życia-rezerwacji" },
    { level: 2, text: "Gdzie widzisz status", id: "gdzie-widzisz-status" },
    { level: 2, text: "Co robić w zależności od statusu", id: "co-robić-w-zależności-od-statusu" },
    { level: 2, text: "Powiązane", id: "powiązane" }
  ],
  excerpt: "Każda rezerwacja w Spotto ma przypisany status, który informuje o jej aktualnym stanie. Status wyświetla się jako kolorowa plakietka na karcie rezerwacji i w widoku szczegółów..."
},

// ---- 8. FEATURE: RESERVATION DETAILS ----
{
  slug: "reservations/features/reservation-details",
  title: "Szczegóły rezerwacji",
  screen: "reservations",
  content: `
# Szczegóły rezerwacji

## Opis

Widok szczegółów rezerwacji to pełnoekranowy modal, który otwiera się po dotknięciu karty rezerwacji. Zawiera kompletne informacje o Twojej rezerwacji.

## Sekcje widoku

### Informacje o obiekcie

| Element | Opis |
|---------|------|
| **Zdjęcie** | Avatar lub zdjęcie obiektu |
| **Nazwa obiektu** | Oficjalna nazwa |
| **Lokalizacja** | Pełny adres z miastem |
| **Kontakt** | Numer telefonu i e-mail z przyciskami szybkiego kontaktu |

![IMG_RES_017 — Sekcja informacji o obiekcie](/assets/images/reservations/details-facility-info.png)

### Szczegóły rezerwacji

| Element | Opis |
|---------|------|
| **Data** | Pełna data w formacie polskim (np. „piątek, 28 marca 2026") |
| **Godziny** | Lista zarezerwowanych slotów (np. „10:00 - 11:00 ; 11:00 - 12:00") |
| **Czas trwania** | Łączna liczba godzin |
| **Cena** | Łączny koszt rezerwacji |
| **Liczba osób** | Widoczna przy rezerwacjach grupowych |

### Sloty czasowe

Każdy zarezerwowany slot wyświetla się jako osobny chip:
- **Aktywny** — normalny wygląd z godziną
- **Anulowany** — przekreślony tekst, szary kolor

![IMG_RES_018 — Sloty czasowe w szczegółach](/assets/images/reservations/details-time-slots.png)

### Informacje o trenerze (opcjonalnie)

Jeśli do rezerwacji przypisany jest trener:
- Avatar trenera
- Imię i nazwisko
- Rola („Profesjonalny trener")
- Cena usługi trenera
- Kontakt (telefon, e-mail)

### Informacje o płatności

| Element | Opis |
|---------|------|
| **Status płatności** | „Opłacona" (zielony) lub „Oczekuje płatności" (żółty) |
| **Numer rezerwacji** | Pierwsze 7 znaków ID |
| **Data utworzenia** | Kiedy dokonano rezerwacji |

### Przyciski akcji

W zależności od stanu rezerwacji zobaczysz:
- **Zapłać teraz** — jeśli rezerwacja nieopłacona
- **Anuluj częściowo** — jeśli rezerwacja ma wiele slotów
- **Anuluj wszystko** — jeśli rezerwacja kwalifikuje się do anulowania

## Powiązane

- [Jak przeglądać rezerwacje](../how-to-view-bookings.md)
- [Statusy rezerwacji](./booking-status.md)
- [Jak anulować rezerwację](../how-to-cancel-booking.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Szczegóły rezerwacji", id: "szczegóły-rezerwacji" },
    { level: 2, text: "Opis", id: "opis" },
    { level: 2, text: "Sekcje widoku", id: "sekcje-widoku" },
    { level: 3, text: "Informacje o obiekcie", id: "informacje-o-obiekcie" },
    { level: 3, text: "Szczegóły rezerwacji", id: "szczegóły-rezerwacji-1" },
    { level: 3, text: "Sloty czasowe", id: "sloty-czasowe" },
    { level: 3, text: "Informacje o trenerze (opcjonalnie)", id: "informacje-o-trenerze-opcjonalnie" },
    { level: 3, text: "Informacje o płatności", id: "informacje-o-płatności" },
    { level: 3, text: "Przyciski akcji", id: "przyciski-akcji" },
    { level: 2, text: "Powiązane", id: "powiązane" }
  ],
  excerpt: "Widok szczegółów rezerwacji to pełnoekranowy modal z kompletnymi informacjami: obiekt, godziny, trener, cena, status płatności i przyciski akcji..."
},

// ---- 9. FEATURE: REFUND POLICY ----
{
  slug: "reservations/features/refund-policy",
  title: "Polityka anulowania i zwrotów",
  screen: "reservations",
  content: `
# Polityka anulowania i zwrotów

## Opis

Spotto umożliwia anulowanie rezerwacji ze zwrotem środków, pod warunkiem spełnienia określonych zasad. Poniżej znajdziesz kompletne informacje o polityce anulowania.

## Zasady anulowania

### Zasada 48 godzin

Rezerwację można anulować **nie później niż 48 godzin** przed planowanym terminem wizyty.

| Czas do rezerwacji | Czy można anulować? |
|--------------------|---------------------|
| > 48 godzin | Tak |
| 24-48 godzin | Nie |
| < 24 godziny | Nie |
| Dziś | Nie |
| Przeszłość | Nie |

### Kto może anulować

- Anulować może tylko osoba, która dokonała rezerwacji
- Rezerwacje opłacone **karnetem lub voucherem** nie podlegają anulowaniu
- Anulowanie dotyczy rezerwacji w statusie: Potwierdzona, Oczekująca, Aktywna, Częściowa

## Opłata za anulowanie

Za każde anulowanie (pełne lub częściowe) pobierana jest opłata:

| Element | Wartość |
|---------|---------|
| **Opłata** | 5% wartości anulowanej części |
| **Zwrot** | 95% wartości anulowanej części |

**Przykład**: Anulowanie rezerwacji za 200 zł
- Opłata: 10 zł (5%)
- Zwrot: 190 zł (95%)

## Termin zwrotu

- Zwrot jest przetwarzany automatycznie przez system TPay
- Środki wracają na konto w ciągu **3-5 dni roboczych**
- Zwrot trafia na tę samą metodę płatności, którą dokonano rezerwacji

## Częściowe anulowanie

Przy częściowym anulowaniu:
- Opłata 5% naliczana jest **tylko od anulowanych slotów**
- Pozostałe sloty są nadal aktywne
- Status rezerwacji zmienia się na „Częściowa"

**Przykład**: Rezerwacja 4 slotów po 50 zł (200 zł łącznie), anulowanie 2 slotów:
- Anulowana wartość: 100 zł
- Opłata: 5 zł (5% ze 100 zł)
- Zwrot: 95 zł
- Pozostała aktywna wartość: 100 zł

## Wyjątki od polityki

| Sytuacja | Zasada |
|----------|--------|
| Karnet/voucher | Anulowanie niedostępne |
| Obiekt odwołał rezerwację | Pełny zwrot 100% |
| Awaria techniczna | Skontaktuj się z obsługą |

## Powiązane

- [Jak anulować rezerwację](../how-to-cancel-booking.md)
- [Jak częściowo anulować](../how-to-partial-cancel.md)
- [Statusy rezerwacji](./booking-status.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Polityka anulowania i zwrotów", id: "polityka-anulowania-i-zwrotów" },
    { level: 2, text: "Opis", id: "opis" },
    { level: 2, text: "Zasady anulowania", id: "zasady-anulowania" },
    { level: 3, text: "Zasada 48 godzin", id: "zasada-48-godzin" },
    { level: 3, text: "Kto może anulować", id: "kto-może-anulować" },
    { level: 2, text: "Opłata za anulowanie", id: "opłata-za-anulowanie" },
    { level: 2, text: "Termin zwrotu", id: "termin-zwrotu" },
    { level: 2, text: "Częściowe anulowanie", id: "częściowe-anulowanie" },
    { level: 2, text: "Wyjątki od polityki", id: "wyjątki-od-polityki" },
    { level: 2, text: "Powiązane", id: "powiązane" }
  ],
  excerpt: "Spotto umożliwia anulowanie rezerwacji ze zwrotem środków. Zasada 48 godzin, opłata 5%, zwrot 95% w ciągu 3-5 dni roboczych. Częściowe anulowanie nalicza opłatę tylko od anulowanych slotów..."
},

// ---- 10. FEATURE: PARTIAL CANCELLATION ----
{
  slug: "reservations/features/partial-cancellation",
  title: "Częściowe anulowanie",
  screen: "reservations",
  content: `
# Częściowe anulowanie

## Opis

Częściowe anulowanie pozwala anulować wybrane sloty czasowe z rezerwacji wielogodzinnej, zachowując pozostałe. To przydatne, gdy zmienisz plany, ale nadal chcesz skorzystać z części zarezerwowanego czasu.

## Kiedy jest dostępne

Częściowe anulowanie jest dostępne, gdy:
- Rezerwacja ma **więcej niż jeden slot czasowy**
- Rezerwacja spełnia [zasady anulowania](./refund-policy.md) (48h, przyszła data)
- Nie anulowano jeszcze wszystkich slotów oprócz jednego

## Jak działa

### Widok slotów

Po otwarciu częściowego anulowania zobaczysz listę wszystkich slotów:

| Element | Opis |
|---------|------|
| **Godzina** | Czas rozpoczęcia slotu (np. „10:00") |
| **Cena** | Koszt tego konkretnego slotu (łączna cena ÷ liczba slotów) |
| **Status** | „Aktywny" (można anulować) lub „Anulowany" (szary, niedostępny) |
| **Zaznaczenie** | Niebieskie obramowanie + ikona ✓ dla wybranych |

### Ograniczenia

- **Nie można anulować wszystkich slotów** — do tego służy pełne anulowanie
- **Anulowane sloty nie mogą być przywrócone** — decyzja jest nieodwracalna
- **Musi pozostać co najmniej 1 aktywny slot**

### Odpowiedź systemu

Po anulowaniu otrzymasz szczegółowe podsumowanie:

| Pole | Przykład |
|------|---------|
| Anulowane sloty | 2 |
| Oryginalna cena | 200 zł |
| Pozostała cena | 100 zł |
| Kwota zwrotu | 95 zł |
| Opłata (5%) | 5 zł |
| Nowy status | „Częściowa" |

## Status rezerwacji po częściowym anulowaniu

- Status zmienia się na **„Częściowa"** (partial)
- W szczegółach rezerwacji anulowane sloty są **przekreślone**
- Cena wyświetla się jako pozostała kwota

## Powiązane

- [Jak częściowo anulować — przewodnik](../how-to-partial-cancel.md)
- [Jak anulować całą rezerwację](../how-to-cancel-booking.md)
- [Polityka zwrotów](./refund-policy.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Średnia", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Częściowe anulowanie", id: "częściowe-anulowanie" },
    { level: 2, text: "Opis", id: "opis" },
    { level: 2, text: "Kiedy jest dostępne", id: "kiedy-jest-dostępne" },
    { level: 2, text: "Jak działa", id: "jak-działa" },
    { level: 3, text: "Widok slotów", id: "widok-slotów" },
    { level: 3, text: "Ograniczenia", id: "ograniczenia" },
    { level: 3, text: "Odpowiedź systemu", id: "odpowiedź-systemu" },
    { level: 2, text: "Status rezerwacji po częściowym anulowaniu", id: "status-rezerwacji-po-częściowym-anulowaniu" },
    { level: 2, text: "Powiązane", id: "powiązane" }
  ],
  excerpt: "Częściowe anulowanie pozwala anulować wybrane sloty czasowe z rezerwacji wielogodzinnej, zachowując pozostałe. Zwrot 95% wartości anulowanych slotów w 3-5 dni roboczych..."
},

// ---- 11. FAQ ----
{
  slug: "reservations/faq",
  title: "FAQ — Ekran Rezerwacje",
  screen: "reservations",
  content: `
# Najczęściej zadawane pytania — Ekran Rezerwacje

## Przeglądanie rezerwacji

### Jak sprawdzić moje nadchodzące rezerwacje?
Dotknij ikony kalendarza na dolnym pasku nawigacji. Zobaczysz listę nadchodzących rezerwacji i treningów posortowaną wg daty. [Pełny przewodnik](./how-to-view-bookings.md)

### Czy widzę też treningi, na które się zapisałem/am?
Tak. Ekran Rezerwacje wyświetla zarówno rezerwacje obiektów, jak i treningi z trenerami. Każdy typ ma osobną kolorową plakietkę.

### Dlaczego moja nowa rezerwacja nie pojawia się na liście?
Aplikacja synchronizuje nowe rezerwacje automatycznie (do 5 prób). Poczekaj kilka sekund — nowa rezerwacja pojawi się z niebieskim obramowaniem i pulsującą animacją.

---

## Anulowanie

### Kiedy mogę anulować rezerwację?
Możesz anulować rezerwację, jeśli do jej rozpoczęcia pozostało więcej niż 48 godzin. [Pełne zasady](./features/refund-policy.md)

### Ile kosztuje anulowanie?
Opłata za anulowanie wynosi 5% wartości anulowanej części. Otrzymasz zwrot 95% na konto.

### Czy mogę anulować tylko jedną godzinę z rezerwacji na kilka godzin?
Tak — użyj funkcji [częściowego anulowania](./how-to-partial-cancel.md). Wybierz konkretne sloty do anulowania, a reszta pozostanie aktywna.

### Czy mogę anulować rezerwację opłaconą karnetem?
Nie. Rezerwacje opłacone karnetem lub voucherem nie podlegają anulowaniu przez aplikację. Skontaktuj się bezpośrednio z obiektem.

### Co się stanie, jeśli obiekt odwoła moją rezerwację?
Otrzymasz pełny zwrot 100% (bez opłaty 5%). Powiadomienie pojawi się w aplikacji.

---

## Płatności i zwroty

### Jak długo trwa zwrot pieniędzy?
Zwrot trafia na konto w ciągu **3-5 dni roboczych** od momentu anulowania.

### Na jakie konto trafia zwrot?
Zwrot trafia na tę samą metodę płatności, którą dokonano rezerwacji (karta, konto bankowe).

### Co to są „Oczekujące płatności"?
To rezerwacje, za które nie dokończono płatności. Pojawią się u góry ekranu Rezerwacje. Możesz dokończyć płatność lub anulować rezerwację. [Jak dokończyć](./how-to-pay-pending.md)

### Jakie metody płatności są dostępne?
Spotto obsługuje płatności przez TPay: karty płatnicze (Visa, Mastercard), szybkie przelewy bankowe i BLIK.

---

## Statusy

### Co oznaczają kolory statusów?
- 🟢 **Zielony** — Potwierdzona (opłacona, gotowa)
- 🟡 **Żółty** — Oczekująca / Częściowa
- 🔵 **Niebieski** — Aktywna (trwa teraz)
- 🔴 **Czerwony** — Anulowana
- ⚪ **Szary** — Zakończona

[Pełna lista statusów](./features/booking-status.md)

### Co znaczy status „Częściowa"?
Oznacza, że część godzin z rezerwacji została anulowana, ale pozostałe sloty są nadal aktywne.

---

## Powiązane tematy

- [Ekran Rezerwacje — przegląd](./README.md)
- [Troubleshooting](./troubleshooting.md)

---

**Ostatnia aktualizacja**: 2026-03-28
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Łatwa", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Najczęściej zadawane pytania — Ekran Rezerwacje", id: "najczęściej-zadawane-pytania-ekran-rezerwacje" },
    { level: 2, text: "Przeglądanie rezerwacji", id: "przeglądanie-rezerwacji" },
    { level: 3, text: "Jak sprawdzić moje nadchodzące rezerwacje?", id: "jak-sprawdzić-moje-nadchodzące-rezerwacje" },
    { level: 3, text: "Czy widzę też treningi, na które się zapisałem/am?", id: "czy-widzę-też-treningi" },
    { level: 3, text: "Dlaczego moja nowa rezerwacja nie pojawia się na liście?", id: "dlaczego-moja-nowa-rezerwacja-nie-pojawia-się" },
    { level: 2, text: "Anulowanie", id: "anulowanie" },
    { level: 3, text: "Kiedy mogę anulować rezerwację?", id: "kiedy-mogę-anulować-rezerwację" },
    { level: 3, text: "Ile kosztuje anulowanie?", id: "ile-kosztuje-anulowanie" },
    { level: 3, text: "Czy mogę anulować tylko jedną godzinę?", id: "czy-mogę-anulować-tylko-jedną-godzinę" },
    { level: 3, text: "Czy mogę anulować rezerwację opłaconą karnetem?", id: "czy-mogę-anulować-rezerwację-opłaconą-karnetem" },
    { level: 3, text: "Co się stanie, jeśli obiekt odwoła moją rezerwację?", id: "co-się-stanie-jeśli-obiekt-odwoła" },
    { level: 2, text: "Płatności i zwroty", id: "płatności-i-zwroty" },
    { level: 3, text: "Jak długo trwa zwrot pieniędzy?", id: "jak-długo-trwa-zwrot-pieniędzy" },
    { level: 3, text: "Na jakie konto trafia zwrot?", id: "na-jakie-konto-trafia-zwrot" },
    { level: 3, text: "Co to są Oczekujące płatności?", id: "co-to-są-oczekujące-płatności" },
    { level: 3, text: "Jakie metody płatności są dostępne?", id: "jakie-metody-płatności-są-dostępne" },
    { level: 2, text: "Statusy", id: "statusy" },
    { level: 3, text: "Co oznaczają kolory statusów?", id: "co-oznaczają-kolory-statusów" },
    { level: 3, text: "Co znaczy status Częściowa?", id: "co-znaczy-status-częściowa" },
    { level: 2, text: "Powiązane tematy", id: "powiązane-tematy" }
  ],
  excerpt: "Odpowiedzi na najczęstsze pytania o rezerwacje: przeglądanie, anulowanie (zasada 48h, opłata 5%), częściowe anulowanie, oczekujące płatności, statusy i zwroty..."
},

// ---- 12. TROUBLESHOOTING ----
{
  slug: "reservations/troubleshooting",
  title: "Rozwiązywanie problemów — Ekran Rezerwacje",
  screen: "reservations",
  content: `
# Rozwiązywanie problemów — Ekran Rezerwacje

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
1. Poczekaj 10-15 sekund — aplikacja automatycznie synchronizuje nowe rezerwacje
2. Pociągnij ekran w dół, aby odświeżyć
3. Sprawdź sekcję „Oczekujące płatności" — rezerwacja może czekać na dokończenie płatności
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
1. Sprawdź datę rezerwacji — musi być > 48h w przyszłości
2. Rezerwacje opłacone karnetem nie mogą być anulowane — skontaktuj się z obiektem
3. Jeśli widzisz błąd „Nie można anulować", przeczytaj komunikat — zawiera powód odmowy

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
3. Jeśli po 7 dniach brak zwrotu — skontaktuj się z obsługą Spotto, podając:
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
`,
  metadata: { screen: "reservations", role: "Gracz", difficulty: "Średnia", status: "🟢", lastUpdated: "2026-03-28", prerequisites: [] },
  headings: [
    { level: 1, text: "Rozwiązywanie problemów — Ekran Rezerwacje", id: "rozwiązywanie-problemów-ekran-rezerwacje" },
    { level: 2, text: "Przeglądanie rezerwacji", id: "przeglądanie-rezerwacji" },
    { level: 3, text: "Rezerwacja nie pojawia się po płatności", id: "rezerwacja-nie-pojawia-się-po-płatności" },
    { level: 3, text: "Lista rezerwacji jest pusta", id: "lista-rezerwacji-jest-pusta" },
    { level: 2, text: "Anulowanie", id: "anulowanie" },
    { level: 3, text: "Nie mogę anulować rezerwacji", id: "nie-mogę-anulować-rezerwacji" },
    { level: 3, text: "Błąd Zasada 48 godzin", id: "błąd-zasada-48-godzin" },
    { level: 3, text: "Częściowe anulowanie nie działa", id: "częściowe-anulowanie-nie-działa" },
    { level: 2, text: "Płatności", id: "płatności" },
    { level: 3, text: "Płatność nie powiodła się", id: "płatność-nie-powiodła-się" },
    { level: 3, text: "Zwrot nie dotarł na konto", id: "zwrot-nie-dotarł-na-konto" },
    { level: 3, text: "Oczekująca płatność wygasła", id: "oczekująca-płatność-wygasła" },
    { level: 2, text: "Ogólne", id: "ogólne" },
    { level: 3, text: "Ekran Rezerwacje się nie ładuje", id: "ekran-rezerwacje-się-nie-ładuje" },
    { level: 2, text: "Nadal potrzebujesz pomocy?", id: "nadal-potrzebujesz-pomocy" }
  ],
  excerpt: "Rozwiązania najczęstszych problemów z rezerwacjami: brak rezerwacji po płatności, problemy z anulowaniem, zasada 48h, zwroty, oczekujące płatności..."
}

]; // END reservationsArticles

// ============================================================
// INSERT INTO content.json
// ============================================================

// Find README index
const readmeIdx = content.articles.findIndex(a => a.slug === 'README');
if (readmeIdx === -1) {
  console.error('ERROR: README article not found');
  process.exit(1);
}

// Insert before README
content.articles.splice(readmeIdx, 0, ...reservationsArticles);

// Add/update reservations screen stats
const resScreen = content.screens.find(s => s.screen === 'reservations');
if (resScreen) {
  resScreen.articleCount = reservationsArticles.length;
  resScreen.statuses = { completed: reservationsArticles.length, inProgress: 0, notStarted: 0 };
} else {
  content.screens.push({
    screen: 'reservations',
    articleCount: reservationsArticles.length,
    statuses: { completed: reservationsArticles.length, inProgress: 0, notStarted: 0 }
  });
}

// Update total stats
content.stats.totalArticles = content.articles.length;
content.stats.totalScreens = content.screens.length;
content.stats.lastBuilt = new Date().toISOString();

// ============================================================
// INSERT INTO search-index.json
// ============================================================

const searchReadmeIdx = searchIndex.items.findIndex(i => i.slug === 'README');

const searchItems = reservationsArticles.map(a => {
  const item = {
    slug: a.slug,
    title: a.title,
    screen: a.screen,
    content: a.content.replace(/[#*|>\-\[\]()!`\n\r]/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 1000),
    excerpt: a.excerpt
  };
  if (a.metadata.role) item.role = a.metadata.role;
  if (a.metadata.difficulty) item.difficulty = a.metadata.difficulty;
  return item;
});

if (searchReadmeIdx !== -1) {
  searchIndex.items.splice(searchReadmeIdx, 0, ...searchItems);
} else {
  searchIndex.items.push(...searchItems);
}

searchIndex.stats.totalItems = searchIndex.items.length;
searchIndex.stats.lastBuilt = new Date().toISOString();

// ============================================================
// UPDATE README status table
// ============================================================

const readmeArticle = content.articles.find(a => a.slug === 'README');
if (readmeArticle) {
  readmeArticle.content = readmeArticle.content.replace(
    /\| Reservations \| 0 \| 0 \| ❌ \| 🔴 Not Started \|/,
    '| Reservations | 4 | 4 | ✅ | 🟢 Complete |'
  );
}

// ============================================================
// WRITE FILES
// ============================================================

fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
fs.writeFileSync(searchPath, JSON.stringify(searchIndex, null, 2), 'utf8');

console.log(`✅ Added ${reservationsArticles.length} reservations articles`);
console.log(`   Total articles: ${content.stats.totalArticles}`);
console.log(`   Total screens: ${content.stats.totalScreens}`);
console.log(`   Search items: ${searchIndex.stats.totalItems}`);
console.log(`   Screens: ${content.screens.map(s => s.screen + '(' + s.articleCount + ')').join(', ')}`);
