---
title: "TPay Integration"
screen: business
role: "Business Owner"
difficulty: "Advanced"
lastUpdated: "2026-03-29"
---

# TPay Integration

## Description

TPay is a certified payment gateway that enables accepting online payments from customers. TPay configuration is required for customers to be able to pay for sports facility bookings and products (passes, packages) in the Spotto app.

## Why TPay Is Important

Without TPay configured:
- Customers **cannot pay** for bookings in the app
- Your products **will not be available** for purchase in the Shop
- Trainers **cannot collect fees** for training sessions

## Required Data

TPay configuration requires providing company registration data:

| Field | Format | Description |
|-------|--------|-------------|
| **NIP** | 10 digits | Company tax identification number |
| **Email** | address@company.pl | Company contact email |
| **Phone** | phone number | Company contact phone number |
| **REGON** | 9 or 14 digits | REGON number from the GUS registry |
| **KRS** | 10 digits | National Court Register number |
| **Legal form** | from dropdown list | Legal entity type (e.g., LLC, joint-stock company, sole proprietorship) |
| **Category (MCC)** | from dropdown list | Merchant Category Code |
| **Website** | URL | Website address (must start with http:// or https://) |
| **Contact person first name** | text | Company representative's first name |
| **Contact person last name** | text | Company representative's last name |

![TPay configuration form: Screenshot #58](../../../assets/images/business/tpay-config-detail.png)

> ⚠️ **Important**: All fields are required. Incorrect data will result in registration rejection.

## Data Validation

The system automatically checks data correctness:
- **NIP**: exactly 10 digits
- **REGON**: 9 or 14 digits
- **KRS**: exactly 10 digits
- **Email**: valid address format
- **URL**: must start with http:// or https://

Validation errors are displayed next to the corresponding form fields.

## Automatic Registration

After enabling the **"Automatic TPay registration"** option, the system:
1. Sends company data to TPay
2. Creates a merchant account
3. Assigns a merchant ID (Merchant ID) to your profile

The activation process may take up to **24 hours**.

## Payment Methods for Customers

After TPay configuration, your customers can pay using:

| Method | Description |
|--------|-------------|
| **Payment card** | Visa, Mastercard, and others |
| **Instant transfer** | Online transfer from the customer's bank |
| **BLIK** | BLIK code from a banking app |

## Child Businesses and TPay

Child businesses can use your TPay configuration: they do not need to configure their own account. This simplifies payment management in organizations with multiple locations. [More about child businesses](./child-businesses.md)

## Security

- TPay is a certified payment gateway compliant with PCI DSS
- Spotto **does not store** customer card data
- All transactions are **encrypted**
- Company registration data is transmitted through a secure channel

---

## Related

- [How to configure TPay: step-by-step guide](../how-to-setup-tpay.md)
- [Payments (customer perspective)](../../shop/features/payments.md)
- [Child Businesses](./child-businesses.md)

---

**Last Updated**: 2026-03-29
