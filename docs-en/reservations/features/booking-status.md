---
title: "Reservation Statuses"
screen: reservations
role: "User"
difficulty: "Easy"
status: "🟢"
lastUpdated: "2026-03-28"
---
# Reservation Statuses

## Description

Every reservation in Spotto has an assigned status that indicates its current state. The status is displayed as a color-coded badge on the reservation card and in the details view.

## Status List

![IMG_RES_027 : Color-coded status badges on reservation cards](../../assets/images/reservations/feat-status-badges-list.png)

| Status | Color | Meaning | Can be canceled? |
|--------|-------|---------|------------------|
| **Confirmed** | 🟢 Green | Reservation paid and ready | Yes |
| **Pending** | 🟡 Yellow | Awaiting payment or confirmation | Yes |
| **Active** | 🔵 Blue | Reservation is in progress right now | Yes* |
| **Partial** | 🟡 Yellow | Some slots have been canceled | Yes |
| **Partial refund** | 🟡 Yellow | Refund for canceled slots processed | Yes |
| **Completed** | ⚪ Gray | Reservation fulfilled: visit completed | No |
| **Canceled** | 🔴 Red | Reservation fully canceled | No |

*An active reservation can only be canceled if it meets the 48h rule.

## Reservation Lifecycle

![IMG_RES_028 : Reservation lifecycle diagram](../../assets/images/reservations/feat-status-lifecycle.png)

```
Created -> Pending -> Confirmed -> Active -> Completed
              ↓           ↓          ↓
          Canceled      Partial    Canceled
                          ↓
                    Partial refund
```

## Where You See the Status

- **Reservation list** : color-coded badge on the card
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
