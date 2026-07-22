# Ignite Fitness Website Audit Report

Generated: July 23, 2026

## Overview

- **Framework**: Next.js 16.2.11 (App Router)
- **Total Routes**: 10
- **Internal Links Audited**: 30+
- **External Links Audited**: 8

---

## Issues Found

### 1. Placeholder/Generic External Links

| File | Link | Issue |
|---|---|---|
| `components/Footer.tsx` | `https://instagram.com` | Generic — not actual Instagram profile |
| `components/Footer.tsx` | `https://youtube.com` | Generic — not actual YouTube channel |
| `components/LocationSection.tsx` | `https://instagram.com` | Same generic Instagram link |

**Recommendation**: Replace with actual social media profile URLs for Ignite Fitness.

---

### 2. Placeholder App Store Links

| File | Link | Issue |
|---|---|---|
| `components/AppSection.tsx` | `https://apps.apple.com` | Generic — no real app listing |
| `components/AppSection.tsx` | `https://play.google.com` | Generic — no real app listing |

**Recommendation**: If the app is not yet published, consider removing the section or linking to a "coming soon" page. If published, use actual store URLs.

---

### 3. Google Maps Embed Uses Fake Coordinates

| File | Issue |
|---|---|
| `components/BranchesSection.tsx` | Embed URL uses placeholder coordinates (`0x3bb8d7123456789a`, timestamp `1680000000000`) — will not show real location |
| `components/LocationSection.tsx` | Same fake embed URL used |

**Recommendation**: Generate real embed URLs from Google Maps for both branch locations (Malmaddi and Gandhi Nagar, Dharwad).

---

### 4. Duplicate/Reused Images

| Component | Images Used | Issue |
|---|---|---|
| `components/TrainersSection.tsx` | `hero-gym.png`, `concept-gym.png`, `hero-gym.png` | Same 2 gym photos used as trainer portraits |
| `components/GallerySection.tsx` | Alternates `hero-gym.png` / `concept-gym.png` | Only 2 unique images for 6 gallery items |

**Recommendation**: Add actual trainer photos and additional gym/facility images to make the site feel authentic.

---

### 5. Footer Links Using `/contact` as Catch-All

| Link Text | Current Target | Better Target |
|---|---|---|
| Privacy Policy | `/contact` | Dedicated `/privacy` page or anchor section |
| Terms of Service | `/contact` | Dedicated `/terms` page or anchor section |
| Malmaddi Branch | `/contact` | `/branches` |
| Gandhi Nagar Branch | `/contact` | `/branches` |
| FAQ | `/membership` | Dedicated FAQ section or anchor |

**Recommendation**: Create dedicated pages or at minimum link to the most relevant existing page (e.g., branch links should go to `/branches`).

---

### 6. Phone Number Hardcoded in Multiple Files

| File | Line Reference |
|---|---|
| `components/Footer.tsx` | WhatsApp + phone links |
| `components/LocationSection.tsx` | Phone + WhatsApp links |
| `components/BranchesSection.tsx` | Phone links for both branches |

**Recommendation**: Extract `+918197917330` into a shared constant in `lib/` (e.g., `lib/constants.ts`) to make future updates easier.

---

## What's Working

| Category | Status |
|---|---|
| All 10 internal routes | Valid and accessible |
| All 30+ internal `<Link>` hrefs | Point to existing pages |
| All image assets in `<Image>` | Present in `/public` |
| Favicon and icon files | Present and configured |
| Phone (`tel:`) links | Properly formatted |
| WhatsApp (`wa.me`) links | Properly formatted |
| Dynamic admin links (`tel:`, `mailto:`) | Correctly use inquiry data |
| Mobile nav | Mirrors desktop nav completely |
| Open Graph metadata | Configured in layout |

---

## Route Map

| Route | Page File | Status |
|---|---|---|
| `/` | `app/page.tsx` | OK |
| `/branches` | `app/branches/page.tsx` | OK |
| `/concept` | `app/concept/page.tsx` | OK |
| `/facilities` | `app/facilities/page.tsx` | OK |
| `/classes` | `app/classes/page.tsx` | OK |
| `/membership` | `app/membership/page.tsx` | OK |
| `/trainers` | `app/trainers/page.tsx` | OK |
| `/gallery` | `app/gallery/page.tsx` | OK |
| `/contact` | `app/contact/page.tsx` | OK |
| `/admin` | `app/admin/page.tsx` | OK |
