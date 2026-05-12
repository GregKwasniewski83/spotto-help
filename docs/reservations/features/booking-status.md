---
title: "Statusy rezerwacji"
screen: reservations
role: "Użytkownik"
difficulty: "Łatwa"
lastUpdated: "2026-03-28"
---
# Statusy rezerwacji

## Opis

Każda rezerwacja w Spotto ma przypisany status, który informuje o jej aktualnym stanie.

## Lista statusów

| Status | Znaczenie | Można anulować? |
|--------|-----------|-----------------|
| **Potwierdzona** | Rezerwacja opłacona i gotowa | Tak |
| **Oczekująca** | Oczekuje na płatność lub potwierdzenie | Tak |
| **Aktywna** | Rezerwacja trwa właśnie teraz | Tak* |
| **Częściowa** | Część slotów została anulowana | Tak |
| **Częściowy zwrot** | Zwrot za anulowane sloty przetworzony | Tak |
| **Zakończona** | Rezerwacja zrealizowana : wizyta odbyta | Nie |
| **Anulowana** | Rezerwacja w pełni anulowana | Nie |

*Aktywna rezerwacja może być anulowana tylko jeśli spełnia zasadę 48h.

## Cykl życia rezerwacji

```
Utworzona → Oczekująca → Potwierdzona → Aktywna → Zakończona
                ↓              ↓            ↓
            Anulowana      Częściowa    Anulowana
                           ↓
                     Częściowy zwrot
```

## Gdzie widzisz status

- **Lista rezerwacji** : plakietka na karcie
- **Szczegóły rezerwacji** : w sekcji „Informacje o rezerwacji"
- **Oczekujące płatności** : osobna sekcja dla statusu „Oczekująca"

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
