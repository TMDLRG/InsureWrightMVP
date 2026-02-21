import { Category, DecisionDefinition } from "./types";

// ============================================================
// CATEGORIES — 8 product-level decision areas
// ============================================================

export const CATEGORIES: Category[] = [
  {
    slug: "market-positioning",
    name: "Market & Positioning",
    description:
      "Define the target market, competitive landscape, and go-to-market strategy for InsureWright as a SaaS product.",
    icon: "Crosshair",
    order: 1,
  },
  {
    slug: "user-personas-roles",
    name: "User Personas & Roles",
    description:
      "Define who uses the system day-to-day — their backgrounds, responsibilities, pain points, and permissions.",
    icon: "Users",
    order: 2,
  },
  {
    slug: "user-flows-workflows",
    name: "User Flows & Workflows",
    description:
      "Map the actual submission lifecycle from intake through quote, including escalation and exception handling.",
    icon: "GitBranch",
    order: 3,
  },
  {
    slug: "mvp-scope-priorities",
    name: "MVP Scope & Priorities",
    description:
      "Draw the line on V1 — what must be in the 3-week POC to be credible, what can wait for V2.",
    icon: "Target",
    order: 4,
  },
  {
    slug: "sample-artifacts",
    name: "Sample Artifacts & Reference Material",
    description:
      "The concrete documents and templates we need to build and test against — submissions, workbooks, templates.",
    icon: "FileText",
    order: 5,
  },
  {
    slug: "data-model-configuration",
    name: "Data Model & Configuration",
    description:
      "What the product needs to be configurable per MGA — fields, classifications, rules, terminology.",
    icon: "Database",
    order: 6,
  },
  {
    slug: "compliance-regulatory",
    name: "Compliance & Regulatory",
    description:
      "UK/Ireland regulatory landscape — FCA, Central Bank of Ireland, Lloyd's, GDPR, and AI governance requirements.",
    icon: "Shield",
    order: 7,
  },
  {
    slug: "product-success-validation",
    name: "Product Success & Validation",
    description:
      "How we know we've built the right thing — POC success criteria, pilot profile, scaling path, partnership model.",
    icon: "Award",
    order: 8,
  },
];

// ============================================================
// DECISION DEFINITIONS — 67 items across 8 categories
// ============================================================

export const DECISIONS: DecisionDefinition[] = [
  // =====================================================
  // CATEGORY 1: MARKET & POSITIONING (MKT-001 → MKT-008)
  // =====================================================
  {
    id: "MKT-001",
    categorySlug: "market-positioning",
    title: "Target MGA Profile",
    question:
      "Describe the ideal MGA customer for this product. Size, lines, maturity, geography, pain points.",
    context:
      "We need to understand exactly who we're building for. The ideal customer profile shapes every product decision — from which features to prioritise to how we price and sell. Think about the MGAs you've built, sold, or worked with. What size are they (GWP, headcount)? What lines do they write? Are they start-ups or established? UK-only, Ireland, or both? What are their biggest operational pain points?",
    inputType: "free_text",
    placeholder:
      "e.g., Mid-market MGAs writing £5M–£50M GWP, primarily commercial lines (GL, property, D&O). 5–20 staff. UK and Ireland. Struggling with manual submission processing, inconsistent triage, and audit readiness...",
    required: true,
    order: 1,
  },
  {
    id: "MKT-002",
    categorySlug: "market-positioning",
    title: "Current Pain Points",
    question:
      "What are the top 3–5 pain points MGAs face today in processing submissions? What takes too long, costs too much, or produces errors?",
    context:
      "Pain points drive buying decisions. We need to understand the daily frustrations that make MGAs look for a new tool. Think about the entire submission lifecycle: intake, triage, data gaps, rating, quoting, audit. Where does the process break down most often? What causes missed deadlines, lost submissions, or regulatory concerns?",
    inputType: "free_text",
    placeholder:
      "e.g., 1) Manual re-keying of submission data from PDF into spreadsheets. 2) Inconsistent triage decisions across junior UWs. 3) Audit packs assembled retrospectively rather than in real time...",
    required: true,
    order: 2,
  },
  {
    id: "MKT-003",
    categorySlug: "market-positioning",
    title: "Competitive Landscape",
    question:
      "What tools do MGAs in UK/Ireland use today (Acturis, INSTANDA, Open GI, SSP, etc.)? Where are the gaps? What do they do well vs. poorly?",
    context:
      "Understanding the competitive landscape helps us position InsureWright correctly. We need to know what's already in the market, what MGAs like about current tools, and crucially, what's missing. This shapes our differentiation story and helps us avoid building what already exists.",
    inputType: "free_text",
    placeholder:
      "e.g., Acturis is dominant for policy admin but weak on intelligent triage. INSTANDA does digital product config but doesn't handle unstructured submissions. Open GI is broker-focused. No one does AI-driven extraction + triage + audit in one flow...",
    required: true,
    order: 3,
  },
  {
    id: "MKT-004",
    categorySlug: "market-positioning",
    title: "Differentiation",
    question:
      'In one paragraph, why would an MGA buy InsureWright over their current setup? What\'s the "10x better" pitch?',
    context:
      "This is the elevator pitch. If you had 60 seconds with an MGA principal, what would you say? The answer should be specific to the UK/Ireland market and reference real pain points that current tools don't solve.",
    inputType: "free_text",
    placeholder:
      "e.g., InsureWright takes a broker submission PDF, extracts all key fields with provenance, runs your triage rules automatically, flags adverse news, rates using your actual workbook, and generates a quote pack with a full audit trail — in under 60 seconds. No re-keying, no missed risks, no retrospective audit assembly...",
    required: true,
    order: 4,
  },
  {
    id: "MKT-005",
    categorySlug: "market-positioning",
    title: "Buy Triggers",
    question:
      "What event or situation causes an MGA to look for a new underwriting tool? Growth? Regulatory pressure? New capacity provider?",
    context:
      "Buy triggers tell us when to approach prospects and what messaging to use. Is it when they win a new binding authority? When Lloyd's tightens audit requirements? When their book grows beyond what manual processes can handle? When a key underwriter leaves?",
    inputType: "free_text",
    placeholder:
      "e.g., Winning a new binding authority from a Lloyd's syndicate that requires digital audit trails. Growing past 10 submissions/day where manual processing breaks down. Regulatory exam finding gaps in decision documentation...",
    required: true,
    order: 5,
  },
  {
    id: "MKT-006",
    categorySlug: "market-positioning",
    title: "Deal Breakers",
    question:
      "What would cause an MGA to reject InsureWright immediately? Missing feature, compliance gap, integration limitation?",
    context:
      "Deal breakers are the non-negotiable requirements. If we're missing any of these, no amount of other features will matter. These are the things that cause an MGA to say 'no' in the first 5 minutes of a demo.",
    inputType: "free_text",
    placeholder:
      "e.g., No integration with Acturis/policy admin. Can't handle their specific rating workbook. Doesn't meet FCA record-keeping requirements. No UK data residency...",
    required: true,
    order: 6,
  },
  {
    id: "MKT-007",
    categorySlug: "market-positioning",
    title: "Pricing Expectations",
    question:
      "How do MGAs expect to pay for underwriting technology? Per-seat, per-submission, percentage of GWP, flat monthly?",
    context:
      "Pricing model affects product design (do we need usage metering?) and go-to-market strategy. Different pricing models suit different MGA sizes. We need to understand what the market expects and what aligns incentives correctly.",
    inputType: "single_select",
    options: [
      {
        value: "per_seat",
        label: "Per-seat monthly licence",
        description: "Fixed cost per named user per month (e.g., £200/user/month)",
      },
      {
        value: "per_submission",
        label: "Per-submission fee",
        description: "Pay per submission processed (e.g., £5–£15 per submission)",
      },
      {
        value: "gwp_percentage",
        label: "Percentage of GWP",
        description: "Small percentage of written premium (e.g., 0.1–0.5% of GWP)",
      },
      {
        value: "flat_monthly",
        label: "Flat monthly subscription",
        description: "Tiered flat fee based on MGA size (e.g., £2K–£10K/month)",
      },
    ],
    required: true,
    order: 7,
  },
  {
    id: "MKT-008",
    categorySlug: "market-positioning",
    title: "Sales Motion",
    question:
      "How would you sell this to an MGA? Demo-led? Proof of concept? Referral from capacity providers? What's the typical buying cycle?",
    context:
      "The sales motion determines how we structure demos, trials, and partnerships. MGA buying cycles can be long (months) or fast (weeks) depending on the trigger. Understanding the typical process helps us plan the go-to-market timeline and resource requirements.",
    inputType: "free_text",
    placeholder:
      "e.g., Demo-led to UW manager, then POC with real submissions. Buying cycle is 4–8 weeks. Key decision maker is the CUO or CEO. Channel partners: Lloyd's brokers, capacity providers who want better oversight of their coverholders...",
    required: true,
    order: 8,
  },

  // =====================================================
  // CATEGORY 2: USER PERSONAS & ROLES (USR-001 → USR-010)
  // =====================================================
  {
    id: "USR-001",
    categorySlug: "user-personas-roles",
    title: "Junior Underwriter Profile",
    question:
      "Describe the junior UW at a typical MGA. Background, daily responsibilities, tools they use, what frustrates them, what they wish they had.",
    context:
      "The junior UW is likely the primary daily user of InsureWright. Their workflow, skill level, and pain points directly shape the UI/UX. We need to understand: What's their background (insurance qualifications, years of experience)? How many submissions do they handle per day? What tools do they currently use? What takes them the most time?",
    inputType: "free_text",
    placeholder:
      "e.g., Typically CII-qualified or studying, 1–3 years experience. Handles 10–20 submissions/day. Uses Acturis for policy admin, Excel for rating, email for broker comms. Frustrated by re-keying data from PDFs, inconsistent triage guidance, and assembling audit evidence after the fact...",
    required: true,
    order: 1,
  },
  {
    id: "USR-002",
    categorySlug: "user-personas-roles",
    title: "Senior Underwriter Profile",
    question:
      "Describe the senior UW. What decisions do they make? What authority do they have? How much time do they spend on referrals vs. direct writing?",
    context:
      "Senior UWs handle referrals and exceptions. Their workflow determines the referral UI — what information they need to see, what actions they can take, and how quickly they need to respond. Understanding their authority levels shapes the role-based access control design.",
    inputType: "free_text",
    placeholder:
      "e.g., 5–10 years experience, ACII-qualified. Authority to bind up to £500K premium. Reviews 5–10 referrals/day. Needs to see: original submission, extraction summary, which rules triggered, adverse news findings. Actions: approve, modify terms, decline, request more info...",
    required: true,
    order: 2,
  },
  {
    id: "USR-003",
    categorySlug: "user-personas-roles",
    title: "Underwriting Manager Profile",
    question:
      "Describe the UW manager. What do they monitor? What reports do they need? How do they measure team performance?",
    context:
      "The UW manager is likely the budget holder and buying decision-maker. They need dashboards, reports, and oversight capabilities. Understanding what they monitor (turnaround times, hit ratios, referral rates) shapes our analytics and reporting features.",
    inputType: "free_text",
    placeholder:
      "e.g., Oversees a team of 5–8 UWs. Monitors: submissions pipeline, average processing time, referral rate, hit ratio (quotes that bind), loss ratio trends. Needs weekly MI reports for capacity providers. Key concern: consistent application of underwriting guidelines...",
    required: true,
    order: 3,
  },
  {
    id: "USR-004",
    categorySlug: "user-personas-roles",
    title: "Broker Relationship",
    question:
      "Describe the typical broker interaction. How do brokers submit? What do they expect back and how fast? What makes a broker happy vs. frustrated?",
    context:
      "Brokers are the primary source of business for MGAs. Their experience with the submission and quoting process directly affects the MGA's competitiveness. We need to understand: submission methods (email, portal, both?), expected turnaround times, communication preferences, and what makes them choose one MGA over another.",
    inputType: "free_text",
    placeholder:
      "e.g., Brokers submit via email (90%) with PDF attachments. Expect acknowledgement within 2 hours, quote within 24–48 hours. Frustrated by: requests for info they already provided, slow responses, unclear decline reasons. Happy when: fast turnaround, clear quote options, easy binding process...",
    required: true,
    order: 4,
  },
  {
    id: "USR-005",
    categorySlug: "user-personas-roles",
    title: "Compliance Officer Profile",
    question:
      "Describe the compliance/audit role. What do they review? How often? What evidence do they need? What regulations drive their work?",
    context:
      "Compliance officers validate that underwriting decisions are properly documented and defensible. Their requirements shape the audit pack format, retention policies, and reporting capabilities. In the UK/Ireland market, FCA and Central Bank requirements are key drivers.",
    inputType: "free_text",
    placeholder:
      "e.g., Reviews a sample of decisions quarterly. Needs to see: original submission, extracted data with provenance, rule evaluations with timestamps, adverse news results, rating inputs/outputs, final decision rationale. Driven by FCA Consumer Duty, SM&CR accountability, Lloyd's audit standards...",
    required: true,
    order: 5,
  },
  {
    id: "USR-006",
    categorySlug: "user-personas-roles",
    title: "Operations / Admin Profile",
    question:
      "Who sets up and maintains the system at an MGA? Is this a dedicated role or part of someone's other job? What technical skill level?",
    context:
      "System administration determines how much configuration UI we need to build vs. what can be file-based or developer-managed. If a non-technical person needs to update rules or templates, we need a friendly admin interface. If it's always a technical resource, we can use config files.",
    inputType: "free_text",
    placeholder:
      "e.g., Usually the UW manager or a part-time ops person. No dedicated IT staff. Technical skill: comfortable with Excel, basic web apps, but not coding. They need to be able to update appetite rules, upload new rating workbooks, and manage user access without developer help...",
    required: true,
    order: 6,
  },
  {
    id: "USR-007",
    categorySlug: "user-personas-roles",
    title: "Actuarial / Rating Team",
    question:
      "Who owns the rating workbooks? How do they update rates? What's their involvement in the underwriting workflow?",
    context:
      "The actuarial/rating team maintains the pricing models. Their workflow determines how we handle workbook uploads, versioning, and validation. Do they update rates quarterly? Annually? Do they need to test new rates before going live?",
    inputType: "free_text",
    placeholder:
      "e.g., At smaller MGAs, the CUO or a consulting actuary owns the workbook. Updated annually at renewal of the binding authority, with mid-term adjustments if loss experience is adverse. They provide an Excel file; someone loads it into the system. Need to version-track which workbook was used for each quote...",
    required: true,
    order: 7,
  },
  {
    id: "USR-008",
    categorySlug: "user-personas-roles",
    title: "Capacity Provider / Reinsurer",
    question:
      "What does the capacity provider (Lloyd's syndicate, insurer) need to see? Bordereaux? Audit packs? How do they oversee the MGA?",
    context:
      "Capacity providers delegate underwriting authority to MGAs but retain oversight. Their requirements shape our reporting, bordereaux generation, and audit pack format. Lloyd's syndicates have specific coverholder oversight standards. Understanding their needs helps us build features that make MGAs more attractive to capacity providers.",
    inputType: "free_text",
    placeholder:
      "e.g., Monthly bordereaux (premium, claims, pipeline). Quarterly audit packs on a sample basis. Annual binding authority audit. Need to demonstrate: decisions are within authority, rules are consistently applied, adverse news is screened, records are complete. Lloyd's coverholder standards apply...",
    required: true,
    order: 8,
  },
  {
    id: "USR-009",
    categorySlug: "user-personas-roles",
    title: "Role Permissions Matrix",
    question:
      "For each role, what actions can they perform? (view submissions, approve referrals, change rules, export data, manage users)",
    context:
      "This matrix directly maps to our role-based access control (RBAC) implementation. Each row is a persona, each column is a system capability. This determines what each user sees and can do in the application.",
    inputType: "data_table",
    tableColumns: [
      { key: "role", label: "Role", type: "text", required: true },
      {
        key: "viewSubmissions",
        label: "View Submissions",
        type: "select",
        options: [
          { value: "all", label: "All" },
          { value: "own", label: "Own Only" },
          { value: "none", label: "None" },
        ],
        required: true,
      },
      {
        key: "approveReferrals",
        label: "Approve Referrals",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        required: true,
      },
      {
        key: "changeRules",
        label: "Change Rules",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        required: true,
      },
      {
        key: "exportData",
        label: "Export Data",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        required: true,
      },
      {
        key: "manageUsers",
        label: "Manage Users",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        required: true,
      },
    ],
    placeholder:
      "Add a row for each role: Junior UW, Senior UW, UW Manager, Compliance Officer, Admin, Broker (if portal), Capacity Provider (read-only)",
    required: true,
    order: 9,
  },
  {
    id: "USR-010",
    categorySlug: "user-personas-roles",
    title: "Day-in-the-Life Scenarios",
    question:
      'Walk us through a typical day for a junior UW processing 15 submissions. What does the morning look like? Where are the bottlenecks? What would "10x better" feel like?',
    context:
      "Day-in-the-life scenarios help us design the UX around real workflows rather than assumed ones. We need to understand the actual sequence of activities, the context switching, the interruptions, and the tools involved. This directly shapes the dashboard, notification system, and queue management features.",
    inputType: "free_text",
    placeholder:
      "e.g., 8:30 — Open email, scan for new submissions. 8:45 — Start first submission: open PDF, re-key data into spreadsheet, check appetite manually, open rating workbook, enter figures, calculate premium. 9:30 — First submission done. But then a referral comes back from senior UW, breaking the flow...",
    required: true,
    order: 10,
  },

  // =====================================================
  // CATEGORY 3: USER FLOWS & WORKFLOWS (FLW-001 → FLW-009)
  // =====================================================
  {
    id: "FLW-001",
    categorySlug: "user-flows-workflows",
    title: "Submission Intake Flow",
    question:
      "Step by step: how does a submission arrive today? Email? Portal? ACORD forms? What happens first, second, third?",
    context:
      "The intake flow is the entry point for the entire system. We need to understand every step from the moment a broker sends a submission to when an underwriter first looks at it. This includes: how submissions arrive (email, portal, paper?), who receives them, how they're logged, and how they're assigned to an underwriter.",
    inputType: "free_text",
    placeholder:
      "e.g., 1) Broker emails submission PDF to submissions@mga.com. 2) Admin logs it in Acturis with a reference number. 3) Admin assigns to a junior UW based on line of business. 4) Junior UW opens email, downloads attachments, begins review. Typical delay: 2–4 hours from receipt to first review...",
    required: true,
    order: 1,
  },
  {
    id: "FLW-002",
    categorySlug: "user-flows-workflows",
    title: "Triage Decision Flow",
    question:
      "Walk through how an underwriter decides pass/refer/decline today. What do they look at first? What's the mental checklist? How long does it take?",
    context:
      "The triage flow is the core intelligence of the system. We need to understand the actual decision-making process — not the documented one, but what underwriters actually do. What's the first thing they check? What makes them immediately decline? What makes them hesitate and refer? How consistent is this across underwriters?",
    inputType: "free_text",
    placeholder:
      "e.g., First check: Is this line of business we write? Second: Is the industry in our appetite? Third: Revenue within limits? Fourth: Loss history acceptable? If all four pass, move to rating. If any fail, check if it's a hard decline or referral. Takes 15–30 minutes for an experienced UW, 45–60 for a junior...",
    required: true,
    order: 2,
  },
  {
    id: "FLW-003",
    categorySlug: "user-flows-workflows",
    title: "Referral & Escalation Flow",
    question:
      "When a submission needs senior review, what happens? How is it assigned? What info does the senior UW see? How do they respond? Timeline?",
    context:
      "The referral workflow is where submissions get stuck. Understanding the current process helps us design an efficient digital referral system. We need to know: how is the senior UW notified? What context do they receive? What actions can they take? What's the expected turnaround? What happens if they don't respond?",
    inputType: "free_text",
    placeholder:
      "e.g., Junior UW emails senior UW with the submission and a note explaining the referral reason. Senior UW reviews when they have time — could be same day or next day. They respond via email: approve, decline, or ask for more info. No formal tracking of referral status or turnaround time...",
    required: true,
    order: 3,
  },
  {
    id: "FLW-004",
    categorySlug: "user-flows-workflows",
    title: "Data Request Flow",
    question:
      "When information is missing, how does the request go to the broker? Email? Template? What's the follow-up process? How do you track outstanding requests?",
    context:
      "Data requests are a major source of delay. Understanding the current process helps us design automated, tracked data requests. We need to know: what triggers a data request? Who drafts it? Is there a template? How is the response tracked? What happens if the broker doesn't respond?",
    inputType: "free_text",
    placeholder:
      "e.g., UW drafts an email listing missing items. No standard template — each UW writes their own version. Response tracked informally (flag in email, note in Acturis). Follow-up is manual — UW checks their inbox. If no response in 2 weeks, submission dies. No formal pipeline tracking of outstanding requests...",
    required: true,
    order: 4,
  },
  {
    id: "FLW-005",
    categorySlug: "user-flows-workflows",
    title: "Rating & Quote Flow",
    question:
      "How does the rating happen today? Who opens the spreadsheet? How many options are generated? How is the quote letter assembled?",
    context:
      "The rating and quoting flow is where extracted data becomes a price. We need to understand the manual process so we can automate it correctly. How does data get into the workbook? How are the outputs used? Who formats the quote letter? How long does the whole process take?",
    inputType: "free_text",
    placeholder:
      "e.g., UW opens the Excel workbook, manually enters: industry code, revenue, payroll, limits, deductible. Workbook calculates premium. UW copies premium into a Word quote template, adds conditions and exclusions. Usually generates 1–2 options. Whole process: 30–60 minutes per submission...",
    required: true,
    order: 5,
  },
  {
    id: "FLW-006",
    categorySlug: "user-flows-workflows",
    title: "Decline Flow",
    question:
      "When you decline a submission, what happens? Who drafts the letter? What must it contain? Are there regulatory requirements?",
    context:
      "Decline communications have regulatory implications in the UK/Ireland. FCA rules require fair treatment and clear communication. We need to understand: who makes the decline decision? What's communicated to the broker? Is there a standard template? Are reasons given? Are there FCA/CBI requirements for decline notifications?",
    inputType: "free_text",
    placeholder:
      "e.g., UW drafts decline email to broker. Must include: reason for decline (general, not overly specific), reference number, suggestion to resubmit if circumstances change. FCA Consumer Duty requires fair treatment — can't decline without reason. No standard template currently used...",
    required: true,
    order: 6,
  },
  {
    id: "FLW-007",
    categorySlug: "user-flows-workflows",
    title: "Binding Flow",
    question:
      "After the broker accepts a quote, what happens to bind coverage? What documents are needed? What systems are updated?",
    context:
      "Binding is the transition from underwriting to policy administration. We need to understand what happens after a quote is accepted: what does the broker need to provide? What internal steps occur? What systems are updated? Is there a handoff to a different team or system?",
    inputType: "free_text",
    placeholder:
      "e.g., Broker sends signed slip and any subjectivities. UW verifies completeness, binds in Acturis. Policy documents generated. Bordereau updated. Binding authority usage tracked. Premium booked. Certificate of insurance issued to broker within 24 hours...",
    required: true,
    order: 7,
  },
  {
    id: "FLW-008",
    categorySlug: "user-flows-workflows",
    title: "Renewal Flow",
    question:
      "How are renewals handled? Automatic re-extraction? Updated rating? How far in advance? What changes vs. new business?",
    context:
      "Renewals are a significant portion of an MGA's book. Understanding the renewal process helps us design features that reduce manual effort at renewal time. Is it essentially a new submission? Or a streamlined update process? How far in advance does it start?",
    inputType: "free_text",
    placeholder:
      "e.g., Renewals flagged 90 days before expiry. Broker provides updated submission (or confirms no changes). Re-rate with current workbook. If no claims and no material changes, streamlined approval. If loss experience is adverse, full re-underwrite. Renewal quote sent 60 days before expiry...",
    required: true,
    order: 8,
  },
  {
    id: "FLW-009",
    categorySlug: "user-flows-workflows",
    title: "Workflow Bottlenecks",
    question:
      "Where does the current process break down? What causes delays? What requires the most manual effort? If you could automate ONE thing, what would it be?",
    context:
      "This is the single most important question for prioritising MVP features. The answer tells us where to focus development effort for maximum impact. What's the one thing that, if automated, would transform the daily experience for an MGA underwriter?",
    inputType: "free_text",
    placeholder:
      "e.g., The biggest bottleneck is data extraction from broker submissions. UWs spend 30–40% of their time re-keying data from PDFs. If we could automate extraction with confidence scores and provenance, that alone would be transformative...",
    required: true,
    order: 9,
  },

  // =====================================================
  // CATEGORY 4: MVP SCOPE & PRIORITIES (MVP-001 → MVP-012)
  // =====================================================
  {
    id: "MVP-001",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Lines of Business",
    question:
      "Which lines should V1 support to be credible in demos?",
    context:
      "We can't support every line in the 3-week POC. We need to pick the lines that are most common among our target MGAs and that best demonstrate the system's capabilities. The selected lines shape the extraction templates, triage rules, and rating workbook we build.",
    inputType: "multi_select",
    options: [
      { value: "gl", label: "General Liability (GL / Public Liability)" },
      { value: "property", label: "Commercial Property" },
      { value: "do", label: "Directors & Officers (D&O)" },
      { value: "pi", label: "Professional Indemnity (PI)" },
      { value: "el", label: "Employers' Liability (EL)" },
      { value: "cyber", label: "Cyber Liability" },
      { value: "fleet", label: "Commercial Fleet / Motor" },
      { value: "combined", label: "Combined Commercial (BOP equivalent)" },
    ],
    required: true,
    order: 1,
  },
  {
    id: "MVP-002",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Document Handling",
    question:
      "What document types must V1 handle?",
    context:
      "Each document type requires a different extraction approach. Native PDFs are easiest (text is selectable). Scanned PDFs need OCR. Word docs need a different parser. Supporting more types increases coverage but adds development time. What do brokers actually send?",
    inputType: "multi_select",
    options: [
      { value: "pdf_native", label: "Native PDF (selectable text)" },
      { value: "pdf_scanned", label: "Scanned PDF (image-based, needs OCR)" },
      { value: "docx", label: "Word Documents (.docx)" },
      { value: "xlsx", label: "Excel Spreadsheets (.xlsx)" },
      { value: "email", label: "Email submissions (.eml / .msg)" },
    ],
    required: true,
    order: 2,
  },
  {
    id: "MVP-003",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Broker Portal",
    question:
      "Does V1 need a broker-facing portal, or is the underwriter tool sufficient for launch?",
    context:
      "A broker portal adds significant development scope but improves the broker experience. For V1, we could focus solely on the underwriter workflow (brokers submit via email) and add the portal in V2. Or a basic portal could be the differentiator. What's essential for a credible demo?",
    inputType: "single_select",
    options: [
      {
        value: "uw_only",
        label: "Underwriter tool only — brokers submit via email",
        description: "Fastest to build. Brokers use existing email workflow. UW-focused demo.",
      },
      {
        value: "basic_portal",
        label: "Basic portal — brokers can upload and track status",
        description: "Simple upload + status tracking. Shows broker value in demo.",
      },
      {
        value: "full_portal",
        label: "Full portal — upload, track, receive quotes, bind",
        description: "Complete broker experience. Most impressive demo but highest scope.",
      },
    ],
    required: true,
    order: 3,
  },
  {
    id: "MVP-004",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Adverse News",
    question:
      "Should V1 have real adverse news search, simulated/stub results, or skip it entirely for launch?",
    context:
      "Real adverse news search requires API integrations (Companies House, news APIs, sanctions lists) and verification logic. A simulated version demonstrates the workflow without real data. Skipping it entirely simplifies V1 but removes a key differentiator. What level makes the POC credible?",
    inputType: "single_select",
    options: [
      {
        value: "real",
        label: "Real adverse news with live API integrations",
        description: "Most impressive. Requires Companies House API, news API, sanctions lists.",
      },
      {
        value: "simulated",
        label: "Simulated results with realistic demo data",
        description: "Shows the workflow and UI. Uses pre-built demo scenarios. No live APIs.",
      },
      {
        value: "skip",
        label: "Skip for V1 — placeholder in pipeline",
        description: "Fastest. Pipeline shows the stage exists but skips it. Add in V2.",
      },
    ],
    required: true,
    order: 4,
  },
  {
    id: "MVP-005",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Rating Integration",
    question:
      "Should V1 execute real Excel workbooks, use a built-in formula engine, or accept manual premium entry?",
    context:
      "The rating approach is a critical technical decision. Executing real Excel workbooks (via LibreOffice/openpyxl) is the most authentic but requires careful workbook mapping. A built-in engine is more controlled but less flexible. Manual entry is simplest but removes automation value.",
    inputType: "single_select",
    options: [
      {
        value: "real_workbook",
        label: "Execute real Excel workbooks",
        description: "Authentic. Uses Neil's actual workbook. Requires cell mapping and workbook adapter.",
      },
      {
        value: "formula_engine",
        label: "Built-in formula engine with configurable rates",
        description: "More controlled. Rates configured in the system. No Excel dependency.",
      },
      {
        value: "manual_entry",
        label: "Manual premium entry by underwriter",
        description: "Simplest. UW enters premium manually. System handles everything else.",
      },
    ],
    required: true,
    order: 5,
  },
  {
    id: "MVP-006",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Compliance Level",
    question:
      "What audit/compliance level for V1?",
    context:
      "Compliance features range from basic logging to full cryptographically-sealed audit packs. More compliance = more development time but stronger market positioning. For a 3-week POC, we need to balance credibility with feasibility.",
    inputType: "single_select",
    options: [
      {
        value: "full_audit",
        label: "Full audit packs with provenance and SHA-256 integrity",
        description: "Production-grade. Every decision traced to source with tamper detection.",
      },
      {
        value: "basic_logging",
        label: "Basic decision logging with timestamps",
        description: "Records what happened and when. No cryptographic integrity. Good for demo.",
      },
      {
        value: "minimal",
        label: "Minimal for POC — focus on workflow, add compliance in V2",
        description: "Fastest. Shows the pipeline works. Compliance features added later.",
      },
    ],
    required: true,
    order: 6,
  },
  {
    id: "MVP-007",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Must-Have Features",
    question:
      "List the absolute must-have features for V1. If it doesn't have these, no MGA will take a demo seriously.",
    context:
      "This is the non-negotiable feature list for the 3-week POC. Every feature on this list must work reliably in a live demo. Be ruthless about what's truly essential vs. nice-to-have. The goal is a credible, impressive POC — not a complete product.",
    inputType: "free_text",
    placeholder:
      "e.g., 1) Upload a PDF submission and see extracted data in seconds. 2) Automatic triage with clear pass/refer/decline reasoning. 3) Rating that produces a real premium number. 4) Quote package generation. 5) Audit trail showing how each decision was made...",
    required: true,
    order: 7,
  },
  {
    id: "MVP-008",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Nice-to-Have Features",
    question:
      "What features would strengthen V1 but could wait for V2 if we're tight on the 3-week timeline?",
    context:
      "Nice-to-haves are features that enhance the product but aren't critical for the initial demo. They're the first candidates if we have extra time, and the first to cut if we're behind. Separating these from must-haves prevents scope creep.",
    inputType: "free_text",
    placeholder:
      "e.g., Broker portal, real-time adverse news search, multi-workbook support, email ingestion, renewal automation, MI dashboards, capacity provider read-only view...",
    required: true,
    order: 8,
  },
  {
    id: "MVP-009",
    categorySlug: "mvp-scope-priorities",
    title: "V1 Explicit Exclusions",
    question:
      "What should we explicitly NOT build for V1? What do people over-engineer in underwriting tools?",
    context:
      "Explicit exclusions prevent scope creep and set clear expectations. What features do competitors waste time on? What do technical teams tend to over-build? Being clear about what's out of scope is as important as defining what's in scope.",
    inputType: "free_text",
    placeholder:
      "e.g., Do NOT build: claims management, policy administration, accounting integration, multi-language support, native mobile app, complex workflow designer. These are V3+ features that distract from the core value proposition...",
    required: true,
    order: 9,
  },
  {
    id: "MVP-010",
    categorySlug: "mvp-scope-priorities",
    title: "Demo Script",
    question:
      'Walk us through the ideal demo for a prospective MGA. What do you show first? What\'s the "aha" moment? What questions will they ask?',
    context:
      "The demo script is our north star for the POC. Every feature we build should contribute to this demo flow. Understanding the ideal demo helps us prioritise what looks good and works reliably vs. what might be technically impressive but doesn't land with the audience.",
    inputType: "free_text",
    placeholder:
      "e.g., 1) Show empty dashboard. 2) Upload a real broker submission PDF. 3) Watch extraction happen in real-time — fields appearing with source highlights. 4) Triage results appear: 'Pass — all rules satisfied.' 5) Click 'Generate Quote' — premium calculated, quote letter generated. 6) Open audit pack — full provenance chain. The 'aha' moment is seeing their own submission processed in 60 seconds with a complete audit trail...",
    required: true,
    order: 10,
  },
  {
    id: "MVP-011",
    categorySlug: "mvp-scope-priorities",
    title: "Pipeline Validation",
    question:
      "The system processes submissions through: Extract → Triage → Adverse News → Rate → Quote → Audit Pack. Which stages must be real for a credible demo? Which can be simulated?",
    context:
      "Not every pipeline stage needs to be production-grade for the POC. Some can use simulated data or simplified logic. But the stages that matter most to the demo audience need to be real and reliable. Help us allocate the 3-week development budget wisely across the pipeline.",
    inputType: "free_text",
    placeholder:
      "e.g., Extract: MUST be real — this is the 'aha' moment. Triage: MUST be real with configurable rules. Adverse News: Can be simulated for demo. Rate: MUST use a real workbook — credibility depends on real numbers. Quote: MUST generate a real document. Audit Pack: Can be simplified but must show provenance...",
    required: true,
    order: 11,
  },
  {
    id: "MVP-012",
    categorySlug: "mvp-scope-priorities",
    title: "Multi-Tenant Priorities",
    question:
      "When we onboard a second MGA, what must be configurable per client? Rules? Workbook? Templates? Branding? What's universal?",
    context:
      "Multi-tenancy is what makes this a SaaS product rather than a custom build. Understanding what varies per MGA vs. what's universal shapes the architecture. Some things (pipeline stages, UI framework) are universal. Others (rules, workbooks, templates, branding) must be per-tenant. Getting this right early prevents costly refactoring.",
    inputType: "free_text",
    placeholder:
      "e.g., Per-MGA: appetite rules, rating workbook, quote templates, branding/logo, user accounts, decline letter templates, data field requirements. Universal: extraction engine, pipeline orchestration, audit pack format, UI framework, adverse news sources...",
    required: true,
    order: 12,
  },

  // =====================================================
  // CATEGORY 5: SAMPLE ARTIFACTS (ART-001 → ART-008)
  // =====================================================
  {
    id: "ART-001",
    categorySlug: "sample-artifacts",
    title: "Sample Broker Submissions",
    question:
      "Upload 3–5 real (redacted) broker submission packages — the actual documents brokers send to an MGA.",
    context:
      "Real submissions are the single most important input for building the extraction pipeline. We need examples of what brokers actually send — including cover letters, application forms, schedules of values, loss runs, and any supplemental documents. Sensitive data can be redacted, but the structure and format must be preserved.",
    inputType: "file_upload",
    required: true,
    order: 1,
  },
  {
    id: "ART-002",
    categorySlug: "sample-artifacts",
    title: "Rating Workbook",
    question:
      "Upload a working rating spreadsheet. Doesn't need to be production — needs to show the structure, inputs, and outputs.",
    context:
      "The rating workbook is what we'll build our rating adapter against. We need to understand: which tabs exist, which cells are inputs, which are outputs, what formulas are used, and how different lines of business are structured. A simplified version is fine as long as the structure is representative.",
    inputType: "file_upload",
    required: true,
    order: 2,
  },
  {
    id: "ART-003",
    categorySlug: "sample-artifacts",
    title: "Appetite Guide Document",
    question:
      "Upload an example appetite guide — the document that defines what an MGA will and won't write.",
    context:
      "The appetite guide is the source of truth for triage rules. We need to see how MGAs typically document their appetite: what format (PDF, Word?), how specific (SIC-level or general descriptions?), and how often it's updated. This helps us design the rule configuration interface.",
    inputType: "file_upload",
    required: true,
    order: 3,
  },
  {
    id: "ART-004",
    categorySlug: "sample-artifacts",
    title: "Data Request Template",
    question:
      "Upload or describe the template used when requesting missing info from a broker.",
    context:
      "Data request templates show us the communication style, the level of detail, and what information is typically missing. This helps us design the automated data request feature. If no template exists, describe what a typical data request email looks like.",
    inputType: "file_upload",
    required: true,
    order: 4,
  },
  {
    id: "ART-005",
    categorySlug: "sample-artifacts",
    title: "Decline Letter Template",
    question:
      "Upload or describe the standard decline communication. What's required by regulation?",
    context:
      "Decline letters have regulatory requirements in the UK/Ireland. FCA Consumer Duty requires fair treatment and clear communication. We need to understand: what must be included, what should be avoided, and whether there are different templates for different decline reasons.",
    inputType: "file_upload",
    required: true,
    order: 5,
  },
  {
    id: "ART-006",
    categorySlug: "sample-artifacts",
    title: "Quote Letter Example",
    question:
      "Upload an example quote package as sent to a broker. Cover letter, terms, conditions.",
    context:
      "The quote package is our primary output document. We need to see what a professional MGA quote looks like: format, structure, what's included (premium, terms, conditions, subjectivities, binding instructions). This directly shapes our quote generation template.",
    inputType: "file_upload",
    required: true,
    order: 6,
  },
  {
    id: "ART-007",
    categorySlug: "sample-artifacts",
    title: "Bordereau / Reporting Template",
    question:
      "Upload an example bordereau or MI report that MGAs send to capacity providers.",
    context:
      "Bordereaux are the primary reporting mechanism between MGAs and capacity providers. We need to understand the format (Excel, CSV?), the fields required, the frequency (monthly, quarterly?), and any specific standards (Lloyd's LMSA format?). This shapes our reporting features.",
    inputType: "file_upload",
    required: true,
    order: 7,
  },
  {
    id: "ART-008",
    categorySlug: "sample-artifacts",
    title: "Regulatory Checklist",
    question:
      "What FCA, Central Bank of Ireland, or Lloyd's compliance requirements must the product satisfy from day one?",
    context:
      "Regulatory requirements are non-negotiable. We need a comprehensive list of compliance requirements that affect the product design — not just what's nice to have, but what's legally required. This includes FCA rules, Central Bank of Ireland requirements, Lloyd's coverholder standards, and GDPR obligations.",
    inputType: "free_text",
    placeholder:
      "e.g., FCA: Consumer Duty fair value assessment, SM&CR accountability, adequate record keeping (6+ years), complaints handling. CBI: Minimum competency code, fitness and probity. Lloyd's: Coverholder reporting standards, binding authority audit requirements, LMSA bordereau format...",
    required: true,
    order: 8,
  },

  // =====================================================
  // CATEGORY 6: DATA MODEL & CONFIGURATION (DAT-001 → DAT-008)
  // =====================================================
  {
    id: "DAT-001",
    categorySlug: "data-model-configuration",
    title: "Core Submission Fields",
    question:
      "What are the universal fields every MGA needs from a submission? (field name, always required?, description)",
    context:
      "Core fields are the foundation of the data model. These are fields that every MGA — regardless of size, lines, or market — needs extracted from a broker submission. They define the minimum viable extraction template. Line-specific fields (e.g., property schedule) come on top of these.",
    inputType: "data_table",
    tableColumns: [
      { key: "fieldName", label: "Field Name", type: "text", required: true },
      {
        key: "alwaysRequired",
        label: "Always Required?",
        type: "select",
        options: [
          { value: "yes", label: "Yes — every submission" },
          { value: "line_dependent", label: "Depends on line of business" },
          { value: "optional", label: "Optional but useful" },
        ],
        required: true,
      },
      { key: "description", label: "Description / Notes", type: "text", required: true },
    ],
    placeholder:
      "Suggested fields: Insured Name, Trading Name/DBA, Company Registration Number, Industry Code (SIC), Revenue/Turnover, Employee Count, Policy Period, Requested Lines, Requested Limits, Prior Insurance, Loss History Summary, Broker Name, Broker Reference",
    required: true,
    order: 1,
  },
  {
    id: "DAT-002",
    categorySlug: "data-model-configuration",
    title: "Industry Classification",
    question:
      "UK/Ireland market: what classification system? UK SIC 2007, NAICS, or MGA-proprietary codes?",
    context:
      "Industry classification is central to appetite rules and rating. The UK/Ireland market primarily uses UK SIC 2007 codes, but some MGAs use their own classification systems or map to NAICS for international capacity providers. We need to know what the product should support natively.",
    inputType: "single_select",
    options: [
      {
        value: "uk_sic_2007",
        label: "UK SIC 2007 codes",
        description: "Standard UK classification. 5-digit codes. Used by Companies House.",
      },
      {
        value: "naics",
        label: "NAICS codes",
        description: "North American standard. Common if capacity provider is US-based.",
      },
      {
        value: "proprietary",
        label: "MGA-proprietary classification",
        description: "Each MGA defines their own codes. Product needs flexible classification.",
      },
      {
        value: "multiple",
        label: "Support multiple with mapping",
        description: "Accept SIC, NAICS, or proprietary. Map between them.",
      },
    ],
    required: true,
    order: 2,
  },
  {
    id: "DAT-003",
    categorySlug: "data-model-configuration",
    title: "Configurable Rules Engine",
    question:
      "What types of rules must any MGA be able to configure? Revenue caps, industry exclusions, loss ratios — what else? What's the pattern?",
    context:
      "The rules engine is the heart of the triage system. It needs to be configurable per MGA without code changes. Understanding the full range of rule types helps us design a flexible engine. Think about: what variables do rules check? What outcomes can they produce? How complex are the conditions?",
    inputType: "free_text",
    placeholder:
      "e.g., Rule types: 1) Threshold rules — field exceeds/below a value (revenue > £10M → refer). 2) Blocklist rules — field matches a blocked value (SIC code in exclusion list → decline). 3) Ratio rules — calculated ratio exceeds threshold (payroll/revenue > 30% → flag). 4) Age rules — date-based (loss runs older than 90 days → request). 5) Combination rules — multiple conditions (revenue > £5M AND loss ratio > 60% → refer)...",
    required: true,
    order: 3,
  },
  {
    id: "DAT-004",
    categorySlug: "data-model-configuration",
    title: "Rating Workbook Patterns",
    question:
      "Across MGAs you've seen, how similar are rating workbooks? Same structure with different numbers? Or wildly different per MGA?",
    context:
      "This determines how flexible our rating adapter needs to be. If all MGAs use similar workbook structures (inputs in one tab, rates in another, outputs in a third), we can build a generic adapter. If each MGA has a completely different approach, we need a more flexible mapping system.",
    inputType: "free_text",
    placeholder:
      "e.g., Most MGA rating workbooks follow a similar pattern: inputs tab (insured details, limits, deductibles), rate tables tab (class codes mapped to base rates), calculation tab (applies factors and loadings), output tab (premium summary). The specific rates and factors vary but the structure is 80% similar...",
    required: true,
    order: 4,
  },
  {
    id: "DAT-005",
    categorySlug: "data-model-configuration",
    title: "Document Format Variation",
    question:
      "How much do broker submission formats vary across MGAs? Does each MGA's broker network use similar formats, or is every submission unique?",
    context:
      "Document format variation determines how robust our extraction pipeline needs to be. If brokers in a given MGA's network all use similar formats, we can tune extraction per MGA. If every submission is unique, we need a more general-purpose extraction approach.",
    inputType: "free_text",
    placeholder:
      "e.g., Within a single MGA's broker panel, formats are fairly consistent — maybe 5–10 common formats. Across MGAs, there's more variation. ACORD forms provide standardisation but many UK brokers use their own formats. The key challenge is loss runs — every carrier formats them differently...",
    required: true,
    order: 5,
  },
  {
    id: "DAT-006",
    categorySlug: "data-model-configuration",
    title: "Terminology Differences",
    question:
      "Map UK/Ireland insurance terms to their US equivalents so we build the product in the right language.",
    context:
      "Insurance terminology differs significantly between US and UK/Ireland markets. Since our technical team may reference US terms but the product serves the UK/Ireland market, we need a clear mapping. This affects field labels, documentation, and communication throughout the product.",
    inputType: "data_table",
    tableColumns: [
      { key: "ukTerm", label: "UK/Ireland Term", type: "text", required: true },
      { key: "usTerm", label: "US Equivalent", type: "text", required: true },
      { key: "notes", label: "Notes / Context", type: "text" },
    ],
    placeholder:
      "e.g., Public Liability → General Liability, Employers' Liability → Workers' Compensation, Professional Indemnity → E&O, Excess of Loss → Umbrella, Slip → Binder, Coverholder → MGA, Syndicate → Carrier, Turnover → Revenue, IPT → State Premium Tax",
    required: true,
    order: 6,
  },
  {
    id: "DAT-007",
    categorySlug: "data-model-configuration",
    title: "Currency & Tax",
    question:
      "What currencies does the product need to handle? GBP, EUR, USD? What about Insurance Premium Tax (IPT)?",
    context:
      "Currency handling and tax calculations are fundamental to the rating and quoting process. UK IPT is currently 12% standard rate (20% for travel and some other types). Ireland has different IPT rates. If the product handles both markets, it needs multi-currency support and country-specific tax logic.",
    inputType: "free_text",
    placeholder:
      "e.g., Primary: GBP. Secondary: EUR for Irish MGAs. USD only if capacity provider requires it. IPT: UK standard rate 12%, higher rate 20% (travel, appliance insurance). Ireland: 5% non-life levy + 2% stamp duty. System must calculate and display IPT separately from net premium...",
    required: true,
    order: 7,
  },
  {
    id: "DAT-008",
    categorySlug: "data-model-configuration",
    title: "Integration Points",
    question:
      "What systems does a typical MGA use that InsureWright would need to connect with? Policy admin, accounting, claims, bordereaux reporting?",
    context:
      "Integration points determine our API strategy and partnership opportunities. Understanding what systems are already in place helps us design InsureWright to complement rather than replace existing tools. For V1, we may only need file-based integration (CSV export), but we need to plan for API integration in V2+.",
    inputType: "free_text",
    placeholder:
      "e.g., Acturis (policy admin — dominant in UK MGA market), Xero/Sage (accounting), various claims systems, Lloyd's LMSA (bordereau submission), Companies House API (company data), email (broker communication). For V1, CSV/Excel export is sufficient. API integration is V2...",
    required: true,
    order: 8,
  },

  // =====================================================
  // CATEGORY 7: COMPLIANCE & REGULATORY (REG-001 → REG-006)
  // =====================================================
  {
    id: "REG-001",
    categorySlug: "compliance-regulatory",
    title: "FCA Requirements",
    question:
      "What FCA requirements affect underwriting technology? Consumer Duty, SM&CR, record keeping, fair value assessments?",
    context:
      "The FCA regulates all insurance activity in the UK. Their requirements directly shape product features: Consumer Duty requires demonstrable fair treatment, SM&CR requires clear accountability, and record-keeping rules mandate retention periods. We need to understand which specific FCA requirements our product must satisfy.",
    inputType: "free_text",
    placeholder:
      "e.g., Consumer Duty (PS22/9): Must demonstrate fair value — premium calculations must be justifiable and documented. SM&CR: Clear accountability for underwriting decisions — audit trail must show who decided what. Record keeping: Minimum 6 years retention. Treating Customers Fairly: Decline reasons must be clear and non-discriminatory...",
    required: true,
    order: 1,
  },
  {
    id: "REG-002",
    categorySlug: "compliance-regulatory",
    title: "Central Bank of Ireland",
    question:
      "For Irish MGAs, what Central Bank requirements apply? Any differences from FCA?",
    context:
      "Ireland has its own regulatory framework under the Central Bank of Ireland. While similar to FCA in many respects, there are differences in requirements, reporting, and enforcement. If we're targeting both UK and Irish MGAs, we need to understand both frameworks and where they diverge.",
    inputType: "free_text",
    placeholder:
      "e.g., Minimum Competency Code: All UWs must meet specific qualification requirements. Fitness and Probity: Senior staff must be approved. Consumer Protection Code: Similar to FCA Consumer Duty but with Irish-specific requirements. Key difference: Irish risk retention requirements for MGAs...",
    required: true,
    order: 2,
  },
  {
    id: "REG-003",
    categorySlug: "compliance-regulatory",
    title: "Lloyd's Market Requirements",
    question:
      "If targeting Lloyd's coverholders, what are the specific requirements? Binding authority audits, coverholder approvals, bordereaux standards?",
    context:
      "Many UK/Ireland MGAs operate as Lloyd's coverholders. Lloyd's has specific standards for coverholder oversight, binding authority management, and reporting. These requirements are in addition to FCA/CBI regulation and shape features like bordereaux generation, audit packs, and authority tracking.",
    inputType: "free_text",
    placeholder:
      "e.g., Annual binding authority audit (RISC audit). Monthly premium bordereau in LMSA format. Quarterly claims bordereau. Coverholder must demonstrate: consistent application of binding authority terms, appropriate expertise, adequate systems and controls. All this maps to our audit pack and reporting features...",
    required: true,
    order: 3,
  },
  {
    id: "REG-004",
    categorySlug: "compliance-regulatory",
    title: "AI & Automation Rules",
    question:
      "Are there UK/Ireland-specific rules about using AI in underwriting decisions? Explainability requirements? Consumer notification?",
    context:
      "AI governance in insurance is evolving rapidly. The UK is taking a principles-based approach (vs. EU AI Act's prescriptive rules). FCA has signalled interest in AI governance for financial services. We need to understand current requirements and anticipated near-term changes so the product is ready.",
    inputType: "free_text",
    placeholder:
      "e.g., No UK-specific AI law yet (unlike EU AI Act), but FCA guidance on AI/ML in financial services (FS2/23) requires: model risk management, bias testing, explainability for consumer-facing decisions, human oversight. Anticipated: UK AI Safety Institute standards may affect financial services. Consumer notification: Currently no requirement to disclose AI use in underwriting, but FCA is consulting on this...",
    required: true,
    order: 4,
  },
  {
    id: "REG-005",
    categorySlug: "compliance-regulatory",
    title: "Data Protection (GDPR)",
    question:
      "What GDPR considerations apply? Personal data in submissions, data retention, right to erasure, cross-border transfers?",
    context:
      "GDPR applies to all personal data in submissions (insured names, director names, addresses, etc.). This affects: how we store data, how long we retain it (tension with regulatory minimum retention), right to erasure (tension with audit requirements), and cross-border data transfers (if using US cloud services).",
    inputType: "free_text",
    placeholder:
      "e.g., Personal data in submissions: insured name, directors, addresses. Must have lawful basis for processing (legitimate interest or contract). Retention: GDPR says minimise, FCA says keep 6+ years — need policy that satisfies both. Right to erasure: Must comply but can retain for regulatory obligations. Cross-border: UK adequacy decision with EU. Cloud hosting: UK data centres preferred...",
    required: true,
    order: 5,
  },
  {
    id: "REG-006",
    categorySlug: "compliance-regulatory",
    title: "Audit Trail Requirements",
    question:
      "What do regulators and capacity providers expect in terms of decision audit trails? What level of detail? How long retained?",
    context:
      "Audit trails are where compliance rubber meets the road. Different stakeholders (FCA, Lloyd's, capacity providers, internal compliance) have different expectations about what's recorded, at what level of detail, and for how long. Understanding these requirements shapes our audit pack architecture — one of InsureWright's key differentiators.",
    inputType: "free_text",
    placeholder:
      "e.g., FCA: Every underwriting decision must be documented with rationale. Retain for minimum 6 years (some argue 7+). Lloyd's: Binding authority audit requires demonstration of consistent decision-making. Capacity providers: Want to see that MGA is operating within authority terms. Level of detail: Must trace from final decision back to original submission, through each pipeline stage, with timestamps and actor identification...",
    required: true,
    order: 6,
  },

  // =====================================================
  // CATEGORY 8: PRODUCT SUCCESS & VALIDATION (VAL-001 → VAL-006)
  // =====================================================
  {
    id: "VAL-001",
    categorySlug: "product-success-validation",
    title: "POC Success Criteria",
    question:
      'If we demo this to a prospective MGA in 8 weeks, what must they see to say "I want this"? What\'s the wow moment?',
    context:
      "The POC success criteria define our acceptance test. After 3 weeks of development, what must be true for the demo to land? This isn't about feature completeness — it's about the experience. What makes an MGA principal lean forward and say 'when can I have this?'",
    inputType: "free_text",
    placeholder:
      'e.g., They must see: 1) Their own submission processed end-to-end in under 60 seconds. 2) Extracted data that\'s actually correct (not just impressive-looking). 3) Triage that matches what their senior UW would decide. 4) A quote with real numbers. 5) An audit trail that makes their compliance officer smile. The wow moment: "It just did in 60 seconds what takes my team 45 minutes"...',
    required: true,
    order: 1,
  },
  {
    id: "VAL-002",
    categorySlug: "product-success-validation",
    title: "Pilot Customer Profile",
    question:
      "Describe the ideal first pilot customer. What kind of MGA, what size, what lines, why would they say yes to a pilot?",
    context:
      "The first pilot customer sets the trajectory for the product. They need to be the right size (small enough to be agile, large enough to be credible), the right attitude (early adopter, tolerant of imperfection), and in the right market position (needs the tool, willing to invest time in feedback).",
    inputType: "free_text",
    placeholder:
      "e.g., Ideal pilot: UK MGA, £10M–£25M GWP, writing commercial combined or GL/property. 5–10 underwriting staff. Currently using manual processes (spreadsheets, email). Pain point: growing faster than their manual processes can handle. Attitude: early adopter, willing to provide feedback, interested in being a reference customer...",
    required: true,
    order: 2,
  },
  {
    id: "VAL-003",
    categorySlug: "product-success-validation",
    title: "Pilot Success Metrics",
    question:
      "What metrics prove the pilot worked? (metric name, target value, how measured)",
    context:
      "Success metrics turn subjective impressions into measurable outcomes. They need to be specific enough to be tracked and meaningful enough to drive buying decisions. Think about: what would make the pilot customer renew? What would make them recommend us to another MGA?",
    inputType: "data_table",
    tableColumns: [
      { key: "metric", label: "Metric Name", type: "text", required: true },
      { key: "target", label: "Target Value", type: "text", required: true },
      { key: "measurement", label: "How Measured", type: "text", required: true },
    ],
    placeholder:
      "e.g., Extraction accuracy: 90%+ on core fields, measured by UW review of 50 submissions. Processing time: <60 seconds end-to-end, measured by system logs. UW satisfaction: 8+/10, measured by survey. Referral accuracy: 95%+ match with senior UW judgment, measured by parallel review.",
    required: true,
    order: 3,
  },
  {
    id: "VAL-004",
    categorySlug: "product-success-validation",
    title: "Scaling Path",
    question:
      "After the first pilot customer, what's the path to 5 customers? 20 customers? What changes between 1 and 20?",
    context:
      "The scaling path shapes our architecture decisions today. If multi-tenancy is critical by customer 2, we need to build it from day one. If each customer needs significant customisation, we need a flexible configuration system. Understanding the scaling path prevents architectural dead-ends.",
    inputType: "free_text",
    placeholder:
      "e.g., Customer 1→5: Direct sales, each requiring some configuration (rules, workbook, templates). Customer 5→20: Need self-service configuration, partner channel (Lloyd's brokers recommending us), and standard onboarding process. Key changes: dedicated support → self-service, custom integration → standard APIs, bespoke rules → configurable templates...",
    required: true,
    order: 4,
  },
  {
    id: "VAL-005",
    categorySlug: "product-success-validation",
    title: "Partnership Model",
    question:
      "How does the partnership with you and David work? Equity, revenue share, advisory? What's your role vs. ours in selling this?",
    context:
      "The partnership structure affects product strategy, go-to-market, and decision-making authority. We need clarity on: who owns what, who decides what, who sells to whom, and how revenue is shared. This is critical for alignment and avoiding confusion as we scale.",
    inputType: "free_text",
    placeholder:
      "e.g., Neil and David: MGA industry expertise, market access, first customer introductions, product validation. Equity: [X]% advisory shares. Revenue share: [Y]% of SaaS revenue for customer introductions. Role: Neil validates product decisions and provides market context. David handles capacity provider relationships. Your team: builds, maintains, and operates the platform...",
    required: true,
    order: 5,
  },
  {
    id: "VAL-006",
    categorySlug: "product-success-validation",
    title: "Risk & Blockers",
    question:
      "What could kill this product? Market risk, regulatory risk, technical risk, competitive risk? What keeps you up at night?",
    context:
      "Every product has existential risks. Identifying them early lets us mitigate or monitor them. Think about: what if a major competitor launches something similar? What if regulation changes? What if MGAs don't actually want to change their processes? What if the technology doesn't perform at the required accuracy?",
    inputType: "free_text",
    placeholder:
      "e.g., Market risk: MGAs are conservative and slow to adopt new technology. Regulatory risk: New FCA rules on AI could impose requirements we can't meet. Technical risk: Extraction accuracy not high enough for production use. Competitive risk: Acturis or INSTANDA builds similar features. Partnership risk: Capacity providers don't see value in MGA automation...",
    required: true,
    order: 6,
  },
];
