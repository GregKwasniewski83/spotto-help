---
title: "Trainer Associations"
screen: business
role: "Business Owner"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Trainer Associations

## Description

The trainer association system allows you to manage collaboration with trainers who conduct sessions at your sports facilities. You can accept or reject trainer requests, set hourly rates, grant permissions, and control what trainers can do at your facilities.

## How Collaboration Works

1. **The trainer searches for your business** in the app and sends a collaboration request
2. **You receive the request** in the "Trainers" section on the Business screen
3. **You configure the rate and permissions** before accepting
4. **You accept**: the trainer can conduct sessions at your facilities

## Association Statuses

| Status | Color | Description |
|--------|-------|-------------|
| **Pending** | Yellow/orange | Trainer sent a request: waiting for your decision |
| **Confirmed** | Green | Collaboration active: trainer conducts sessions |
| **Rejected** | Red | Request rejected |

![Trainer associations list: Screenshot #59](../../../assets/images/business/trainer-associations-detail.png)

## Hourly Rates

For each trainer, you set an individual hourly rate:

| Field | Description |
|-------|-------------|
| **Net rate** | Price per hour excluding VAT (in PLN) |
| **VAT rate** | Choose: 0%, 8%, or 23% |
| **Gross rate** | Calculated automatically based on net + VAT |

The system supports **bidirectional conversion**:
- Enter net -> gross is calculated automatically
- Enter gross -> net is calculated automatically
- Change VAT -> the other value is automatically updated

> 💡 **Tip**: The rate set by you is independent of the rate the trainer has set in their profile. You decide how much you pay the trainer per hour.

## Trainer Permissions

For each confirmed trainer, you can set three permissions:

| Permission | Description | Default |
|------------|-------------|---------|
| **Can conduct own trainings** | Trainer independently creates and manages trainings at your facilities | Disabled |
| **Employee** | Trainer is your full-time employee (cannot independently create trainings) | Disabled |
| **Max. number of participants** | Limit of people per session conducted by this trainer | No limit |

> ⚠️ **Important**: A trainer marked as "Employee" **cannot** independently create trainings: they must be created on the business side.

## Trainer Information

For each associated trainer you can see:
- **Avatar and name**: profile photo and trainer's name
- **Email address**: contact details
- **Request date**: when the trainer sent the collaboration request
- **Confirmation date**: when you accepted the request
- **Current rates**: net, VAT, gross
- **Current permissions**: labels on the trainer's profile

## Managing Existing Associations

For confirmed trainers, you can at any time:
- **Change the rate**: update the hourly price (net or gross)
- **Change permissions**: adjust what the trainer can do
- **Remove the association**: end collaboration with the trainer

> ⚠️ **Important**: Removing an association is irreversible. The trainer loses access to your facilities. To resume collaboration, the trainer must send a new request.

---

## Related

- [How to manage trainers: step-by-step guide](../how-to-manage-trainers.md)
- [Trainer Profile (for trainers)](../../trainer/README.md)
- [Agent Management](./agent-management.md)

---

**Last Updated**: 2026-03-29
