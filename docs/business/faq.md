---
title: "FAQ : Ekran Biznes"
screen: business
role: "Właściciel firmy"
difficulty: "Łatwa"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Najczęściej zadawane pytania : Ekran Biznes

## Profil firmy

### Jak mogę zmienić dane firmy?

Otwórz ekran Biznes i dotknij przycisku edycji profilu. Zmień potrzebne dane i dotknij **Zapisz**. [Przewodnik](./how-to-create-profile.md)

### Czy mogę mieć kilka firm w jednym koncie?

Tak, ale każda firma wymaga osobnego profilu biznesowego. Jeśli masz filie : skorzystaj z systemu [firm podrzędnych](./how-to-manage-child-businesses.md).

### Jak zmienić logo firmy?

Na ekranie Biznes dotknij ikony aparatu na avatarze. Możesz zrobić nowe zdjęcie lub wybrać z galerii.

---

## Obiekty sportowe

### Ile obiektów mogę dodać?

Nie ma limitu : możesz dodać dowolną liczbę obiektów sportowych.

### Jak zmienić cenę obiektu?

Otwórz formularz edycji obiektu, zmień cenę netto lub brutto (system automatycznie przeliczy drugą wartość) i zapisz. [Przewodnik](./how-to-add-facility.md)

### Czy mogę tymczasowo zamknąć obiekt?

Tak : ustaw harmonogram na konkretną datę bez zaznaczonych godzin. [Jak skonfigurować harmonogram](./how-to-manage-schedule.md)

---

## Płatności i fakturowanie

### Czy TPay jest wymagany?

TPay jest wymagany, aby klienci mogli płacić online za rezerwacje i produkty. Bez TPay klienci nie będą mogli dokonać płatności w aplikacji.

### Jak długo trwa aktywacja TPay?

Proces aktywacji konta TPay może trwać do 24 godzin od momentu zapisania poprawnych danych.

### Czy KSeF jest obowiązkowy?

Nie : integracja z KSeF jest opcjonalna, ale zalecana dla automatyzacji fakturowania. [Jak skonfigurować KSeF](./how-to-setup-ksef.md)

---

## Agenci i personel

### Jak zaprosić pracownika?

Użyj sekcji „Agenci" na ekranie Biznes. Wpisz adres e-mail pracownika i wyślij zaproszenie. [Przewodnik](./how-to-manage-agents.md)

### Co się stanie, gdy zaproszenie wygaśnie?

Możesz wysłać zaproszenie ponownie : dotknij **Wyślij ponownie** przy wygasłym zaproszeniu.

### Czy agent widzi raporty finansowe?

Agent ma dostęp do zarządzania firmą, ale szczegółowe uprawnienia zależą od konfiguracji.

---

## Trenerzy

### Jak trener może zacząć współpracę z moją firmą?

Trener musi wysłać prośbę o powiązanie ze swojego profilu trenera. Prośba pojawi się u Ciebie w sekcji „Trenerzy" jako oczekująca. [Przewodnik](./how-to-manage-trainers.md)

### Czy mogę zmienić stawkę trenera?

Tak : dotknij trenera na liście i zaktualizuj stawkę godzinową (netto lub brutto).

### Co oznacza uprawnienie „Pracownik"?

Trener oznaczony jako pracownik nie może samodzielnie tworzyć treningów : muszą być tworzone przez firmę.

---

## Raporty

### Za jaki okres mogę generować raporty?

Możesz generować raporty za dowolny miesiąc z ostatnich 2-3 lat. [Przewodnik](./how-to-generate-reports.md)

### Czy mogę wyeksportować raport?

Tak : raporty można pobrać jako PDF lub udostępnić e-mailem.

---

## Przydatne informacje : zależności między funkcjami

Poniżej znajdziesz praktyczne informacje o tym, co jest wymagane, aby poszczególne funkcje działały poprawnie. Te zależności wynikają z logiki systemu Spotto.

### Kiedy moja firma pojawi się w wyszukiwarce dla użytkowników?

Aby Twoja firma była widoczna w przeglądarce i wyszukiwarce Spotto, musisz spełnić **cztery warunki**:

1. **Utworzony profil firmy** : z uzupełnionymi danymi (NIP, nazwa, adres)
2. **Przynajmniej jeden obiekt sportowy** : dodany i aktywny
3. **Skonfigurowany harmonogram** : obiekt musi mieć przynajmniej jeden dostępny slot czasowy
4. **Aktywacja profilu przez zespół Spotto** : finalna akceptacja po podpisaniu umowy o współpracy

| Stan firmy | Widoczna w wyszukiwarce? | Może przyjmować płatności? |
|------------|--------------------------|---------------------------|
| Tylko profil (bez obiektów) | ❌ Nie | ❌ Nie |
| Profil + obiekt (bez harmonogramu) | ❌ Nie | ❌ Nie |
| Profil + obiekt + harmonogram (bez aktywacji) | ❌ Nie | ❌ Nie |
| Profil + obiekt + harmonogram + aktywacja | ✅ Tak | ❌ Nie (brak TPay) |
| Wszystko powyżej + TPay | ✅ Tak | ✅ Tak |

> 💡 **Wskazówka**: Spotto **nie blokuje** tworzenia profilu, obiektów ani konfiguracji TPay : możesz przygotować wszystko od razu. Aktywacja profilu przez zespół Spotto następuje po podpisaniu umowy o współpracy i jest ostatnim krokiem przed pojawieniem się w wyszukiwarce.

### Czy TPay jest wymagany do działania firmy?

TPay **nie jest wymagany** do utworzenia profilu, dodania obiektów ani pojawienia się w wyszukiwarce. Jest natomiast **niezbędny do przyjmowania płatności online**.

**Co działa BEZ TPay:**
- ✅ Tworzenie profilu firmy i obiektów
- ✅ Konfiguracja harmonogramu i cen
- ✅ Pojawienie się w wyszukiwarce (jeśli masz obiekty z harmonogramem)
- ✅ Zarządzanie agentami i trenerami
- ✅ Generowanie raportów
- ✅ Konfiguracja KSeF (niezależna od TPay)
- ✅ Tworzenie produktów z opcją „płatne u trenera"

**Co NIE działa BEZ TPay:**
- ❌ Przyjmowanie płatności online za rezerwacje
- ❌ Sprzedaż produktów z opcją „płatne w aplikacji"
- ❌ Przetwarzanie płatności BLIK, kartą i przelewem

### Jakie są wymagania do tworzenia produktów (karnetów, pakietów)?

Aby utworzyć produkt:
1. **Profil firmy** : musi istnieć
2. **Obiekt sportowy** : wymagany, jeśli produkt nie dotyczy wszystkich obiektów (możesz przypisać produkt do wybranych obiektów)
3. **TPay** : wymagany **tylko** jeśli produkt ma być płatny w aplikacji (`Płatne w aplikacji = tak`)

| Typ płatności produktu | Wymaga TPay? | Opis |
|----------------------|-------------|------|
| **Płatne w aplikacji** | ✅ Tak | Klient płaci przez BLIK/kartę/przelew w Spotto |
| **Płatne u trenera** | ❌ Nie | Płatność odbywa się poza aplikacją |
| **Darmowe** | ❌ Nie | Produkt bez opłaty |

### Jak działają firmy podrzędne : co jest wspólne, a co niezależne?

| Element | Wspólny z firmą nadrzędną? | Uwagi |
|---------|---------------------------|-------|
| **Konto TPay** | ✅ Opcjonalnie | Firma podrzędna może korzystać z TPay rodzica |
| **NIP do faktur** | ✅ Opcjonalnie | Faktury mogą być wystawiane na NIP rodzica |
| **Obiekty sportowe** | ❌ Niezależne | Każda firma zarządza własnymi obiektami |
| **Produkty** | ❌ Niezależne | Każda firma tworzy własne produkty |
| **Harmonogramy** | ❌ Niezależne | Każda firma konfiguruje własne grafiki |
| **Trenerzy** | ❌ Niezależne | Trenerzy powiązani osobno z każdą firmą |
| **Agenci** | ❌ Niezależne | Każda firma ma własnych agentów |
| **KSeF** | ❌ Ukryty* | *Jeśli firma podrzędna korzysta z TPay rodzica, sekcja KSeF jest ukryta : e-faktury wystawiane centralnie |

### Jakie są zależności przy współpracy z trenerami?

- Trener musi sam wysłać prośbę o powiązanie : nie możesz go dodać samodzielnie
- Po akceptacji **Ty ustalasz stawkę godzinową** : niezależnie od stawki, jaką trener ustawił w swoim profilu
- Trener oznaczony jako **„Pracownik"** nie może samodzielnie tworzyć treningów
- Trener z uprawnieniem **„Może prowadzić własne treningi"** widzi Twoje obiekty przy tworzeniu zajęć
- Trener może być powiązany z **wieloma firmami** jednocześnie
- Usunięcie powiązania jest **nieodwracalne** : trener musi wysłać nową prośbę

### Czy KSeF wymaga skonfigurowanego TPay?

**Nie** : KSeF i TPay to niezależne integracje. Możesz skonfigurować KSeF bez TPay i odwrotnie. Jedyny wyjątek: firma podrzędna korzystająca z TPay rodzica nie widzi sekcji KSeF (e-faktury wystawiane są centralnie przez firmę nadrzędną).

### Jaka jest kolejność konfiguracji nowej firmy?

Zalecana kolejność (od najważniejszego):

| Krok | Akcja | Efekt |
|------|-------|-------|
| 1 | [Utwórz profil firmy](./how-to-create-profile.md) | Podstawa : bez tego nic nie działa |
| 2 | [Dodaj obiekt sportowy](./how-to-add-facility.md) | Przygotowanie oferty |
| 3 | [Skonfiguruj harmonogram](./how-to-manage-schedule.md) | Ustalenie dostępności terminów |
| 4 | [Skonfiguruj TPay](./how-to-setup-tpay.md) | Umożliwia płatności online : TPay przeprowadza własną weryfikację compliance kontrahenta |
| 5 | [Dodaj produkty](./how-to-manage-products.md) | Karnety i pakiety w Sklepie |
| 6 | [Skonfiguruj KSeF](./how-to-setup-ksef.md) | Automatyczne e-faktury (opcjonalne) |
| 7 | [Zaproś agentów](./how-to-manage-agents.md) | Delegowanie zarządzania (opcjonalne) |
| 8 | Aktywacja przez zespół Spotto | Po podpisaniu umowy o współpracy : firma pojawia się w wyszukiwarce |

> 💡 **Wskazówka**: Kroki 1–7 możesz wykonać w dowolnej kolejności i nie musisz czekać na aktywację. Dzięki temu w momencie podpisania umowy Twoja firma jest gotowa do działania od razu.

---

## Powiązane tematy

- [Rozwiązywanie problemów z płatnościami](../troubleshooting/payments/payment-failed.md)
- [Profil trenera (dla trenerów)](../trainer/README.md)
