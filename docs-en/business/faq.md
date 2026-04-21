---
title: "FAQ: Business Screen"
screen: business
role: "Business Owner"
difficulty: "Easy"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Frequently Asked Questions: Business Screen

## Business Profile

### How can I change my company data?

Open the Business screen and tap the profile edit button. Change the necessary data and tap **Save**. [Guide](./how-to-create-profile.md)

### Can I have multiple businesses on one account?

Yes, but each business requires a separate business profile. If you have branches: use the [child businesses](./how-to-manage-child-businesses.md) system.

### How do I change the company logo?

On the Business screen, tap the camera icon on the avatar. You can take a new photo or choose one from the gallery.

---

## Sports Facilities

### How many facilities can I add?

There is no limit: you can add any number of sports facilities.

### How do I change the facility price?

Open the facility edit form, change the net or gross price (the system will automatically calculate the other value), and save. [Guide](./how-to-add-facility.md)

### Can I temporarily close a facility?

Yes: set the schedule for a specific date without any selected hours. [How to configure a schedule](./how-to-manage-schedule.md)

---

## Payments and Invoicing

### Is TPay required?

TPay is required for customers to pay online for reservations and products. Without TPay, customers will not be able to make payments in the app.

### How long does TPay activation take?

The TPay account activation process can take up to 24 hours from the moment correct data is saved.

### Is KSeF mandatory?

No: KSeF integration is optional, but recommended for invoicing automation. [How to set up KSeF](./how-to-setup-ksef.md)

---

## Agents and Staff

### How do I invite an employee?

Use the "Agents" section on the Business screen. Enter the employee's email address and send the invitation. [Guide](./how-to-manage-agents.md)

### What happens when an invitation expires?

You can resend the invitation: tap **Resend** next to the expired invitation.

### Can an agent see financial reports?

An agent has access to business management, but specific permissions depend on the configuration.

---

## Trainers

### How can a trainer start working with my business?

The trainer must send an association request from their trainer profile. The request will appear in your "Trainers" section as pending. [Guide](./how-to-manage-trainers.md)

### Can I change a trainer's rate?

Yes: tap the trainer on the list and update the hourly rate (net or gross).

### What does the "Employee" permission mean?

A trainer marked as an employee cannot independently create training sessions: they must be created by the business.

---

## Reports

### What period can I generate reports for?

You can generate reports for any month from the last 2-3 years. [Guide](./how-to-generate-reports.md)

### Can I export a report?

Yes: reports can be downloaded as PDF or shared via email.

---

## Useful Information: Feature Dependencies

Below you'll find practical information about what is required for individual features to work properly. These dependencies result from the Spotto system logic.

### When will my business appear in the search for users?

For your business to be visible in the Spotto browser and search, you must meet **four conditions**:

1. **Created business profile**: with completed data (tax ID, name, address)
2. **At least one sports facility**: added and active
3. **Configured schedule**: the facility must have at least one available time slot
4. **Profile activation by the Spotto team**: final approval after signing a cooperation agreement

| Business State | Visible in Search? | Can Accept Payments? |
|----------------|-------------------|---------------------|
| Profile only (no facilities) | No | No |
| Profile + facility (no schedule) | No | No |
| Profile + facility + schedule (no activation) | No | No |
| Profile + facility + schedule + activation | Yes | No (no TPay) |
| All of the above + TPay | Yes | Yes |

> **Tip**: Spotto **does not block** creating a profile, facilities, or TPay configuration: you can prepare everything at once. Profile activation by the Spotto team occurs after signing a cooperation agreement and is the last step before appearing in search.

### Is TPay required for the business to operate?

TPay **is not required** to create a profile, add facilities, or appear in search. However, it is **necessary to accept online payments**.

**What works WITHOUT TPay:**
- Creating a business profile and facilities
- Configuring schedules and prices
- Appearing in search (if you have facilities with a schedule)
- Managing agents and trainers
- Generating reports
- Configuring KSeF (independent of TPay)
- Creating products with the "paid at trainer" option

**What does NOT work WITHOUT TPay:**
- Accepting online payments for reservations
- Selling products with the "paid in app" option
- Processing BLIK, card, and bank transfer payments

### What are the requirements for creating products (passes, packages)?

To create a product:
1. **Business profile**: must exist
2. **Sports facility**: required if the product does not apply to all facilities (you can assign a product to selected facilities)
3. **TPay**: required **only** if the product is to be paid in the app (`Paid in app = yes`)

| Product Payment Type | Requires TPay? | Description |
|---------------------|---------------|-------------|
| **Paid in app** | Yes | Customer pays via BLIK/card/bank transfer in Spotto |
| **Paid at trainer** | No | Payment occurs outside the app |
| **Free** | No | Product without a fee |

### How do child businesses work: what is shared and what is independent?

| Element | Shared with Parent Business? | Notes |
|---------|------------------------------|-------|
| **TPay account** | Optionally | Child business can use the parent's TPay |
| **Tax ID for invoices** | Optionally | Invoices can be issued under the parent's tax ID |
| **Sports facilities** | Independent | Each business manages its own facilities |
| **Products** | Independent | Each business creates its own products |
| **Schedules** | Independent | Each business configures its own schedules |
| **Trainers** | Independent | Trainers are associated separately with each business |
| **Agents** | Independent | Each business has its own agents |
| **KSeF** | Hidden* | *If the child business uses the parent's TPay, the KSeF section is hidden: e-invoices are issued centrally |

### What are the dependencies for trainer cooperation?

- The trainer must send the association request themselves: you cannot add them manually
- After acceptance, **you set the hourly rate**: regardless of the rate the trainer set in their profile
- A trainer marked as **"Employee"** cannot independently create training sessions
- A trainer with the **"Can conduct own training sessions"** permission can see your facilities when creating classes
- A trainer can be associated with **multiple businesses** simultaneously
- Removing an association is **irreversible**: the trainer must send a new request

### Does KSeF require TPay to be configured?

**No**: KSeF and TPay are independent integrations. You can configure KSeF without TPay and vice versa. The only exception: a child business using the parent's TPay does not see the KSeF section (e-invoices are issued centrally by the parent business).

### What is the recommended order for configuring a new business?

Recommended order (from most important):

| Step | Action | Effect |
|------|--------|--------|
| 1 | [Create a business profile](./how-to-create-profile.md) | Foundation: nothing works without this |
| 2 | [Add a sports facility](./how-to-add-facility.md) | Preparing your offer |
| 3 | [Configure a schedule](./how-to-manage-schedule.md) | Setting time slot availability |
| 4 | [Set up TPay](./how-to-setup-tpay.md) | Enables online payments: TPay conducts its own contractor compliance verification |
| 5 | [Add products](./how-to-manage-products.md) | Passes and packages in the Shop |
| 6 | [Set up KSeF](./how-to-setup-ksef.md) | Automatic e-invoices (optional) |
| 7 | [Invite agents](./how-to-manage-agents.md) | Delegating management (optional) |
| 8 | Activation by the Spotto team | After signing a cooperation agreement: the business appears in search |

> **Tip**: Steps 1-7 can be completed in any order, and you don't need to wait for activation. This way, when the agreement is signed, your business is ready to operate immediately.

---

## Related Topics

- [Troubleshooting payment issues](../troubleshooting/payments/payment-failed.md)
- [Trainer profile (for trainers)](../trainer/README.md)
