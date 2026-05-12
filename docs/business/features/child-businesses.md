---
title: "Firmy podrzędne"
screen: business
role: "Właściciel firmy"
difficulty: "Zaawansowana"
lastUpdated: "2026-03-29"
---

# Firmy podrzędne

## Opis

System firm podrzędnych umożliwia zarządzanie strukturą organizacyjną z firmą nadrzędną (matką) i filiami. Firma podrzędna może korzystać z konfiguracji płatności (TPay) i danych podatkowych (NIP) firmy nadrzędnej, co upraszcza zarządzanie wieloma lokalizacjami.

## Kiedy używać firm podrzędnych

Firmy podrzędne są przydatne, gdy:
- Masz **wiele lokalizacji** (np. sieć siłowni) i chcesz zarządzać nimi centralnie
- Chcesz, aby filie **korzystały z jednego konta TPay** : nie musisz konfigurować płatności osobno dla każdej
- Chcesz wystawiać **faktury z jednego NIP** dla całej organizacji

## Jak działa powiązanie

```
Firma nadrzędna (matka)
├── Firma podrzędna A (filia Kraków)
├── Firma podrzędna B (filia Warszawa)
└── Firma podrzędna C (filia Wrocław)
```

1. **Firma podrzędna** wysyła prośbę o powiązanie do firmy nadrzędnej
2. **Firma nadrzędna** akceptuje lub odrzuca prośbę
3. Po akceptacji firma nadrzędna konfiguruje **uprawnienia** dla filii

## Uprawnienia

Firma nadrzędna może nadać firmie podrzędnej dwa niezależne uprawnienia:

| Uprawnienie | Opis | Efekt |
|-------------|------|-------|
| **Używaj TPay rodzica** | Firma podrzędna korzysta z bramki płatniczej firmy nadrzędnej | Klienci płacą przez konto TPay matki. Firma podrzędna nie musi konfigurować własnego TPay |
| **Używaj NIP rodzica do faktur** | Faktury wystawiane z NIP firmy nadrzędnej | Wszystkie faktury wystawiane centralnie na jeden NIP |

> ⚠️ **Ważne**: Gdy firma podrzędna korzysta z TPay rodzica, sekcja KSeF jest dla niej automatycznie ukryta : e-faktury wystawiane są z poziomu firmy nadrzędnej.

## Statusy powiązań

| Status | Kolor | Opis |
|--------|-------|------|
| **Oczekujące** | Żółty | Firma podrzędna wysłała prośbę, czeka na decyzję firmy nadrzędnej |
| **Potwierdzone** | Zielony | Powiązanie aktywne, uprawnienia działają |
| **Odrzucone** | Czerwony | Prośba została odrzucona przez firmę nadrzędną |

## Widok firmy nadrzędnej

Na ekranie Biznes firmy nadrzędnej w sekcji **Firmy podrzędne** widzisz:

- Avatar, nazwę, miasto i e-mail każdej firmy podrzędnej
- Status powiązania (oczekujące / potwierdzone)
- Aktualne uprawnienia (ikony TPay i NIP)
- Przyciski akcji: zaakceptuj, odrzuć, zmień uprawnienia, usuń

![Lista firm podrzędnych : Screenshot #57](../../../assets/images/business/child-businesses-detail.png)

## Widok firmy podrzędnej

Jeśli Twoja firma jest firmą podrzędną, na ekranie Biznes zobaczysz sekcję **Status powiązania z firmą nadrzędną**:
- Nazwa firmy nadrzędnej
- Status powiązania
- Data prośby i potwierdzenia
- Przyciski: wyślij ponownie e-mail, anuluj prośbę

## Zmiana i usunięcie powiązania

- **Zmiana uprawnień** : firma nadrzędna może w dowolnym momencie zmienić uprawnienia (włączyć/wyłączyć TPay, NIP)
- **Usunięcie** : firma nadrzędna może usunąć powiązanie. Firma podrzędna traci dostęp do TPay i NIP rodzica i musi skonfigurować własne

---

## Powiązane

- [Jak zarządzać firmami podrzędnymi : przewodnik krok po kroku](../how-to-manage-child-businesses.md)
- [Integracja TPay](./tpay-integration.md)
- [Integracja KSeF](./ksef-integration.md)

---

**Ostatnia aktualizacja**: 2026-03-29
