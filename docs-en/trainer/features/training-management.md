---
title: "Training Management"
screen: trainer
role: "Trainer"
difficulty: "Medium"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Training Management

## Description

Trainings are sessions conducted by a trainer at a sports facility. Each training can have multiple sessions on different dates, a price, a participant limit, and an association with a facility reservation.

## Training Data

| Field | Description |
|-------|-------------|
| **Title** | Training name (3-100 characters) |
| **Description** | Detailed description (10-1000 characters) |
| **Specialization** | Sport discipline |
| **Duration** | 15-480 minutes (in 15-min increments) |
| **Max. participants** | 1-50 people |
| **Net price** | Max 10,000 PLN |
| **Gross price** | Calculated automatically (with VAT) |

## Sessions

A training can have multiple sessions:
- Each session has a separate date
- Each session has a start and end time
- Sessions can be on different days

## Training List

On each training card, you can see:
- Title and description
- Facility (name and business)
- Date and time of the first session
- Duration (minutes)
- Number of participants (current/maximum)
- Gross price (or net if gross is unavailable)

## Employee Restrictions

Trainers with "Employee" status cannot create or edit trainings. Trainings are created for them by the business.

---

## Related

- [How to create a training: guide](../how-to-create-training.md)
- [How to manage participants](../how-to-manage-participants.md)

---

**Last updated**: 2026-03-29
