---
title: "Troubleshooting : Reservations Screen"
screen: reservations
role: "User"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-28"
---
# Troubleshooting : Reservations Screen

Below you will find solutions to the most common issues related to reservations in the Spotto app.

---

## Viewing Reservations

### Reservation does not appear after payment

**Problem**: I paid, but the reservation is not showing on the list.

**Causes**:
- Synchronization delay (the app retries up to 5 times)
- Payment is still being processed
- Session expired during payment

**Solution**:
1. Wait 10-15 seconds: the app automatically synchronizes new reservations
2. Pull the screen down to refresh
3. Check the "Pending Payments" section: the reservation may be waiting for payment completion
4. Close and reopen the app
5. If it does not appear after 15 minutes, contact support with the transaction number

---

### Reservation list is empty

**Problem**: I don't see any reservations, even though I have them.

![IMG_RES_026 : Empty reservation list](../../assets/images/reservations/ts-empty-list.png)

**Causes**:
- No internet connection
- All reservations are in the past (only upcoming ones are displayed)
- User session issue

**Solution**:
1. Check your internet connection
2. Remember that the screen only shows **upcoming** reservations
3. Log out and log back in
4. Update the app to the latest version

---

## Cancellation

### Cannot cancel a reservation

**Problem**: The cancel button is inactive or an error appears.

![IMG_RES_022 : Inactive cancel button](../../assets/images/reservations/ts-cancel-button-disabled.png)

**Causes**:
- Less than 48 hours remain until the reservation
- The reservation is for today or in the past
- Reservation was paid with a pass/voucher
- Reservation is already canceled

**Solution**:
1. Check the reservation date: it must be > 48h in the future
2. Reservations paid with a pass cannot be canceled: contact the facility
3. If you see an error "Cannot cancel", read the message: it contains the reason for rejection

---

### "48-hour rule" error

**Problem**: A message appears saying cancellation is not possible due to the 48-hour rule.

![IMG_RES_023 : 48-hour rule error message](../../assets/images/reservations/ts-48h-rule-error.png)

**Solution**: The rule is mandatory and cannot be bypassed. Options:
1. Contact the facility directly (phone or email from the details view)
2. Ask the facility to cancel on their end
3. In case of serious circumstances, contact Spotto support

---

### Partial cancellation is not working

**Problem**: I don't see the partial cancellation option.

**Causes**:
- The reservation has only 1 time slot
- All slots except one have already been canceled

**Solution**: Partial cancellation requires a minimum of 2 active slots. For single-hour reservations, use full cancellation.

---

## Payments

### Payment failed

**Problem**: Payment attempt ends with an error.

![IMG_RES_024 : Payment error message](../../assets/images/reservations/ts-payment-failed.png)

**Causes**:
- Insufficient funds
- Expired card
- TPay system issue
- Connection timeout

**Solution**:
1. Check your bank account balance
2. Try a different payment method (card -> BLIK -> bank transfer)
3. Wait 5 minutes and try again
4. The reservation should still be in the "Pending Payments" section

---

### Refund has not arrived

**Problem**: I canceled a reservation but have not received the refund.

**Causes**:
- The refund is being processed (3-5 business days)
- Bank-side issue
- Card refunds may take longer than bank transfers

**Solution**:
1. Wait the full 5 business days from the moment of cancellation
2. Check your bank transaction history (the refund may appear under a different name)
3. If there is no refund after 7 days: contact Spotto support, providing:
   - Reservation number (visible in details)
   - Cancellation date
   - Expected refund amount

---

### Pending payment expired

**Problem**: The reservation disappeared from pending, but I did not pay.

**Solution**: Pending payments have a limited validity period. Once it expires, the reservation is automatically canceled. Make a new reservation on the [Home screen](../home/how-to-book-facility.md).

---

## General

### Reservations screen won't load

**Problem**: The screen is blank or displays an error.

![IMG_RES_025 : Blank Reservations screen with error](../../assets/images/reservations/ts-blank-screen.png)

**Solution**:
1. Check your internet connection
2. Close and reopen the app
3. Clear the cache:
   - **Android**: Settings -> Apps -> Spotto -> Storage -> Clear cache
   - **iOS**: Delete and reinstall the app
4. Update to the latest version

---

## Still need help?

If the above solutions did not help:
- Check the [Reservations Screen FAQ](./faq.md)
- Contact the Spotto support team

---

**Last updated**: 2026-03-28
