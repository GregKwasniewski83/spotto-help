---
title: "Zarządzanie rolami"
screen: profile
role: "Wszystkie"
difficulty: "Łatwa"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Zarządzanie rolami

## Opis

System ról w Spotto pozwala aktywować różne funkcje aplikacji w zależności od tego, kim jesteś : użytkownikem, właścicielem firmy czy trenerem. Każda rola odblokowuje osobną zakładkę i zestaw funkcji. Możesz mieć aktywne wszystkie trzy role jednocześnie.

## Dostępne role

### Użytkownik (Użytkownik)

| Właściwość | Wartość |
|------------|--------|
| **Status** | Zawsze aktywny : nie można wyłączyć |
| **Regulamin** | Musi być zaakceptowany przy rejestracji |
| **Zakładki** | Home, Rezerwacje, Sklep, Profil |

**Funkcje roli Użytkownik:**
- Wyszukiwanie i przeglądanie obiektów sportowych
- Rezerwacja obiektów (korty, sale, strzelnice)
- Zarządzanie ulubionymi obiektami
- Przeglądanie i zakup produktów w Sklepie (karnety, pakiety)
- Udział w treningach prowadzonych przez trenerów
- Przeglądanie historii rezerwacji i zakupów

### Biznes (Właściciel firmy)

| Właściwość | Wartość |
|------------|--------|
| **Status** | Opcjonalny : możesz włączyć/wyłączyć |
| **Regulamin** | Wymagany przy aktywacji roli |
| **Zakładka** | [Biznes](../../business/README.md) |

**Funkcje roli Biznes:**
- Tworzenie i zarządzanie profilem firmy
- Dodawanie i konfigurowanie obiektów sportowych
- Zarządzanie grafikami i cenami
- Konfiguracja płatności online (TPay)
- Zarządzanie agentami i trenerami
- Tworzenie produktów (karnety, pakiety)
- Generowanie raportów miesięcznych
- Integracja z KSeF (e-faktury)

### Trener

| Właściwość | Wartość |
|------------|--------|
| **Status** | Opcjonalny : możesz włączyć/wyłączyć |
| **Regulamin** | Wymagany przy aktywacji roli |
| **Zakładka** | [Trener](../../trainer/README.md) |

**Funkcje roli Trener:**
- Tworzenie profilu trenerskiego z opisem i specjalizacjami
- Nawiązywanie współpracy z firmami sportowymi
- Tworzenie i zarządzanie treningami
- Zarządzanie uczestnikami zajęć
- Konfiguracja harmonogramu dostępności
- Ustawianie stawek godzinowych

## Przełączanie ról

Aby włączyć lub wyłączyć rolę:

1. Przejdź do **Profil** → **Ustawienia**
2. Znajdź sekcję **Role**
3. Przełącz przełącznik przy wybranej roli
4. Przy pierwszym włączeniu : zaakceptuj regulamin

![Zarządzanie rolami : Screenshot #61](../../../assets/images/profile/role-management-detail.png)

> 💡 **Wskazówka**: Wyłączenie roli nie powoduje utraty danych. Jeśli wyłączysz rolę Biznes, Twoja firma i obiekty pozostają w systemie : po ponownym włączeniu wszystko wróci.

## Regulaminy

Każda rola ma osobny regulamin, który musisz zaakceptować:

| Regulamin | Kiedy wymagany | Można odrzucić? |
|-----------|---------------|-----------------|
| **Regulamin Użytkownika** | Przy rejestracji konta | Nie : wymagany do korzystania z aplikacji |
| **Regulamin Biznesu** | Przy włączeniu roli Biznes | Tak : rola nie zostanie aktywowana |
| **Regulamin Trenera** | Przy włączeniu roli Trener | Tak : rola nie zostanie aktywowana |

Regulaminy można rozwinąć i przeczytać bezpośrednio w aplikacji przed akceptacją. Treść regulaminów może się zmieniać : aplikacja poinformuje Cię, gdy pojawi się nowa wersja wymagająca ponownej akceptacji.

## Co się dzieje przy wyłączeniu roli

| Rola | Efekt wyłączenia |
|------|-----------------|
| **Biznes** | Zakładka Biznes znika z nawigacji. Firma, obiekty i produkty pozostają w systemie, ale nie możesz nimi zarządzać do ponownego włączenia |
| **Trener** | Zakładka Trener znika z nawigacji. Profil trenerski i powiązania z firmami pozostają, ale nie możesz tworzyć nowych treningów |

> ⚠️ **Ważne**: Rola Użytkownika jest nieodłączną częścią konta i nie można jej wyłączyć.

---

## Powiązane

- [Jak zarządzać rolami : przewodnik](../how-to-manage-roles.md)
- [Ustawienia konta](./account-settings.md)
- [Ekran Biznes](../../business/README.md)
- [Ekran Trener](../../trainer/README.md)

---

**Ostatnia aktualizacja**: 2026-03-29
