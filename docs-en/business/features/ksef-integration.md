---
title: "KSeF Integration"
screen: business
role: "Business Owner"
difficulty: "Advanced"
lastUpdated: "2026-03-29"
---

# KSeF Integration

## Description

KSeF (National e-Invoice System) is an electronic invoicing system operated by the Ministry of Finance. The integration allows you to automatically issue and send e-invoices directly from the Spotto app. The system supports two authorization methods: **token** and **qualified certificate**.

## Authorization Method Comparison

| Criterion | Token | Certificate |
|-----------|-------|-------------|
| **Ease of setup** | Simple: copy and paste | Requires a .pfx/.p12 file and password |
| **Security level** | Standard (RSA-OAEP) | Highest (cryptographic key) |
| **Validity period** | Short: requires renewal | Long: 1-2 years (until expiration date) |
| **Cost** | Free | Depends on the certificate provider |
| **Recommended use** | Testing, quick start, small businesses | Production, larger businesses, higher requirements |
| **Source** | KSeF website of the Ministry of Finance | Qualified trust service provider |

---

## Method 1: Configuration Using a Token

An authorization token is the simplest method of connecting to KSeF. You generate it on the Ministry of Finance website and paste it into the app.

### What You Need

- KSeF authorization token (minimum 20 characters)
- You can obtain the token at: **ksef.mf.gov.pl** -> log in with a trusted profile or e-ID -> "Token generation" section

### Step by Step

**Step 1: Open the KSeF section**

On the **Business** screen, scroll to the **KSeF Status** card. If KSeF is not configured, you will see the status "Not configured" and a **Configure** button.

![KSeF status card: Screenshot #28](../../../assets/images/business/ksef-status-card.png)

**Step 2: Tap "Configure"**

The KSeF configuration screen will open with a choice of authorization method.

**Step 3: Select the "Token" tab**

On the configuration screen, tap the **Token** tab (it should be active by default).

**Step 4: Paste the authorization token**

In the **KSeF Token** field, paste the token copied from the KSeF Ministry of Finance website.

| Validation | Requirement |
|------------|-------------|
| **Minimum length** | 20 characters |
| **Allowed characters** | Letters, digits, special characters |
| **Copying** | Copy/paste recommended: avoid manual retyping |

> 💡 **Tip**: You can copy the token from the KSeF website and paste it in the app. Make sure you copied the entire token without truncation.

**Step 5: Select the environment**

Choose the KSeF working environment:

| Environment | API Address | Description |
|-------------|-------------|-------------|
| **Test** | ksef-test.mf.gov.pl | For testing: invoices are not official, they do not enter the KSeF system |
| **Production** | ksef.mf.gov.pl | Real e-invoices sent to the official KSeF system |

> 💡 **Tip**: We recommend starting with the **test** environment to make sure the configuration works correctly, and only then switching to production.

![KSeF token configuration: Screenshot #29](../../../assets/images/business/ksef-config-token.png)

**Step 6: Tap "Save"**

The system will automatically:
1. Encrypt the token with the KSeF public key (RSA-OAEP)
2. Test the connection to the KSeF server in the selected environment
3. Verify permissions to issue invoices for your NIP
4. Display the test result

**Test result:**
- ✅ **Green icon**: connection works correctly, KSeF is ready
- ❌ **Red icon**: connection error, check the token and try again

---

## Method 2: Configuration Using a Qualified Certificate

A qualified certificate provides the highest level of security. It is the same technology as the qualified signature used in e-government and electronic banking.

### What You Need

- A qualified certificate file in **PKCS#12** format (extension .pfx or .p12)
- **Password** for the certificate file (set during export)
- The certificate must come from a qualified trust service provider

| Provider | Website |
|----------|---------|
| **Certum** | certum.pl |
| **KIR** | elektronicznypodpis.pl |
| **Sigillum** | sigillum.pl |
| **PWPW** | sigillum.pl |
| **EuroCert** | eurocert.pl |

### Step by Step

**Step 1: Open the KSeF section**

On the **Business** screen, scroll to the **KSeF Status** card and tap **Configure**. If KSeF was previously configured with a token, tap **Reconfigure**.

**Step 2: Select the "Certificate" tab**

On the configuration screen, tap the **Certificate** tab.

![KSeF certificate configuration: Screenshot #55](../../../assets/images/business/ksef-config-certificate.png)

**Step 3: Upload the certificate file**

Tap the **Select certificate file** button. The system file picker will open. Point to the certificate file on your device.

| Supported format | Extension | Description |
|------------------|-----------|-------------|
| **PKCS#12** | .pfx | Microsoft format: contains private key and certificate |
| **PKCS#12** | .p12 | Standard format: identical to .pfx |

After selecting the file, you will see its name displayed below the button.

> ⚠️ **Important**: Make sure the certificate file comes from a qualified trust service provider. Self-signed certificates are not accepted by KSeF.

**Step 4: Enter the certificate password**

In the **Certificate password** field, enter the password protecting the .pfx/.p12 file.

| Important information about the password | |
|------------------------------------------|---|
| **What is this password?** | The password set during export of the certificate to a .pfx/.p12 file |
| **Is it stored?** | No: the password is used once to read the private key |
| **I don't remember the password** | Re-export the certificate with a new password from your provider |

> 💡 **Tip**: This password is for the certificate file itself, **not** the password for your account with the certificate provider. These are two different passwords.

**Step 5: Select the environment**

Same as with the token method: choose **Test** or **Production**.

| Environment | API Address | Description |
|-------------|-------------|-------------|
| **Test** | ksef-test.mf.gov.pl | For testing: invoices do not enter the official system |
| **Production** | ksef.mf.gov.pl | Real e-invoices in the KSeF system |

**Step 6: Tap "Save"**

The system will automatically:
1. Read the certificate from the file using the provided password
2. Verify the certificate validity (start and expiration dates)
3. Check whether the certificate comes from a qualified provider
4. Use the private key to sign the authorization request
5. Test the connection to the KSeF server in the selected environment
6. Verify permissions to issue invoices for your NIP
7. Display the test result

**Test result:**
- ✅ **Green icon**: certificate valid, connection works
- ❌ **Red icon**: error, check the certificate, password, and expiration date

---

## Security

### Token: How the Security Works

After entering the token, the app:
1. Encrypts the token with the KSeF public key using the **RSA-OAEP** algorithm
2. Sends the encrypted token to the KSeF server
3. KSeF decrypts the token with its private key and opens a session
4. The session is additionally secured with a symmetric **AES-256** key

The token **is not stored** locally on the device after saving the configuration.

### Certificate: How the Security Works

The qualified certificate contains a private key that:
1. Is used to **cryptographically sign** authorization requests
2. Provides **non-repudiation**: only the certificate holder could have signed the request
3. Is protected by the .pfx/.p12 file password

The certificate password **is not stored**: it is used once to read the key.

---

## Status and Management

After configuring KSeF (with either method), the KSeF card will show:

| Element | Description |
|---------|-------------|
| **Status** | Configured / Not configured |
| **Method** | Token or Certificate |
| **Environment** | Label: Test or Production |
| **Last sync** | Date and time of last communication with KSeF |
| **Toggle** | Enable/disable KSeF integration without removing the configuration |
| **Reconfigure** | Button to change settings or authorization method |

### Changing the Authorization Method

You can change the method at any time:
1. Tap **Reconfigure** on the KSeF card
2. Select the new tab (Token -> Certificate or vice versa)
3. Enter the new authorization data
4. Save: the new configuration will replace the previous one

### Disabling the Integration

The toggle on the KSeF card allows you to temporarily disable the integration without removing the configuration. After re-enabling, you do not need to re-enter the data.

---

## Limitations

| Limitation | Description |
|------------|-------------|
| **Child businesses** | KSeF is not available for child businesses using the parent company's TPay: e-invoices are issued centrally |
| **Token validity** | The token has a limited validity period: after expiration, generate a new one on the KSeF website |
| **Certificate validity** | After the certificate expires, you must obtain a new one from the provider and reconfigure |
| **Qualified providers** | Only certificates from qualified trust service providers are accepted |

---

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Token connection test failed | Token expired or invalid | Generate a new token on the KSeF Ministry of Finance website |
| "Token appears to be invalid" | Token too short | Token must be at least 20 characters: copy the entire token |
| Certificate not accepted | Wrong file format | Use .pfx or .p12 format (PKCS#12) |
| Certificate password error | Wrong file password | This is the certificate file password, not the provider account password |
| Certificate expired | Validity date has passed | Obtain a new certificate from the provider |
| KSeF section not visible | Child business with parent's TPay | KSeF is managed by the parent company |
| Server connection error | KSeF server unavailable | Try again in a few minutes: the KSeF server may be undergoing maintenance |

---

## Related

- [How to configure KSeF: guide](../how-to-setup-ksef.md)
- [TPay Integration](./tpay-integration.md)
- [Child Businesses](./child-businesses.md)

---

**Last Updated**: 2026-03-29
