---
title: "Sports Facility Management"
screen: business
role: "Business Owner"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Sports Facility Management

## Description

Sports facilities are venues (courts, shooting ranges, gyms, etc.) that you make available to customers for booking. Each facility has its own name, type, price, capacity, and availability schedule.

## Facility Data

| Field | Description |
|-------|-------------|
| **Name** | Facility name (e.g., "Squash court #1") |
| **Type** | Facility type from a predefined list |
| **Description** | Description visible to customers |
| **Address** | Street, city, postal code |
| **Net price** | Price per hour excluding VAT |
| **VAT rate** | 0%, 5%, 8%, 23%, or EX (exempt) |
| **Gross price** | Calculated automatically (net + VAT) |
| **Min. number of slots** | Minimum booking length |
| **Max. users** | Facility capacity |
| **Price per person** | Whether the price is charged per person |

## Pricing and VAT

The system automatically converts prices:
- Enter the net price -> gross is calculated automatically
- Enter the gross price -> net is calculated automatically
- Changing the VAT rate automatically updates the other price

Available VAT rates:

| Rate | Description |
|------|-------------|
| **0%** | Zero rate |
| **5%** | Reduced rate |
| **8%** | Reduced rate (sports services) |
| **23%** | Standard rate |
| **EX** | VAT exempt |

## Facility Schedule

Each facility has its own 24-hour schedule (00:00 -- 23:00). Slots can have the following status:
- **Available**: customer can book
- **Booked**: already occupied
- **Unavailable**: facility closed

## Facility Floor Plan

You can add a facility floor plan (PDF or image) so that customers can see the venue layout.

---

## Related

- [How to add a facility: guide](../how-to-add-facility.md)
- [Business Profile](./business-profile.md)

---

**Last Updated**: 2026-03-29
