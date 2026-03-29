---
title: "Jak skonfigurować KSeF"
screen: business
role: "Właściciel firmy"
difficulty: "Zaawansowana"
status: "🟢"
lastUpdated: "2026-03-29"
prerequisites:
  - "business/how-to-create-profile"
  - "business/how-to-setup-tpay"
---

# Jak skonfigurować KSeF

**Ekran**: Biznes
**Rola**: Właściciel firmy
**Trudność**: Zaawansowana

## Przegląd

KSeF (Krajowy System e-Faktur) to system elektronicznego fakturowania prowadzony przez Ministerstwo Finansów. Integracja z KSeF umożliwia automatyczne wystawianie i przesyłanie e-faktur.

Spotto obsługuje dwie metody autoryzacji w KSeF:
- **Token autoryzacyjny** : szybka konfiguracja, idealna na start
- **Certyfikat kwalifikowany** : wyższy poziom bezpieczeństwa, zalecany do użytku produkcyjnego

---

## Zanim zaczniesz

- Musisz mieć [utworzony profil firmy](./how-to-create-profile.md)
- Wybierz metodę autoryzacji i przygotuj odpowiednie dane (patrz tabela poniżej)
- Zdecyduj, czy chcesz najpierw przetestować połączenie w środowisku testowym

| Metoda | Co potrzebujesz | Gdzie uzyskać |
|--------|----------------|---------------|
| **Token** | Token autoryzacyjny (min. 20 znaków) | Strona KSeF Ministerstwa Finansów |
| **Certyfikat** | Plik certyfikatu (.pfx lub .p12) + hasło | Kwalifikowany dostawca usług zaufania |

> ⚠️ **Ważne**: KSeF nie jest dostępny dla firm podrzędnych korzystających z TPay firmy nadrzędnej.

---

## Metoda 1: Konfiguracja za pomocą tokenu

Token autoryzacyjny to najprostsza metoda połączenia z KSeF. Wygenerujesz go na stronie Ministerstwa Finansów i wkleisz w aplikacji.

### Krok 1: Znajdź sekcję KSeF

Na ekranie Biznes znajdź kartę **Status KSeF**. Jeśli KSeF nie jest skonfigurowany, zobaczysz komunikat „Nie skonfigurowano".

![Karta statusu KSeF : Screenshot #28](../../assets/images/business/ksef-status-card.png)

### Krok 2: Otwórz konfigurację

Dotknij przycisku **Konfiguruj** na karcie KSeF. Otworzy się okno konfiguracji.

### Krok 3: Wybierz metodę „Token"

W oknie konfiguracji wybierz zakładkę lub opcję **Token**.

### Krok 4: Wprowadź token

W polu **Token KSeF** wklej token autoryzacyjny uzyskany z systemu KSeF.

> 💡 **Wskazówka**: Token możesz skopiować ze strony KSeF i wkleić w aplikacji. Dane są bezpieczne : token nie jest przechowywany lokalnie po zapisaniu. Token musi mieć minimum 20 znaków.

### Krok 5: Wybierz środowisko

Wybierz środowisko pracy:

| Środowisko | Opis |
|------------|------|
| **Testowe** | Środowisko do testowania : faktury nie są wysyłane naprawdę |
| **Produkcyjne** | Prawdziwe e-faktury wysyłane do systemu KSeF |

> 💡 **Wskazówka**: Zalecamy rozpoczęcie od środowiska testowego, aby upewnić się, że wszystko działa prawidłowo.

![Konfiguracja KSeF tokenem : Screenshot #29](../../assets/images/business/ksef-config-token.png)

### Krok 6: Zapisz i przetestuj

Dotknij **Zapisz**. System automatycznie przetestuje połączenie z KSeF i wyświetli wynik:
- **Zielona ikona** : połączenie działa prawidłowo
- **Czerwona ikona** : sprawdź token i spróbuj ponownie

---

## Metoda 2: Konfiguracja za pomocą certyfikatu

Certyfikat kwalifikowany zapewnia wyższy poziom bezpieczeństwa i jest zalecany do długoterminowego użytku produkcyjnego. W odróżnieniu od tokenu, certyfikat nie wymaga regularnego odnawiania (do momentu wygaśnięcia certyfikatu).

### Krok 1: Znajdź sekcję KSeF

Na ekranie Biznes znajdź kartę **Status KSeF** i dotknij **Konfiguruj**.

### Krok 2: Wybierz metodę „Certyfikat"

W oknie konfiguracji wybierz zakładkę lub opcję **Certyfikat**.

![Konfiguracja KSeF certyfikatem : Screenshot #55](../../assets/images/business/ksef-config-certificate.png)

### Krok 3: Wgraj plik certyfikatu

Dotknij przycisku **Wybierz plik certyfikatu** i wskaż plik certyfikatu na urządzeniu.

Obsługiwane formaty:

| Format | Rozszerzenie | Opis |
|--------|-------------|------|
| **PKCS#12** | .pfx, .p12 | Najczęściej używany format, zawiera klucz prywatny i certyfikat |

> ⚠️ **Ważne**: Upewnij się, że plik certyfikatu pochodzi od kwalifikowanego dostawcy usług zaufania (np. Certum, KIR, Sigillum, PWPW, EuroCert).

### Krok 4: Wprowadź hasło certyfikatu

Wpisz hasło zabezpieczające plik certyfikatu. Jest to hasło, które ustawiono podczas eksportu certyfikatu.

> 💡 **Wskazówka**: Hasło jest używane jednorazowo do odczytania certyfikatu i nie jest przechowywane w aplikacji.

### Krok 5: Wybierz środowisko

Tak samo jak przy metodzie tokenowej : wybierz **Testowe** lub **Produkcyjne**.

### Krok 6: Zapisz i przetestuj

Dotknij **Zapisz**. System:
1. Odczyta certyfikat z pliku
2. Zweryfikuje jego ważność
3. Przetestuje połączenie z KSeF
4. Wyświetli wynik testu

---

## Która metoda jest lepsza?

| Kryterium | Token | Certyfikat |
|-----------|-------|------------|
| **Łatwość konfiguracji** | Prostsza : skopiuj i wklej | Wymaga pliku certyfikatu |
| **Bezpieczeństwo** | Standardowe | Wyższe : klucz kryptograficzny |
| **Ważność** | Ograniczona : wymaga odnawiania | Ważny do daty wygaśnięcia certyfikatu |
| **Zalecane użycie** | Testowanie, małe firmy | Produkcja, większe firmy |
| **Wymagania** | Konto na stronie KSeF | Certyfikat kwalifikowany |

> 💡 **Wskazówka**: Możesz zacząć od tokenu w środowisku testowym, a później przejść na certyfikat w produkcji.

---

## Zarządzanie KSeF

Po konfiguracji (niezależnie od wybranej metody) na karcie KSeF zobaczysz:
- **Status konfiguracji** : Skonfigurowano / Nie skonfigurowano
- **Metoda autoryzacji** : Token lub Certyfikat
- **Środowisko** : Testowe lub Produkcyjne (etykieta)
- **Ostatnia synchronizacja** : data i godzina
- **Przełącznik** : włącz/wyłącz integrację KSeF

### Zmiana metody autoryzacji

Aby zmienić metodę z tokenu na certyfikat (lub odwrotnie):
1. Dotknij **Rekonfiguruj** na karcie KSeF
2. Wybierz nową metodę
3. Wprowadź odpowiednie dane
4. Zapisz : nowa konfiguracja zastąpi poprzednią

---

## Rozwiązywanie problemów

### Problem: Test połączenia z tokenem nie powiódł się
**Rozwiązanie**: Sprawdź, czy token jest prawidłowy i aktualny. Tokeny KSeF mają datę ważności : wygeneruj nowy na stronie KSeF Ministerstwa Finansów.

### Problem: Błąd „Token wydaje się nieprawidłowy"
**Rozwiązanie**: Token musi mieć minimum 20 znaków. Upewnij się, że skopiowałeś/aś cały token bez obcinania.

### Problem: Certyfikat nie jest akceptowany
**Rozwiązanie**:
1. Sprawdź, czy plik ma format .pfx lub .p12
2. Upewnij się, że hasło jest prawidłowe
3. Sprawdź datę ważności certyfikatu : wygasły certyfikat nie zostanie zaakceptowany
4. Certyfikat musi pochodzić od kwalifikowanego dostawcy usług zaufania

### Problem: Błąd hasła certyfikatu
**Rozwiązanie**: Hasło dotyczy pliku certyfikatu (ustawione podczas eksportu), a nie hasła do konta u dostawcy. Jeśli nie pamiętasz hasła, wyeksportuj certyfikat ponownie z nowym hasłem.

### Problem: Nie widzę sekcji KSeF
**Rozwiązanie**: Sekcja KSeF jest ukryta, jeśli Twoja firma jest firmą podrzędną korzystającą z TPay firmy nadrzędnej.

---

## Powiązane tematy

- [Integracja KSeF : szczegóły](./features/ksef-integration.md)
- [Jak skonfigurować TPay](./how-to-setup-tpay.md)

---

**Ostatnia aktualizacja**: 2026-03-29
