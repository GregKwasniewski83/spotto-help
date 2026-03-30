---
title: "Availability Schedule"
screen: trainer
role: "Trainer"
difficulty: "Easy"
status: "🟢"
lastUpdated: "2026-03-29"
---

# Availability Schedule

## Description

The schedule allows a trainer to specify the hours they are available for conducting sessions. Businesses can check your availability before scheduling a session. The schedule is visible to businesses with which you have a confirmed association.

## Schedule Types

### General Schedule (Weekly)

A recurring schedule for each week. You define it once, and it applies until changed.

| Day | Hour Range | Notes |
|-----|-----------|-------|
| **Monday through Friday** | 00:00 - 23:00 | Each day configured separately |
| **Saturday** | 00:00 - 23:00 | Separate configuration |
| **Sunday** | 00:00 - 23:00 | Separate configuration |

Each hour (hourly slot) can be marked as:
- **Available**: ready for sessions during this time
- **Unavailable**: cannot conduct sessions

To set availability, tap the appropriate slots on the weekly grid. Slots change color depending on the status.

### Specific Date Schedule

An override of the general schedule for a selected date. Useful when:
- You have a **day off** on a normally working day (e.g., holiday, vacation)
- You want to add **extra hours** on a normally free day
- You need to **change hours** for one specific day

A specific date schedule has **higher priority** than the general schedule: if you set availability for a specific day, the weekly schedule is ignored for that day.

![Trainer availability schedule: Screenshot #62](../../../assets/images/trainer/availability-schedule-detail.png)

## Assignment to Businesses

If you work with multiple businesses, you can assign hours to specific businesses:

| Feature | Description |
|---------|-------------|
| **Color coding** | Each business has a unique color assigned on the grid |
| **Visibility** | Only businesses with a confirmed association are available for selection |
| **Default state** | New slots are marked as "unavailable" by default |
| **Multiple employers** | Different hours can be assigned to different businesses on the same day |

With color coding, you can easily see how many hours you dedicate to each business and whether schedules overlap.

## Slot Statuses

| Status | Color | Description |
|--------|-------|-------------|
| **Available** | Green | Free slot: ready for sessions |
| **Reserved** | Blue | Sessions already scheduled: cannot be changed |
| **Unavailable** | Gray | Trainer unavailable during this time |

> 💡 **Tip**: You cannot change reserved slots to unavailable: you must first cancel the scheduled sessions.

## Configuration Examples

| Scenario | How to Set Up |
|----------|--------------|
| You work Mon-Fri 9:00-17:00 | In the weekly schedule, mark slots 9-17 as available for each weekday |
| Day off on a holiday (e.g., May 1st) | Add a schedule for May 1st and mark all slots as unavailable |
| Extra sessions on Saturday | Add a schedule for a specific Saturday and mark selected hours as available |
| Two businesses in one day | Assign mornings to business A (e.g., gym), afternoons to business B (e.g., court) |

---

## Related

- [How to set up a schedule: step-by-step guide](../how-to-set-availability.md)
- [Business associations](./business-associations.md)
- [Training management](./training-management.md)

---

**Last updated**: 2026-03-29
