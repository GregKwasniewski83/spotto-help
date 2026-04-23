---
title: "Jak skonfigurować TPay"
screen: business
role: "Właściciel firmy"
difficulty: "Zaawansowana"
lastUpdated: "2026-03-29"
prerequisites:
  - "business/how-to-create-profile"
---

# Jak skonfigurować TPay

**Ekran**: Biznes
**Rola**: Właściciel firmy
**Trudność**: Zaawansowana

## Przegląd

TPay to bramka płatnicza, która umożliwia Twoim klientom płacenie za rezerwacje i produkty online. Konfiguracja TPay wymaga podania danych rejestrowych firmy.

---

## Zanim zaczniesz

- Musisz mieć [utworzony profil firmy](./how-to-create-profile.md)
- Przygotuj dane: NIP, REGON, KRS, adres strony internetowej
- Dane osoby kontaktowej (imię, nazwisko)

---

## Kroki

### Krok 1: Otwórz edycję profilu firmy

Na ekranie Biznes dotknij przycisku edycji profilu. Przewiń do sekcji **Dane TPay**.

![Sekcja TPay : Screenshot #26](../../assets/images/business/tpay-section.png)

### Krok 2: Wypełnij wymagane dane

| Pole | Opis | Wymagane |
|------|------|----------|
| **NIP** | Numer identyfikacji podatkowej | Tak |
| **E-mail** | E-mail firmowy | Tak |
| **Telefon** | Numer kontaktowy | Tak |
| **REGON** | Numer REGON (9 lub 14 cyfr) | Tak |
| **KRS** | Numer KRS (10 cyfr) | Tak |
| **Forma prawna** | Wybierz z listy rozwijanej | Tak |
| **Kategoria (MCC)** | Kod kategorii działalności | Tak |
| **Strona internetowa** | Adres URL (http:// lub https://) | Tak |
| **Imię osoby kontaktowej** | Imię przedstawiciela | Tak |
| **Nazwisko osoby kontaktowej** | Nazwisko przedstawiciela | Tak |

![Formularz danych TPay : Screenshot #27](../../assets/images/business/tpay-form.png)

### Krok 3: Włącz automatyczną rejestrację

Przełącz opcję **Automatyczna rejestracja w TPay** : system automatycznie utworzy konto sprzedawcy na podstawie podanych danych.

### Krok 4: Zapisz profil

Dotknij **Zapisz**. Dane zostaną zweryfikowane i przesłane do systemu TPay.

---

## Weryfikacja

Konfiguracja TPay jest prawidłowa, gdy:
- Klienci mogą płacić za rezerwacje Twoich obiektów
- Klienci mogą kupować Twoje produkty w Sklepie

---

## Rozwiązywanie problemów

### Problem: Nie mogę zapisać danych TPay
**Rozwiązanie**: Sprawdź formaty:
- NIP: dokładnie 10 cyfr
- REGON: 9 lub 14 cyfr
- KRS: 10 cyfr
- URL: musi zaczynać się od http:// lub https://

### Problem: Klienci nie mogą płacić
**Rozwiązanie**: Upewnij się, że wszystkie pola TPay są wypełnione i profil jest zapisany. Proces aktywacji konta TPay może trwać do 24 godzin.

---

## Powiązane tematy

- [Integracja TPay : szczegóły](./features/tpay-integration.md)
- [Jak skonfigurować KSeF](./how-to-setup-ksef.md)
- [Płatności w Sklepie](../shop/features/payments.md)

---

**Ostatnia aktualizacja**: 2026-03-29
