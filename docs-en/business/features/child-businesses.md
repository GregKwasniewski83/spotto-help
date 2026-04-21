---
title: "Child Businesses"
screen: business
role: "Business Owner"
difficulty: "Advanced"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Child Businesses

## Description

The child business system enables managing an organizational structure with a parent company and branches. A child business can use the parent company's payment configuration (TPay) and tax data (NIP), which simplifies managing multiple locations.

## When to Use Child Businesses

Child businesses are useful when:
- You have **multiple locations** (e.g., a gym chain) and want to manage them centrally
- You want branches to **use a single TPay account**: no need to configure payments separately for each one
- You want to issue **invoices under one NIP** for the entire organization

## How the Association Works

```
Parent company (parent)
├── Child business A (Krakow branch)
├── Child business B (Warsaw branch)
└── Child business C (Wroclaw branch)
```

1. **Child business** sends an association request to the parent company
2. **Parent company** accepts or rejects the request
3. After acceptance, the parent company configures **permissions** for the branch

## Permissions

The parent company can grant the child business two independent permissions:

| Permission | Description | Effect |
|------------|-------------|--------|
| **Use parent's TPay** | Child business uses the parent company's payment gateway | Customers pay through the parent's TPay account. The child business does not need to configure its own TPay |
| **Use parent's NIP for invoices** | Invoices issued under the parent company's NIP | All invoices issued centrally under one NIP |

> ⚠️ **Important**: When a child business uses the parent's TPay, the KSeF section is automatically hidden for it: e-invoices are issued from the parent company level.

## Association Statuses

| Status | Color | Description |
|--------|-------|-------------|
| **Pending** | Yellow | Child business sent a request, waiting for the parent company's decision |
| **Confirmed** | Green | Association active, permissions are in effect |
| **Rejected** | Red | Request was rejected by the parent company |

## Parent Company View

On the parent company's Business screen in the **Child Businesses** section you can see:

- Avatar, name, city, and email of each child business
- Association status (pending / confirmed)
- Current permissions (TPay and NIP icons)
- Action buttons: accept, reject, change permissions, remove

![Child businesses list: Screenshot #57](../../../assets/images/business/child-businesses-detail.png)

## Child Business View

If your business is a child business, on the Business screen you will see the **Parent Company Association Status** section:
- Parent company name
- Association status
- Request and confirmation dates
- Buttons: resend email, cancel request

## Changing and Removing an Association

- **Changing permissions**: the parent company can change permissions at any time (enable/disable TPay, NIP)
- **Removal**: the parent company can remove the association. The child business loses access to the parent's TPay and NIP and must configure its own

---

## Related

- [How to manage child businesses: step-by-step guide](../how-to-manage-child-businesses.md)
- [TPay Integration](./tpay-integration.md)
- [KSeF Integration](./ksef-integration.md)

---

**Last Updated**: 2026-03-29
