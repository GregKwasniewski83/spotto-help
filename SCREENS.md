# Screen-by-Screen Breakdown

This document provides a comprehensive breakdown of each app screen, the features available, and what help content is needed for each area.

## Table of Contents

1. [Home Screen (Start)](#1-home-screen-start)
2. [Reservations Screen (Rezerwacje)](#2-reservations-screen-rezerwacje)
3. [Shop Screen (Sklep)](#3-shop-screen-sklep)
4. [Business Screen (Biznes)](#4-business-screen-biznes)
5. [Trainer Screen (Trener)](#5-trainer-screen-trener)
6. [Profile Screen (Profil)](#6-profile-screen-profil)

---

## 1. Home Screen (Start)

### Overview
Main landing screen where users search for facilities, browse categories, and access their favorites.

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/index.tsx`
- **Components**:
  - `components/home/HomeHeader.tsx`
  - `components/home/HomeSearchResults.tsx`
  - `components/home/CategoryCarousel.tsx`
  - `components/home/FavoritesSection.tsx`
  - `components/home/LocalBusinessesMap.tsx`

### Features & Help Content Needed

#### 1.1 Search Facilities
**Feature**: Text search with filters (location, date, facility type)
**User Flow**:
1. User taps search bar
2. Enters location (city)
3. Selects date
4. Chooses facility type (optional)
5. Sees results

**Help Content**:
- `how-to-search-facilities.md`
  - Basic search
  - Advanced filters
  - Date selection
  - Category filtering
- `features/search-functionality.md`
  - How search works
  - Search tips & tricks
  - Filtering options

**Screenshots Needed**:
- Search bar collapsed
- Search form expanded
- Search results
- No results state

#### 1.2 Category Carousel
**Feature**: Browse facilities by sport category
**User Flow**:
1. User sees category carousel on home
2. Taps category (e.g., "Strzelectwo", "Squash")
3. Sees facilities of that type

**Help Content**:
- `how-to-browse-categories.md`
  - Available categories
  - How to browse
  - All facilities view
- `features/sport-categories.md`
  - Category types
  - Category icons
  - Adding categories

**Screenshots Needed**:
- Category carousel
- Category selected
- Category results

#### 1.3 Favorites
**Feature**: View and access favorite facilities
**User Flow**:
1. User sees favorites section
2. Taps favorite facility
3. Opens booking modal

**Help Content**:
- `how-to-manage-favorites.md`
  - Adding favorites
  - Removing favorites
  - Viewing favorites
  - Booking from favorites
- `features/favorites-system.md`
  - How favorites work
  - Favorite sync
  - Favorite limits

**Screenshots Needed**:
- Favorites section (empty)
- Favorites section (with items)
- Favorite facility card
- Remove favorite action

#### 1.4 Map View
**Feature**: View nearby facilities on map
**User Flow**:
1. User taps "Map" button
2. Opens fullscreen map
3. Sees facility markers
4. Taps marker to book

**Help Content**:
- `how-to-use-map-view.md`
  - Opening map
  - Navigating map
  - Facility markers
  - Booking from map
- `features/map-view.md`
  - Map functionality
  - Location permissions
  - Nearby facilities

**Screenshots Needed**:
- Map button
- Fullscreen map
- Facility markers
- Facility popup

#### 1.5 Booking from Home
**Feature**: Quick booking directly from search results
**User Flow**:
1. User finds facility
2. Taps "Book" button
3. Booking modal opens
4. Selects time slot
5. Confirms booking

**Help Content**:
- `how-to-book-facility.md`
  - Finding facilities
  - Selecting time slots
  - Confirming booking
  - Payment process
- `features/booking-flow.md`
  - Booking steps
  - Time slot availability
  - Group bookings

**Screenshots Needed**:
- Search result card
- Book button
- Booking modal
- Time slot selection
- Confirmation

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/search/no-results.md` - Why search returns no results
- `troubleshooting/search/location-permission.md` - Location permission issues
- `troubleshooting/booking/time-slot-unavailable.md` - Time slot not available

---

## 2. Reservations Screen (Rezerwacje)

### Overview
View, manage, and cancel user's reservations (upcoming and past).

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/reservations.tsx`
- **Components**:
  - `components/reservations/ReservationCard.tsx`
  - `components/reservations/ReservationDetailsModal.tsx`

### Features & Help Content Needed

#### 2.1 View Reservations
**Feature**: List of user's bookings (upcoming/past)
**User Flow**:
1. User opens Reservations tab
2. Sees list of bookings
3. Can filter by status
4. Taps booking for details

**Help Content**:
- `how-to-view-bookings.md`
  - Upcoming bookings
  - Past bookings
  - Booking status meanings
  - Booking details

**Screenshots Needed**:
- Reservation list (upcoming)
- Reservation list (past)
- Reservation card
- Empty state

#### 2.2 Reservation Details
**Feature**: Detailed view of single reservation
**User Flow**:
1. User taps reservation
2. Modal opens with details
3. Shows facility, date, time, price
4. QR code for entry (if applicable)

**Help Content**:
- `features/reservation-details.md`
  - Booking information
  - QR code usage
  - Facility plan view
  - Contact information

**Screenshots Needed**:
- Details modal
- QR code display
- Facility plan
- Business contact info

#### 2.3 Cancel Reservation
**Feature**: Cancel upcoming booking
**User Flow**:
1. User opens reservation details
2. Taps "Cancel" button
3. Confirms cancellation
4. Receives refund (if applicable)

**Help Content**:
- `how-to-cancel-booking.md`
  - Full cancellation
  - Cancellation deadlines
  - Refund policy
  - Cancellation confirmation
- `features/cancellation-policy.md`
  - When you can cancel
  - Refund amounts
  - Cancellation fees

**Screenshots Needed**:
- Cancel button
- Confirmation dialog
- Cancellation success
- Refund information

#### 2.4 Partial Cancellation
**Feature**: Cancel individual time slots from group booking
**User Flow**:
1. User has multi-slot booking
2. Taps "Partial Cancel"
3. Selects slots to cancel
4. Confirms partial cancellation
5. Receives partial refund

**Help Content**:
- `how-to-partial-cancel.md`
  - When to use partial cancel
  - Selecting slots
  - Refund calculation
  - Confirming changes
- `features/partial-cancellation.md`
  - How it works
  - Refund calculation
  - Limitations

**Screenshots Needed**:
- Partial cancel button
- Slot selection
- Refund preview
- Confirmation

#### 2.5 Booking Status
**Feature**: Track booking status (Pending, Confirmed, Cancelled)
**User Flow**:
1. User checks reservation
2. Sees status badge
3. Understands current state

**Help Content**:
- `features/booking-status.md`
  - Status types
  - Status meanings
  - Status transitions
  - What to do for each status

**Screenshots Needed**:
- Pending status
- Confirmed status
- Cancelled status
- Failed status

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/bookings/cannot-cancel.md` - Unable to cancel
- `troubleshooting/bookings/refund-not-received.md` - Refund issues
- `troubleshooting/bookings/booking-disappeared.md` - Missing booking

---

## 3. Shop Screen (Sklep)

### Overview
Browse and purchase products (passes, memberships, packages).

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/shop.tsx`
- **Components**:
  - `components/shop/ProductCard.tsx`
  - `components/shop/ProductDetailsModal.tsx`

### Features & Help Content Needed

#### 3.1 Browse Products
**Feature**: View available products by facility
**User Flow**:
1. User opens Shop tab
2. Sees list of products
3. Can filter by facility
4. Taps product for details

**Help Content**:
- `how-to-browse-products.md`
  - Product categories
  - Filtering products
  - Product details
  - Comparing products

**Screenshots Needed**:
- Product list
- Product card
- Product filters
- Empty state

#### 3.2 Product Types
**Feature**: Different product types (passes, memberships)
**User Flow**:
1. User views products
2. Sees different types
3. Understands differences

**Help Content**:
- `features/product-types.md`
  - Single-use passes
  - Multi-use passes
  - Subscriptions
  - Packages
  - Product restrictions

**Screenshots Needed**:
- Single pass
- Multi-use pass
- Subscription
- Package

#### 3.3 Purchase Product
**Feature**: Buy product with TPay
**User Flow**:
1. User selects product
2. Taps "Buy" button
3. Redirected to TPay
4. Completes payment
5. Product added to account

**Help Content**:
- `how-to-buy-pass.md`
  - Selecting product
  - Payment process
  - Payment methods
  - Order confirmation
- `features/payment-methods.md`
  - TPay integration
  - Supported methods
  - Payment security

**Screenshots Needed**:
- Product details
- Buy button
- TPay redirect
- Purchase success

#### 3.4 View Purchased Products
**Feature**: Access user's purchased products
**User Flow**:
1. User opens "My Products" tab
2. Sees purchased items
3. Checks usage status
4. Uses product for booking

**Help Content**:
- `how-to-use-membership.md`
  - Viewing products
  - Checking usage
  - Using for bookings
  - Expiration dates

**Screenshots Needed**:
- My products list
- Product usage status
- Using product
- Expired product

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/payments/payment-failed.md` - Payment not processing
- `troubleshooting/shop/product-not-appearing.md` - Product not showing
- `troubleshooting/shop/cannot-use-pass.md` - Pass not working

---

## 4. Business Screen (Biznes)

### Overview
Business management dashboard for facility owners. Most complex screen with multiple sub-sections.

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/manage.tsx`
- **Components**:
  - `components/manage/BusinessProfileForm.tsx`
  - `components/manage/FacilityForm.tsx`
  - `components/manage/ProductForm.tsx`
  - `components/manage/AgentManagement.tsx`
  - `components/manage/TrainerAssociationsManager.tsx`
  - `components/manage/ChildBusinessesManager.tsx`
  - `components/manage/KSeFConfigurationModal.tsx`

### Features & Help Content Needed

#### 4.1 Business Profile
**Feature**: Create and manage business profile
**User Flow**:
1. New user taps "Create Profile"
2. Fills in company details (NIP, name, address)
3. Adds contact information
4. Sets up location on map
5. Uploads facility plan (optional)
6. Saves profile

**Help Content**:
- `how-to-create-profile.md`
  - Company information
  - Contact details
  - Location setup
  - Facility plan upload
  - Profile verification
- `features/business-profile.md`
  - Required fields
  - NIP validation
  - Profile types (standalone vs child)
  - Profile visibility

**Screenshots Needed**:
- Create profile button
- Profile form (empty)
- Profile form (filled)
- Location selector
- Facility plan upload
- Profile saved

#### 4.2 Facility Management
**Feature**: Add and manage sports facilities
**User Flow**:
1. User taps "+ Dodaj" in Facilities
2. Fills facility form
3. Sets name, type, description
4. Configures pricing
5. Sets availability
6. Saves facility

**Help Content**:
- `how-to-add-facility.md`
  - Basic information
  - Facility types
  - Pricing setup
  - Availability configuration
  - Multiple facilities
- `features/facility-management.md`
  - Facility types
  - Capacity management
  - Court/field details

**Screenshots Needed**:
- Add facility button
- Facility form
- Facility type dropdown
- Saved facility card
- Edit facility
- Delete facility

#### 4.3 Schedule Management
**Feature**: Configure weekly and date-specific availability
**User Flow**:
1. User opens schedule section
2. Sets weekday hours
3. Sets Saturday hours
4. Sets Sunday hours
5. Adds specific date overrides (holidays)
6. Saves schedule

**Help Content**:
- `how-to-manage-schedule.md`
  - Weekly schedule setup
  - Time slot configuration
  - Holiday management
  - Specific date overrides
  - Bulk editing
- `features/schedule-management.md`
  - Schedule types
  - Time slot logic
  - Date-specific vs general
  - Schedule priorities

**Screenshots Needed**:
- Schedule selector
- Weekday schedule
- Specific date picker
- Time slot grid
- Schedule saved

#### 4.4 TPay Integration
**Feature**: Set up payment processing
**User Flow**:
1. User opens TPay section
2. Enters business details (NIP, legal form, category)
3. Provides contact person info
4. Auto-registers with TPay
5. Receives merchant ID

**Help Content**:
- `how-to-setup-tpay.md`
  - Prerequisites (NIP, legal form)
  - Registration steps
  - Merchant verification
  - Testing payments
  - Going live
- `features/tpay-integration.md`
  - What is TPay
  - How it works
  - Payment flow
  - Fees & commissions
  - Payout schedule

**Screenshots Needed**:
- TPay section
- TPay form
- Category dropdown
- Legal form dropdown
- Registration success
- Merchant ID display

#### 4.5 KSeF Integration
**Feature**: Electronic invoicing system
**User Flow**:
1. User opens KSeF configuration
2. Enters KSeF credentials
3. Selects environment (test/prod)
4. Tests connection
5. Enables KSeF
6. Auto-generates invoices

**Help Content**:
- `how-to-setup-ksef.md`
  - What is KSeF
  - Getting credentials
  - Configuration steps
  - Testing connection
  - Enabling production
- `features/ksef-integration.md`
  - Invoice generation
  - Auto-send to customers
  - Error handling
  - Sync status

**Screenshots Needed**:
- KSeF status card
- Configuration modal
- Environment selector
- Connection test
- Enabled status

#### 4.6 Agent Management
**Feature**: Invite and manage business agents
**User Flow**:
1. User taps "Invite Agent"
2. Enters agent email
3. Sends invitation
4. Agent accepts via email
5. Agent appears in active list
6. User can remove agent

**Help Content**:
- `how-to-add-agents.md`
  - What are agents
  - Inviting agents
  - Agent permissions
  - Managing agents
  - Removing agents
- `features/agent-management.md`
  - Agent roles
  - What agents can do
  - Invitation process
  - Security

**Screenshots Needed**:
- Invite agent button
- Email input form
- Pending invitation
- Active agent
- Remove agent confirmation

#### 4.7 Trainer Associations
**Feature**: Associate trainers with business
**User Flow**:
1. Trainer requests association
2. Business owner receives request
3. Owner reviews request
4. Owner sets pricing & permissions
5. Owner confirms association
6. Trainer can create trainings

**Help Content**:
- `features/trainer-associations.md`
  - How associations work
  - Pricing configuration
  - Permission settings
  - Employee vs contractor
  - Managing associations
- `how-to-manage-trainers.md`
  - Reviewing requests
  - Setting rates
  - Configuring permissions
  - Removing trainers

**Screenshots Needed**:
- Pending request
- Pricing modal
- Permissions modal
- Active trainer
- Remove trainer

#### 4.8 Child Businesses
**Feature**: Parent-child business relationships
**User Flow**:
1. Child business requests association
2. Parent reviews request
3. Parent sets permissions (TPay, NIP)
4. Parent confirms
5. Child inherits settings

**Help Content**:
- `features/child-businesses.md`
  - Parent-child concept
  - Benefits
  - Permission inheritance
  - TPay sharing
  - NIP sharing
- `how-to-manage-child-businesses.md`
  - Reviewing requests
  - Setting permissions
  - Confirming associations
  - Removing children

**Screenshots Needed**:
- Child request
- Permission configuration
- Active child business
- Remove child

#### 4.9 Product Management
**Feature**: Create and sell products (passes, memberships)
**User Flow**:
1. User taps "+ Add Product"
2. Fills product form
3. Sets type, price, duration
4. Configures facility restrictions
5. Saves product
6. Product visible in shop

**Help Content**:
- `how-to-create-product.md`
  - Product types
  - Pricing setup
  - Duration configuration
  - Facility restrictions
  - VAT configuration
- `features/product-management.md`
  - Product types explained
  - Pricing strategies
  - Usage tracking

**Screenshots Needed**:
- Add product button
- Product form
- Product type selector
- Product saved
- Edit/delete product

#### 4.10 Monthly Reports
**Feature**: Generate business reports
**User Flow**:
1. User taps "Generate Report"
2. Selects month/year
3. Views report summary
4. Downloads PDF (optional)

**Help Content**:
- `features/monthly-reports.md`
  - Report contents
  - Report generation
  - Report download
  - Understanding metrics

**Screenshots Needed**:
- Report button
- Month/year selector
- Report preview
- Download report

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/business/profile-save-failed.md` - Profile won't save
- `troubleshooting/business/tpay-registration-failed.md` - TPay issues
- `troubleshooting/business/ksef-connection-failed.md` - KSeF errors
- `troubleshooting/business/schedule-not-saving.md` - Schedule issues
- `troubleshooting/business/facility-plan-upload-failed.md` - File upload errors

---

## 5. Trainer Screen (Trener)

### Overview
Trainer management dashboard for creating and managing trainings.

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/trainer.tsx`
- **Components**:
  - `components/trainer/TrainerProfileModal.tsx`
  - `components/trainer/TrainingModal.tsx`
  - `components/trainer/TrainingsTab.tsx`
  - `components/trainer/TrainingParticipantsModal.tsx`

### Features & Help Content Needed

#### 5.1 Trainer Profile
**Feature**: Create and manage trainer profile
**User Flow**:
1. User taps "Create Trainer Profile"
2. Fills in details (NIP, company name, hourly rate)
3. Adds specializations
4. Adds description
5. Saves profile

**Help Content**:
- `how-to-create-trainer-profile.md`
  - Profile requirements
  - NIP for trainers
  - Setting rates
  - Specializations
  - Profile visibility
- `features/trainer-profile.md`
  - Profile fields
  - Trainer verification
  - Public vs private info

**Screenshots Needed**:
- Create profile button
- Profile form
- Specializations selector
- Profile saved

#### 5.2 Business Associations
**Feature**: Request association with business facilities
**User Flow**:
1. Trainer searches for business
2. Sends association request
3. Waits for approval
4. Business sets pricing/permissions
5. Association confirmed
6. Can create trainings at facility

**Help Content**:
- `how-to-associate-with-business.md`
  - Finding businesses
  - Sending requests
  - Waiting for approval
  - Understanding permissions
  - Multiple associations
- `features/business-associations.md`
  - Association process
  - Permission types
  - Pricing agreements
  - Employee vs contractor

**Screenshots Needed**:
- Search businesses
- Send request button
- Pending request
- Active association
- Association details

#### 5.3 Training Management
**Feature**: Create and manage group trainings
**User Flow**:
1. Trainer taps "+ Create Training"
2. Selects associated facility
3. Fills training details
4. Sets sessions (dates/times)
5. Sets max participants
6. Sets price
7. Publishes training

**Help Content**:
- `how-to-create-training.md`
  - Training information
  - Session scheduling
  - Participant limits
  - Pricing setup
  - Publishing training
- `features/training-management.md`
  - Training types
  - Session management
  - Participant tracking
  - Cancellation policy

**Screenshots Needed**:
- Create training button
- Training form
- Session configuration
- Training published
- Edit/delete training

#### 5.4 Participant Management
**Feature**: View and manage training participants
**User Flow**:
1. Trainer opens training
2. Views participant list
3. Sees payment status
4. Can add notes
5. Can remove participant (refund)

**Help Content**:
- `features/participant-management.md`
  - Viewing participants
  - Participant details
  - Payment status
  - Adding notes
  - Removing participants

**Screenshots Needed**:
- Participants button
- Participant list
- Participant details
- Add note
- Remove participant

#### 5.5 Training Calendar
**Feature**: Calendar view of upcoming trainings
**User Flow**:
1. Trainer views calendar
2. Sees all sessions
3. Taps session for details
4. Manages attendance

**Help Content**:
- `features/training-calendar.md`
  - Calendar view
  - Session details
  - Attendance tracking
  - Rescheduling sessions

**Screenshots Needed**:
- Calendar view
- Session detail
- Attendance list

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/trainer/profile-creation-failed.md` - Profile issues
- `troubleshooting/trainer/association-rejected.md` - Association denied
- `troubleshooting/trainer/training-not-visible.md` - Training not showing
- `troubleshooting/trainer/cannot-add-session.md` - Session issues

---

## 6. Profile Screen (Profil)

### Overview
User account settings and profile management.

### Code Reference
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/profile.tsx`
- **Main File**: `../spotto-monorepo/packages/mobile/app/(tabs)/settings.tsx`
- **Components**:
  - `components/profile/ProfileForm.tsx`
  - `components/profile/PrivacySettings.tsx`

### Features & Help Content Needed

#### 6.1 Edit Profile
**Feature**: Update personal information
**User Flow**:
1. User opens Profile tab
2. Taps "Edit Profile"
3. Updates name, avatar, etc.
4. Saves changes

**Help Content**:
- `how-to-edit-profile.md`
  - Updating name
  - Changing avatar
  - Email address
  - Phone number
  - Profile visibility

**Screenshots Needed**:
- Profile view
- Edit profile button
- Profile form
- Save confirmation

#### 6.2 Change Password
**Feature**: Update account password
**User Flow**:
1. User taps "Change Password"
2. Enters current password
3. Enters new password
4. Confirms new password
5. Saves

**Help Content**:
- `how-to-change-password.md`
  - Password requirements
  - Changing password
  - Forgot password
  - Password reset

**Screenshots Needed**:
- Change password button
- Password form
- Password updated

#### 6.3 Privacy Settings
**Feature**: Manage privacy preferences
**User Flow**:
1. User opens Settings
2. Scrolls to Privacy section
3. Toggles various settings
4. Changes saved automatically

**Help Content**:
- `how-to-manage-privacy.md`
  - Analytics tracking
  - Crash reports
  - Location sharing
  - Data sharing
  - Marketing emails
  - Push notifications
- `features/privacy-settings.md`
  - What each setting does
  - Privacy implications
  - GDPR compliance

**Screenshots Needed**:
- Privacy settings section
- Individual toggles
- Setting descriptions

#### 6.4 Role Management
**Feature**: View and accept user roles
**User Flow**:
1. User has multiple roles (Player, Business Owner, Trainer)
2. Can switch between contexts
3. Sees role-specific features

**Help Content**:
- `features/role-management.md`
  - User roles explained
  - Role permissions
  - Switching roles
  - Multiple role access

**Screenshots Needed**:
- Role selector
- Role-specific features

#### 6.5 Account Settings
**Feature**: Manage account preferences
**User Flow**:
1. User opens Settings
2. Configures language (future)
3. Manages notifications
4. Logs out
5. Deletes account (future)

**Help Content**:
- `features/account-settings.md`
  - Language settings
  - Notification preferences
  - Logout
  - Account deletion

**Screenshots Needed**:
- Settings screen
- Notification settings
- Logout confirmation
- Account deletion

### Common Issues & Troubleshooting

**Troubleshooting Content**:
- `troubleshooting/profile/cannot-change-password.md` - Password update fails
- `troubleshooting/profile/avatar-upload-failed.md` - Avatar issues
- `troubleshooting/profile/settings-not-saving.md` - Settings not persisting

---

## Cross-Screen Features

### Features That Span Multiple Screens

#### Authentication
**Screens**: All screens (when not logged in)
**Help Content**:
- `common/account-creation.md`
- `common/login.md`
- `common/google-signin.md`
- `troubleshooting/authentication/login-failed.md`

#### Navigation
**Screens**: All screens
**Help Content**:
- `common/navigation.md`
- `common/tab-bar.md`
- `common/back-navigation.md`

#### Search
**Screens**: Home, Shop
**Help Content**:
- `common/search-tips.md`
- `common/filters.md`

#### Payments
**Screens**: Home (booking), Shop, Reservations (refunds)
**Help Content**:
- `common/payment-process.md`
- `common/refund-policy.md`
- `troubleshooting/payments/payment-failed.md`

---

## Priority Matrix

### High Priority (Must Have)

1. **Home Screen**:
   - Search facilities
   - Category browsing
   - Booking flow

2. **Reservations Screen**:
   - View bookings
   - Cancel booking
   - Reservation details

3. **Business Screen**:
   - Create profile
   - Add facilities
   - TPay setup
   - Schedule management

### Medium Priority (Should Have)

4. **Shop Screen**:
   - Browse products
   - Purchase products
   - Use passes

5. **Trainer Screen**:
   - Create trainer profile
   - Create trainings
   - Associate with businesses

6. **Profile Screen**:
   - Edit profile
   - Privacy settings
   - Change password

### Low Priority (Nice to Have)

7. **Advanced Features**:
   - KSeF integration
   - Child businesses
   - Agent management
   - Monthly reports

---

## Content Creation Order

### Phase 1: Core User Flows (Weeks 1-2)
1. Home → Search → Book
2. Reservations → View → Cancel
3. Profile → Edit → Settings

### Phase 2: Business Features (Weeks 3-4)
4. Business → Create Profile → Add Facility
5. Business → TPay Setup
6. Business → Schedule Management

### Phase 3: Advanced Features (Weeks 5-6)
7. Trainer → Profile → Trainings
8. Shop → Products → Purchase
9. Business → Agents, Trainers, Children

### Phase 4: Troubleshooting & Polish (Week 7)
10. Common issues for each screen
11. Error messages
12. FAQs

---

**Last Updated**: 2026-03-17
**Maintainer**: Spotto Development Team
