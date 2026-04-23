---
title: "How to Set Up TPay"
screen: business
role: "Business Owner"
difficulty: "Advanced"
lastUpdated: "2026-03-29"
prerequisites:
  - "business/how-to-create-profile"
---

# How to Set Up TPay

**Screen**: Business
**Role**: Business Owner
**Difficulty**: Advanced

## Overview

TPay is a payment gateway that enables your customers to pay for reservations and products online. TPay configuration requires providing your company's registration data.

---

## Before You Start

- You must have a [business profile created](./how-to-create-profile.md)
- Prepare the data: tax ID (NIP), REGON, KRS, website address
- Contact person details (first name, last name)

---

## Steps

### Step 1: Open Business Profile Edit

On the Business screen, tap the profile edit button. Scroll to the **TPay Data** section.

![TPay section: Screenshot #26](../../assets/images/business/tpay-section.png)

### Step 2: Fill in the Required Data

| Field | Description | Required |
|-------|-------------|----------|
| **Tax ID (NIP)** | Tax identification number | Yes |
| **Email** | Company email | Yes |
| **Phone** | Contact number | Yes |
| **REGON** | REGON number (9 or 14 digits) | Yes |
| **KRS** | KRS number (10 digits) | Yes |
| **Legal form** | Choose from the dropdown list | Yes |
| **Category (MCC)** | Business activity category code | Yes |
| **Website** | URL address (http:// or https://) | Yes |
| **Contact person first name** | Representative's first name | Yes |
| **Contact person last name** | Representative's last name | Yes |

![TPay data form: Screenshot #27](../../assets/images/business/tpay-form.png)

### Step 3: Enable Automatic Registration

Toggle the **Automatic TPay registration** option: the system will automatically create a merchant account based on the provided data.

### Step 4: Save the Profile

Tap **Save**. The data will be verified and submitted to the TPay system.

---

## Verification

TPay configuration is correct when:
- Customers can pay for reservations at your facilities
- Customers can purchase your products in the Shop

---

## Troubleshooting

### Problem: I can't save TPay data
**Solution**: Check the formats:
- NIP: exactly 10 digits
- REGON: 9 or 14 digits
- KRS: 10 digits
- URL: must start with http:// or https://

### Problem: Customers can't pay
**Solution**: Make sure all TPay fields are filled in and the profile is saved. The TPay account activation process can take up to 24 hours.

---

## Related Topics

- [TPay Integration: details](./features/tpay-integration.md)
- [How to set up KSeF](./how-to-setup-ksef.md)
- [Shop payments](../shop/features/payments.md)

---

**Last Updated**: 2026-03-29
