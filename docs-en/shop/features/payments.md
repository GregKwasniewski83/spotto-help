---
title: "Shop Payments"
screen: shop
role: "User"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Shop Payments

## Description

Payments for products in the Spotto Shop are handled by the **TPay** system: a secure payment gateway. After confirming a purchase, you'll be redirected to the TPay page in your browser.

## Available Payment Methods

| Method | Description |
|--------|-------------|
| **Credit/debit card** | Visa, Mastercard, and others |
| **Instant bank transfer** | Online transfer from your bank |
| **BLIK** | BLIK code from your banking app |

## Payment Flow

1. **Purchase confirmation**: tap "Buy Now" and confirm in the app
2. **Redirect to TPay**: your browser opens with the payment gateway
3. **Complete payment**: choose a method and pay
4. **Return to app**: after payment, you automatically return to Spotto
5. **Confirmation**: the app displays a success message

## Payment Confirmation

Spotto verifies the payment in several ways:
- **Push notification**: primary method, instant confirmation
- **Automatic verification**: the app checks the status after returning from the browser
- **Status polling**: in case of delay, the app checks the status every few seconds

## Product Prices

- Prices are displayed in **PLN (Polish zloty)**
- Prices include **VAT** (value-added tax)
- The VAT rate depends on the product and is set by the seller

## Security

- Payments are processed by the certified TPay gateway
- Spotto does not store your card details
- All transactions are encrypted

---

## Related

- [How to buy a product: guide](../how-to-buy-pass.md)
- [Payment issues](../../troubleshooting/payments/payment-failed.md)

---

**Last updated**: 2026-03-29
