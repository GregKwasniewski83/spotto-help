---
title: "Partial Cancellation"
screen: reservations
role: "User"
difficulty: "Medium"
lastUpdated: "2026-03-28"
---
# Partial Cancellation

## Description

Partial cancellation allows you to cancel selected time slots from a multi-hour reservation while keeping the rest. This is useful when your plans change but you still want to use part of the booked time.

## When It Is Available

Partial cancellation is available when:
- The reservation has **more than one time slot**
- The reservation meets the [cancellation rules](./refund-policy.md) (48h, future date)
- Not all slots except one have already been canceled

## How It Works

### Slot View

After opening partial cancellation, you will see a list of all slots:

| Element | Description |
|---------|-------------|
| **Hour** | Slot start time (e.g., "10:00") |
| **Price** | Cost of that specific slot (total price / number of slots) |
| **Status** | "Active" (can be canceled) or "Canceled" (gray, unavailable) |
| **Selection** | Blue border + checkmark icon for selected slots |

### Limitations

- **You cannot cancel all slots** : use full cancellation for that
- **Canceled slots cannot be restored** : the decision is irreversible
- **At least 1 active slot must remain**

### System Response

After cancellation, you will receive a detailed summary:

| Field | Example |
|-------|---------|
| Canceled slots | 2 |
| Original price | 200 PLN |
| Remaining price | 100 PLN |
| Refund amount | 95 PLN |
| Fee (5%) | 5 PLN |
| New status | "Partial" |

## Reservation Status After Partial Cancellation

- Status changes to **"Partial"** (partial)
- In the reservation details, canceled slots are **shown with strikethrough**

![IMG_RES_031 : Strikethrough slots in reservation details view](../../assets/images/reservations/feat-partial-cancel-crossed-slots.png)
- The price displays as the remaining amount

## Related

- [How to partially cancel : guide](../how-to-partial-cancel.md)
- [How to cancel an entire reservation](../how-to-cancel-booking.md)
- [Refund policy](./refund-policy.md)

---

**Last updated**: 2026-03-28
