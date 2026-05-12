---
title: "Integracja TPay"
screen: business
role: "Właściciel firmy"
difficulty: "Zaawansowana"
lastUpdated: "2026-03-29"
---

# Integracja TPay

## Opis

TPay to certyfikowana bramka płatnicza umożliwiająca przyjmowanie płatności online od klientów. Konfiguracja TPay jest wymagana, aby klienci mogli płacić za rezerwacje obiektów sportowych i produkty (karnety, pakiety) w aplikacji Spotto.

## Dlaczego TPay jest ważny

Bez skonfigurowanego TPay:
- Klienci **nie mogą płacić** za rezerwacje w aplikacji
- Twoje produkty **nie będą dostępne** do zakupu w Sklepie
- Trenerzy **nie mogą pobierać opłat** za sesje treningowe

## Wymagane dane

Konfiguracja TPay wymaga podania danych rejestrowych firmy:

| Pole | Format | Opis |
|------|--------|------|
| **NIP** | 10 cyfr | Numer identyfikacji podatkowej firmy |
| **E-mail** | adres@firma.pl | Kontaktowy e-mail firmy |
| **Telefon** | numer telefonu | Kontaktowy numer telefonu |
| **REGON** | 9 lub 14 cyfr | Numer REGON z rejestru GUS |
| **KRS** | 10 cyfr | Numer Krajowego Rejestru Sądowego |
| **Forma prawna** | z listy rozwijanej | Typ podmiotu prawnego (np. sp. z o.o., S.A., jednoosobowa działalność) |
| **Kategoria (MCC)** | z listy rozwijanej | Kod kategorii działalności handlowej (Merchant Category Code) |
| **Strona www** | URL | Adres strony internetowej (musi zaczynać się od http:// lub https://) |
| **Imię osoby kontaktowej** | tekst | Imię przedstawiciela firmy |
| **Nazwisko osoby kontaktowej** | tekst | Nazwisko przedstawiciela firmy |

![Formularz konfiguracji TPay : Screenshot #58](../../../assets/images/business/tpay-config-detail.png)

> ⚠️ **Ważne**: Wszystkie pola są wymagane. Nieprawidłowe dane spowodują odrzucenie rejestracji.

## Walidacja danych

System automatycznie sprawdza poprawność danych:
- **NIP** : dokładnie 10 cyfr
- **REGON** : 9 lub 14 cyfr
- **KRS** : dokładnie 10 cyfr
- **E-mail** : prawidłowy format adresu
- **URL** : musi zaczynać się od http:// lub https://

Błędy walidacji są wyświetlane przy odpowiednich polach formularza.

## Automatyczna rejestracja

Po włączeniu opcji **„Automatyczna rejestracja w TPay"** system:
1. Przesyła dane firmy do TPay
2. Tworzy konto sprzedawcy
3. Przypisuje identyfikator sprzedawcy (Merchant ID) do Twojego profilu

Proces aktywacji może trwać do **24 godzin**.

## Metody płatności dla klientów

Po konfiguracji TPay Twoi klienci mogą płacić za pomocą:

| Metoda | Opis |
|--------|------|
| **Karta płatnicza** | Visa, Mastercard i inne |
| **Szybki przelew** | Przelew online z banku klienta |
| **BLIK** | Kod BLIK z aplikacji bankowej |

## Firmy podrzędne a TPay

Firmy podrzędne mogą korzystać z Twojej konfiguracji TPay : nie muszą konfigurować własnego konta. To upraszcza zarządzanie płatnościami w organizacjach z wieloma lokalizacjami. [Więcej o firmach podrzędnych](./child-businesses.md)

## Bezpieczeństwo

- TPay jest certyfikowaną bramką płatniczą zgodną z PCI DSS
- Spotto **nie przechowuje** danych kart klientów
- Wszystkie transakcje są **szyfrowane**
- Dane rejestrowe firmy przesyłane są bezpiecznym kanałem

---

## Powiązane

- [Jak skonfigurować TPay : przewodnik krok po kroku](../how-to-setup-tpay.md)
- [Płatności (perspektywa klienta)](../../shop/features/payments.md)
- [Firmy podrzędne](./child-businesses.md)

---

**Ostatnia aktualizacja**: 2026-03-29
