# InsureWright MVP Vision

Product definition portal for capturing stakeholder decisions that shape InsureWright as a sellable SaaS platform for MGAs in UK and Ireland.

## What This App Does

This portal captures **product-level decisions** from Neil (MGA SME) across 8 categories:

1. **Market & Positioning** (8 decisions) — Target customer, competitive landscape, pricing
2. **User Personas & Roles** (10 decisions) — Who uses the system, what they need, RBAC
3. **User Flows & Workflows** (9 decisions) — Submission lifecycle, triage, referrals
4. **MVP Scope & Priorities** (12 decisions) — What's in V1, what waits for V2
5. **Sample Artifacts** (8 decisions) — Real documents for extraction testing
6. **Data Model & Configuration** (8 decisions) — Fields, classifications, rules engine
7. **Compliance & Regulatory** (6 decisions) — FCA, CBI, Lloyd's, GDPR, AI governance
8. **Product Success & Validation** (6 decisions) — POC criteria, pilot profile, scaling

**Total: 67 decisions** across 8 categories.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). PIN: `220202`

## Testing

```bash
npm test
```

40 tests validate decision structure, ID conventions, category mappings, and branding.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- JSON file persistence
- PIN-based authentication

## Related

- **InsureWright Onboarding** — Client-specific MGA configuration (separate app)
- This app captures the **product** decisions; Onboarding captures **client** decisions
