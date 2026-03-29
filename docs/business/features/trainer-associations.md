---
title: "Powiązania z trenerami"
screen: business
role: "Właściciel firmy"
difficulty: "Średnia"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Powiązania z trenerami

## Opis

System powiązań z trenerami pozwala zarządzać współpracą z trenerami, którzy prowadzą zajęcia w Twoich obiektach sportowych. Możesz akceptować lub odrzucać prośby trenerów, ustawiać stawki godzinowe, nadawać uprawnienia i kontrolować, co trenerzy mogą robić w Twoich obiektach.

## Jak działa współpraca

1. **Trener wyszukuje Twoją firmę** w aplikacji i wysyła prośbę o współpracę
2. **Ty otrzymujesz prośbę** w sekcji „Trenerzy" na ekranie Biznes
3. **Konfigurujesz stawkę i uprawnienia** przed akceptacją
4. **Akceptujesz** — trener może prowadzić zajęcia w Twoich obiektach

## Statusy powiązań

| Status | Kolor | Opis |
|--------|-------|------|
| **Oczekujące** | Żółty/pomarańczowy | Trener wysłał prośbę — czeka na Twoją decyzję |
| **Potwierdzone** | Zielony | Współpraca aktywna — trener prowadzi zajęcia |
| **Odrzucone** | Czerwony | Prośba odrzucona |

![Lista powiązań z trenerami — Screenshot #59](../../../assets/images/business/trainer-associations-detail.png)

## Stawki godzinowe

Dla każdego trenera ustalasz indywidualną stawkę za godzinę pracy:

| Pole | Opis |
|------|------|
| **Stawka netto** | Cena za godzinę bez VAT (w PLN) |
| **Stawka VAT** | Wybierz: 0%, 8% lub 23% |
| **Stawka brutto** | Obliczana automatycznie na podstawie netto + VAT |

System obsługuje **dwukierunkowe przeliczanie**:
- Wpisz netto → brutto obliczy się automatycznie
- Wpisz brutto → netto obliczy się automatycznie
- Zmiana VAT → automatycznie aktualizuje drugą wartość

> 💡 **Wskazówka**: Stawka ustawiona przez Ciebie jest niezależna od stawki, jaką trener ustawił w swoim profilu. To Ty decydujesz, ile płacisz trenerowi za godzinę.

## Uprawnienia trenera

Dla każdego potwierdzonego trenera możesz ustawić trzy uprawnienia:

| Uprawnienie | Opis | Domyślnie |
|-------------|------|-----------|
| **Może prowadzić własne treningi** | Trener samodzielnie tworzy i zarządza treningami w Twoich obiektach | Wyłączone |
| **Pracownik** | Trener jest Twoim pracownikiem etatowym (nie może samodzielnie tworzyć treningów) | Wyłączone |
| **Maks. liczba uczestników** | Limit osób na jedno zajęcie prowadzone przez tego trenera | Brak limitu |

> ⚠️ **Ważne**: Trener oznaczony jako „Pracownik" **nie może** samodzielnie tworzyć treningów — muszą być tworzone po stronie firmy.

## Informacje o trenerze

Dla każdego powiązanego trenera widzisz:
- **Avatar i nazwa** — zdjęcie profilowe i imię trenera
- **Adres e-mail** — dane kontaktowe
- **Data prośby** — kiedy trener wysłał prośbę o współpracę
- **Data potwierdzenia** — kiedy zaakceptowałeś/aś prośbę
- **Aktualne stawki** — netto, VAT, brutto
- **Aktualne uprawnienia** — etykiety przy profilu trenera

## Zarządzanie istniejącymi powiązaniami

Dla potwierdzonych trenerów możesz w dowolnym momencie:
- **Zmienić stawkę** — zaktualizuj cenę za godzinę (netto lub brutto)
- **Zmienić uprawnienia** — dostosuj, co trener może robić
- **Usunąć powiązanie** — zakończ współpracę z trenerem

> ⚠️ **Ważne**: Usunięcie powiązania jest nieodwracalne. Trener traci dostęp do Twoich obiektów. Aby wznowić współpracę, trener musi wysłać nową prośbę.

---

## Powiązane

- [Jak zarządzać trenerami — przewodnik krok po kroku](../how-to-manage-trainers.md)
- [Profil trenera (dla trenerów)](../../trainer/README.md)
- [Zarządzanie agentami](./agent-management.md)

---

**Ostatnia aktualizacja**: 2026-03-29
