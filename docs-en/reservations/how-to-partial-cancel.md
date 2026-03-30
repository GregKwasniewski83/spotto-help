---
title: "How to partially cancel a reservation"
screen: reservations
role: "User"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-28"
prerequisites:
  - "reservations/how-to-view-bookings"
---
# How to partially cancel a reservation

**Screen**: Reservations
**Role**: User
**Difficulty**: Medium

## Overview

If you booked a facility for several hours but want to give up some of them, you can cancel selected time slots while keeping the rest of the reservation. You will receive a refund proportional to the canceled hours.

---

## Before You Start

- The reservation must have **more than one time slot**
- You cannot cancel **all** slots (use full cancellation for that)
- The same rules as full cancellation apply (48h, future date)

---

## Steps

### Step 1: Open reservation details

On the Reservations screen, tap the card of the reservation you want to partially cancel.

### Step 2: Tap "Cancel Partially"

In the details view, tap the **Cancel Partially** button. The button is only visible for reservations with multiple slots.

![IMG_RES_010 : Partial cancellation button](../../assets/images/reservations/partial-cancel-button.png)

### Step 3: Select slots to cancel

A screen will open with a list of all booked hours. Each slot shows:

- **Hour** : e.g., "10:00"
- **Price** : cost of that slot
- **Status** : "Active" or "Canceled" (if previously canceled)

Tap the slots you want to cancel. Selected slots will be highlighted with a blue border and a checkmark icon.

![IMG_RES_011 : Selecting slots to cancel](../../assets/images/reservations/select-slots.png)

> ⚠️ **Important**: Already canceled slots (gray) cannot be selected again. You must leave at least one active slot.

### Step 4: Review the summary

At the bottom of the screen you will see:
- Number of selected slots
- Total price of canceled slots

Tap **Cancel Selected**.

### Step 5: Confirm in the confirmation dialog

An overlay will appear with a confirmation containing:
- Number of slots to cancel
- **Estimated refund** (95% of value: after deducting the 5% fee)

![IMG_RES_012 : Partial cancellation confirmation](../../assets/images/reservations/partial-cancel-confirm.png)

Tap **Confirm** to cancel the selected slots.

### Step 6: View the summary

After processing, you will see a summary:

| Information | Example |
|-------------|---------|
| Canceled slots | 2 of 4 |
| Original price | 200 PLN |
| Remaining price | 100 PLN |
| Refund amount | 95 PLN |
| Cancellation fee | 5% (5 PLN) |

![IMG_RES_013 : Partial cancellation summary](../../assets/images/reservations/partial-cancel-summary.png)

> 💡 The dialog will close automatically after 3 seconds.

---

## Verification

Partial cancellation was successful if:
- You see a summary with the refund amount
- Reservation status changed to "Partial"
- Canceled slots are shown with strikethrough in the details

---

## Troubleshooting

### Problem: I don't see the "Cancel Partially" button
**Solution**: The button appears only when the reservation has more than one time slot. If you have a one-hour reservation, use [full cancellation](./how-to-cancel-booking.md).

### Problem: I can't select a slot
**Solution**: The slot is probably already canceled (gray color). You can only cancel active slots.

---

## Related Topics

- [How to cancel a reservation (full)](./how-to-cancel-booking.md)
- [Cancellation and refund policy](./features/refund-policy.md)
- [Partial cancellation : details](./features/partial-cancellation.md)

---

**Last updated**: 2026-03-28
