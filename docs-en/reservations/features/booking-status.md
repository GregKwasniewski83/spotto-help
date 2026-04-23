---
title: "Reservation Statuses"
screen: reservations
role: "User"
difficulty: "Easy"
lastUpdated: "2026-03-28"
---
# Reservation Statuses

## Description

Every reservation in Spotto has an assigned status that indicates its current state.

## Status List

| Status | Meaning | Can be canceled? |
|--------|---------|------------------|
| **Confirmed** | Reservation paid and ready | Yes |
| **Pending** | Awaiting payment or confirmation | Yes |
| **Active** | Reservation is in progress right now | Yes* |
| **Partial** | Some slots have been canceled | Yes |
| **Partial refund** | Refund for canceled slots processed | Yes |
| **Completed** | Reservation fulfilled : visit completed | No |
| **Canceled** | Reservation fully canceled | No |

*An active reservation can only be canceled if it meets the 48h rule.

## Reservation Lifecycle

```
Created -> Pending -> Confirmed -> Active -> Completed
              ↓           ↓          ↓
          Canceled      Partial    Canceled
                          ↓
                    Partial refund
```

## Where You See the Status

- **Reservation list** : badge on the card
- **Reservation details** : in the "Reservation information" section
- **Pending payments** : separate section for "Pending" status

## What to Do Based on Status

| Status | Recommended Action |
|--------|-------------------|
| Pending | [Complete the payment](../how-to-pay-pending.md) |
| Confirmed | Prepare for your visit |
| Partial | Check which hours are still active |
| Canceled | You can make a new reservation |

## Related

- [How to view reservations](../how-to-view-bookings.md)
- [Reservation details](./reservation-details.md)
- [Refund policy](./refund-policy.md)

---

**Last updated**: 2026-03-28
