---
title: "How to Set Up KSeF"
screen: business
role: "Business Owner"
difficulty: "Advanced"
lastUpdated: "2026-03-29"
prerequisites:
  - "business/how-to-create-profile"
  - "business/how-to-setup-tpay"
---

# How to Set Up KSeF

**Screen**: Business
**Role**: Business Owner
**Difficulty**: Advanced

## Overview

KSeF (Krajowy System e-Faktur / National e-Invoice System) is an electronic invoicing system operated by the Ministry of Finance. Integration with KSeF enables automatic issuance and submission of e-invoices.

Spotto supports two KSeF authorization methods:
- **Authorization token**: quick setup, ideal for getting started
- **Qualified certificate**: higher security level, recommended for production use

---

## Before You Start

- You must have a [business profile created](./how-to-create-profile.md)
- Choose an authorization method and prepare the appropriate data (see table below)
- Decide whether you want to test the connection in a test environment first

| Method | What You Need | Where to Obtain |
|--------|--------------|-----------------|
| **Token** | Authorization token (min. 20 characters) | KSeF website of the Ministry of Finance |
| **Certificate** | Certificate file (.pfx or .p12) + password | Qualified trust service provider |

> **Important**: KSeF is not available for child businesses using the parent business's TPay.

---

## Method 1: Configuration Using a Token

The authorization token is the simplest method to connect with KSeF. You generate it on the Ministry of Finance website and paste it in the app.

### Step 1: Find the KSeF Section

On the Business screen, find the **KSeF Status** card. If KSeF is not configured, you'll see the message "Not configured."

![KSeF status card: Screenshot #28](../../assets/images/business/ksef-status-card.png)

### Step 2: Open the Configuration

Tap the **Configure** button on the KSeF card. The configuration window will open.

### Step 3: Select the "Token" Method

In the configuration window, select the **Token** tab or option.

### Step 4: Enter the Token

In the **KSeF Token** field, paste the authorization token obtained from the KSeF system.

> **Tip**: You can copy the token from the KSeF website and paste it in the app. The data is secure: the token is not stored locally after saving. The token must be at least 20 characters long.

### Step 5: Choose the Environment

Select the working environment:

| Environment | Description |
|-------------|-------------|
| **Test** | Testing environment: invoices are not actually sent |
| **Production** | Real e-invoices sent to the KSeF system |

> **Tip**: We recommend starting with the test environment to make sure everything works correctly.

![KSeF token configuration: Screenshot #29](../../assets/images/business/ksef-config-token.png)

### Step 6: Save and Test

Tap **Save**. The system will automatically test the connection with KSeF and display the result:
- **Green icon**: connection works correctly
- **Red icon**: check the token and try again

---

## Method 2: Configuration Using a Certificate

A qualified certificate provides a higher level of security and is recommended for long-term production use. Unlike a token, a certificate does not require regular renewal (until the certificate expires).

### Step 1: Find the KSeF Section

On the Business screen, find the **KSeF Status** card and tap **Configure**.

### Step 2: Select the "Certificate" Method

In the configuration window, select the **Certificate** tab or option.

![KSeF certificate configuration: Screenshot #55](../../assets/images/business/ksef-config-certificate.png)

### Step 3: Upload the Certificate File

Tap the **Select certificate file** button and point to the certificate file on your device.

Supported formats:

| Format | Extension | Description |
|--------|-----------|-------------|
| **PKCS#12** | .pfx, .p12 | Most commonly used format, contains private key and certificate |

> **Important**: Make sure the certificate file comes from a qualified trust service provider (e.g., Certum, KIR, Sigillum, PWPW, EuroCert).

### Step 4: Enter the Certificate Password

Enter the password protecting the certificate file. This is the password that was set during certificate export.

> **Tip**: The password is used once to read the certificate and is not stored in the app.

### Step 5: Choose the Environment

Same as with the token method: select **Test** or **Production**.

### Step 6: Save and Test

Tap **Save**. The system will:
1. Read the certificate from the file
2. Verify its validity
3. Test the connection with KSeF
4. Display the test result

---

## Which Method Is Better?

| Criterion | Token | Certificate |
|-----------|-------|-------------|
| **Ease of setup** | Simpler: copy and paste | Requires a certificate file |
| **Security** | Standard | Higher: cryptographic key |
| **Validity** | Limited: requires renewal | Valid until the certificate expiration date |
| **Recommended use** | Testing, small businesses | Production, larger businesses |
| **Requirements** | Account on the KSeF website | Qualified certificate |

> **Tip**: You can start with a token in the test environment and later switch to a certificate in production.

---

## Managing KSeF

After configuration (regardless of the chosen method), the KSeF card will show:
- **Configuration status**: Configured / Not configured
- **Authorization method**: Token or Certificate
- **Environment**: Test or Production (label)
- **Last synchronization**: date and time
- **Toggle**: enable/disable KSeF integration

### Changing the Authorization Method

To change the method from token to certificate (or vice versa):
1. Tap **Reconfigure** on the KSeF card
2. Select the new method
3. Enter the appropriate data
4. Save: the new configuration will replace the previous one

---

## Troubleshooting

### Problem: Token connection test failed
**Solution**: Check that the token is valid and current. KSeF tokens have an expiration date: generate a new one on the Ministry of Finance KSeF website.

### Problem: Error "Token appears to be invalid"
**Solution**: The token must be at least 20 characters long. Make sure you copied the entire token without truncation.

### Problem: Certificate is not accepted
**Solution**:
1. Check that the file is in .pfx or .p12 format
2. Make sure the password is correct
3. Check the certificate expiration date: an expired certificate will not be accepted
4. The certificate must come from a qualified trust service provider

### Problem: Certificate password error
**Solution**: The password refers to the certificate file (set during export), not the account password at the provider. If you don't remember the password, export the certificate again with a new password.

### Problem: I don't see the KSeF section
**Solution**: The KSeF section is hidden if your business is a child business using the parent business's TPay.

---

## Related Topics

- [KSeF Integration: details](./features/ksef-integration.md)
- [How to set up TPay](./how-to-setup-tpay.md)

---

**Last Updated**: 2026-03-29
