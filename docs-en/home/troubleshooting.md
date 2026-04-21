---
title: "Troubleshooting : Home Screen"
screen: home
role: "User"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-21"
---

# Troubleshooting : Home Screen

Below you will find solutions to the most common problems with the Home screen in the Spotto app.

---

## Search

### No search results

**Problem**: After entering a city and date, the search bar shows no facilities.

![Empty search results screen](../../assets/images/home/ts-no-search-results.png)

**Causes**:
- City name spelled incorrectly
- No Spotto facilities in the selected city
- Filters set too restrictively
- No internet connection

**Solution**:
1. Check the spelling of the city name : use autocomplete suggestions
2. Remove the facility type filter and search again
3. Change the date to today to check general availability
4. Check your internet connection (Wi-Fi/mobile data icon)
5. Close and reopen the app

---

### Search bar does not respond to touch

**Problem**: The search bar does not expand when tapped.

**Causes**:
- The app has frozen
- Device memory issue

**Solution**:
1. Close the app and reopen it
2. Restart your phone
3. Make sure you have the latest version of the app

---

## Map

### Map is not loading

**Problem**: The map section is empty or displays a grey screen.

![Map not loading - grey screen](../../assets/images/home/ts-map-not-loading.png)

**Causes**:
- No internet connection
- Issue with Google Maps / Apple Maps services
- Insufficient memory

**Solution**:
1. Check your internet connection
2. Close other apps to free up memory
3. Close and reopen Spotto
4. Update the app to the latest version

---

### I cannot see facility markers on the map

**Problem**: The map loads but there are no pins.

**Causes**:
- The map is zoomed out too far
- There are no Spotto facilities in the visible area
- Data loading issue

**Solution**:
1. Zoom in on the map (pinch with two fingers)
2. Pan the map to the centre of a large city
3. Tap the crosshair button to return to your location
4. Pull the screen down to refresh the data

---

### Location is inaccurate or unavailable

**Problem**: The blue dot (your position) is in the wrong place or does not appear.

**Causes**:
- GPS disabled or inaccurate
- Location permission not granted to Spotto
- Weak GPS signal (indoors)

**Solution**:

**Android**:
1. Settings → Location → Enable
2. Settings → Apps → Spotto → Permissions → Location → "Allow while using the app"
3. Go outside to improve GPS signal

![Android location settings](../../assets/images/home/ts-android-location-settings.png)

**iOS**:
1. Settings → Privacy → Location Services → Enable
2. Settings → Privacy → Location Services → Spotto → "While Using"
3. Go outside to improve GPS signal

![iOS location settings](../../assets/images/home/ts-ios-location-settings.png)

---

## Booking

### Cannot book a facility : no available time slots

**Problem**: After selecting a facility, all time slots are greyed out (unavailable).

![All time slots greyed out](../../assets/images/home/ts-no-available-slots.png)

**Causes**:
- The facility is fully booked on the selected day
- The facility is closed on the selected day
- Calendar synchronisation issue

**Solution**:
1. Change the date to a different day
2. Check the facility's opening hours on the details page
3. Refresh the page (pull down)
4. Look for a similar facility nearby

---

### Payment failed

**Problem**: After confirming the booking, the payment is declined.

![Payment failed error message](../../assets/images/home/ts-payment-failed.png)

**Causes**:
- Insufficient funds in the account
- Card expired or blocked
- Issue with the TPay payment system
- Connection timeout

**Solution**:
1. Check your bank account balance
2. Try a different payment method (e.g. BLIK instead of a card)
3. Wait 5 minutes and try again : the booking should appear in the "Pending payments" section
4. If the problem persists, contact customer support

---

### Booking does not appear after payment

**Problem**: I paid, but the booking is not visible in the app.

**Causes**:
- Delay in payment processing
- Session expired during payment
- Payment was not fully processed

**Solution**:
1. Wait 5–15 minutes : processing may take some time
2. Refresh the Home screen (pull down)
3. Check the "Pending payments" section on the Home screen
4. Go to the [Reservations](../reservations/README.md) tab and check there
5. Check your email : a confirmation may have been sent by email
6. If the booking does not appear after 30 minutes, contact support with the transaction number from your bank

---

## Favourites

### Favourites are not being saved

**Problem**: After tapping the heart icon, the facility does not appear in favourites.

**Causes**:
- You are not logged in
- Internet connection issue
- Sync error

**Solution**:
1. Make sure you are logged in to your account
2. Check your internet connection
3. Close and reopen the app
4. Try adding the facility to favourites again

---

### The favourites section is not displayed on the Home screen

**Problem**: I cannot see the "Favourites" section on the main screen.

**Causes**:
- You have no saved favourites
- You are not logged in

**Solution**:
1. The favourites section only appears after at least one facility has been added
2. Log in to your account
3. Add a facility to favourites ([how to do it](./how-to-manage-favorites.md))

---

## General issues

### Home screen is blank or not loading

**Problem**: After opening the app, the Home screen is white or shows an error.

![Blank Home screen](../../assets/images/home/ts-blank-home-screen.png)

**Solution**:
1. Check your internet connection
2. Close and reopen the app
3. Clear the app cache:
   - **Android**: Settings → Apps → Spotto → Storage → Clear cache
   - **iOS**: Delete and reinstall the app
4. Update the app to the latest version

---

### Data on the Home screen is out of date

**Problem**: Reservations or favourites do not reflect the current state.

**Solution**:
1. Pull the screen down to refresh the data
2. Check your internet connection
3. Close and reopen the app

---

## Still need help?

If the above solutions did not help:
- Check the [Home screen FAQ](./faq.md)
- Go to the general [troubleshooting guide](../troubleshooting/app-issues/app-crash.md)
- Contact the Spotto support team

---

**Last updated**: 2026-03-21
