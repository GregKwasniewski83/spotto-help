---
title: "Reservation Details"
screen: reservations
role: "User"
difficulty: "Easy"
status: "🟢"
lastUpdated: "2026-03-28"
---
# Reservation Details

## Description

The reservation details view is a full-screen modal that opens after tapping a reservation card. It contains complete information about your reservation.

## View Sections

### Facility Information

| Element | Description |
|---------|-------------|
| **Photo** | Facility avatar or photo |
| **Facility name** | Official name |
| **Location** | Full address with city |
| **Contact** | Phone number and email with quick contact buttons |

![IMG_RES_017 : Facility information section](../../assets/images/reservations/details-facility-info.png)

### Reservation Details

| Element | Description |
|---------|-------------|
| **Date** | Full date in local format (e.g., "Friday, March 28, 2026") |
| **Hours** | List of booked slots (e.g., "10:00 - 11:00 ; 11:00 - 12:00") |
| **Duration** | Total number of hours |
| **Price** | Total reservation cost |
| **Number of people** | Visible for group reservations |

### Time Slots

Each booked slot is displayed as a separate chip:
- **Active** : normal appearance with time
- **Canceled** : strikethrough text, gray color

![IMG_RES_018 : Time slots in details](../../assets/images/reservations/details-time-slots.png)

### Trainer Information (optional)

If a trainer is assigned to the reservation:
- Trainer avatar
- First and last name
- Role ("Professional trainer")
- Trainer service price
- Contact (phone, email)

![IMG_RES_032 : Trainer information section in details](../../assets/images/reservations/details-trainer-info.png)

### Payment Information

| Element | Description |
|---------|-------------|
| **Payment status** | "Paid" (green) or "Awaiting payment" (yellow) |
| **Reservation number** | First 7 characters of the ID |
| **Creation date** | When the reservation was made |

### Action Buttons

Depending on the reservation state, you will see:
- **Pay Now** : if the reservation is unpaid
- **Cancel Partially** : if the reservation has multiple slots
- **Cancel All** : if the reservation qualifies for cancellation

![IMG_RES_033 : Action buttons in reservation details](../../assets/images/reservations/details-action-buttons.png)

## Related

- [How to view reservations](../how-to-view-bookings.md)
- [Reservation statuses](./booking-status.md)
- [How to cancel a reservation](../how-to-cancel-booking.md)

---

**Last updated**: 2026-03-28
