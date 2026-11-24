/* =====================================================================
   CONTENT — edit this file to update the site. No build step needed.
   - To add a project: copy one object in PROJECTS and change it.
   - To add a case study: copy one object in CASE_STUDIES and change it.
     Every section is optional; leave a field out and it won't render.
   - To add a certificate: add an object to CERTIFICATES. Put a credential
     link in `verifyUrl` (or a PDF/image in assets/certificates/ and link it).
   ===================================================================== */

window.SITE = {
  name: "Alireza Torabi",
  shortName: "Alireza",
  initials: "AT",
  role: "Business Systems Analyst",
  location: "Vancouver, BC",
  email: "alireza.trbim@gmail.com",
  linkedin: "https://www.linkedin.com/in/alireza-torabi-mazraehmaleki",
  github: "https://github.com/AlirezaTomama",
  resumePdf: "assets/Alireza-Torabi-Resume.pdf",

  intro: {
    greeting: "Hi there, I'm",
    paragraphs: [
      "I'm curious about how things work, and a little stubborn about making them work better. I trained as a mechanical engineer, so I still approach every problem like a machine: open it up, follow the data, and find the part that's grinding.",
      "These days I do that with business systems. I sit between the people who need something and the people who build it, and turn fuzzy asks into clear requirements, working prototypes and tools that actually ship.",
      "This space is where I keep what I've built, the problems I'm thinking through in case studies, and what I'm learning along the way."
    ],
    tags: [
      { label: "Open to roles in Vancouver", highlight: true },
      { label: "Business Systems Analyst" },
      { label: "Dynamics 365 · SAP B1" },
      { label: "Builds working prototypes" }
    ]
  },

  why: {
    lead: "I make the space between business and engineering feel smaller. Here's what that has looked like so far.",
    stats: [
      { value: "< 4 mo", label: "From stakeholder interviews to a delivered MVP at Ramis Technology" },
      { value: "+50%", label: "Signup conversion lift from 300+ customer interviews turned into Jira changes" },
      { value: "~$50K", label: "Non-dilutive grant funding secured with business cases and KPI frameworks" },
      { value: "2d → ½d", label: "Weekly reporting cycle after moving trial data into SQL and Power BI" },
      { value: "5 → 3 days", label: "Average customer onboarding time after redesigning team handoffs" },
      { value: "120 / wk", label: "Records no longer re-keyed by hand, thanks to an API integration into Dynamics 365" }
    ],
    principles: [
      { title: "Start with the people", text: "I interview first and model second. Requirements are only as good as the questions behind them." },
      { title: "Show, don't spec", text: "When a document isn't landing, I build a clickable prototype so everyone reacts to the same thing." },
      { title: "Speak engineer", text: "An engineering background means I can read a technical spec, push back on it, and translate it for the business." },
      { title: "Measure the outcome", text: "Every project should move a number. If it didn't, I want to know why." }
    ]
  }
};

/* ---------------------------------------------------------------------
   PROJECTS
   --------------------------------------------------------------------- */
window.PROJECTS = [
  {
    slug: "backpack",
    title: "Backpack",
    tagline: "Where can your remote income legally take you?",
    summary: "Backpack helps remote workers and digital nomads figure out where in the world their income can legally take them, without $3,000 consultants or contradictory Reddit threads.",
    image: "assets/projects/backpack.webp",
    live: "https://alirezatomama.github.io/backpack/",
    code: "https://github.com/AlirezaTomama/backpack",
    tags: ["Rules engine", "Eligibility wizard", "Product design"],
    problem: "Digital nomad visa rules are scattered, change often, and depend on details like work type, family size and savings. People either pay an expensive consultant or piece it together from forums.",
    built: [
      "Live income engine: drag a slider to your monthly income and instantly see which destinations unlock",
      "Eligibility wizard covering work type, income stability, savings, passport, family setup, documents and refusal history",
      "Ranked results with a match score per destination and your top 3 compared side by side",
      "Country guides (Spain, Portugal, Georgia, Thailand, Mexico, Colombia and more) with honest \"watch out\" notes",
      "Family-aware thresholds that apply each program's real dependent surcharges",
      "Relocation Blueprint demo: budget, 183-day tax calendar, letter templates, risks and a Plan B"
    ],
    highlights: [
      { value: "19", label: "destinations checked" },
      { value: "Monthly", label: "threshold re-checks" }
    ],
    skills: ["Requirements to business rules", "Decision logic", "UX flows", "Data sourcing & versioning"]
  },
  {
    slug: "warehouse",
    title: "Warehouse Inventory Visualizer",
    tagline: "See exactly where stock sits, and how much shelf space is wasted.",
    summary: "A two-part tool for tracking exactly where inventory sits on warehouse shelves, how much dead space is being wasted, and who moved what and when.",
    image: "assets/projects/warehouse.webp",
    live: "https://alirezatomama.github.io/wesco--inventory/",
    code: "https://github.com/AlirezaTomama/wesco--inventory",
    tags: ["3D floor plan", "Data model", "Operations"],
    problem: "Spreadsheets can say what is in stock, but not where it physically sits or how much usable space is left on each shelf.",
    built: [
      "Phase 1, a 2D Yard & Rack Locator to get the data model and workflow right with fast bin-by-bin editing",
      "Phase 2, an interactive 3D floor plan, added once real use showed a flat view wasn't enough to reason about shelf space",
      "Real box dimensions with exact dead space on every axis, and a block on boxes that physically won't fit",
      "Multi-item bins with \"on top\" or \"behind\" stacking",
      "Full audit trail: who received or removed each box and when, plus a consolidated removal archive"
    ],
    highlights: [
      { value: "2", label: "phases, 2D then 3D" },
      { value: "3", label: "axes of dead space measured" }
    ],
    skills: ["Iterative delivery", "Data modeling", "Process design", "Audit & traceability"]
  },
  {
    slug: "ramis",
    title: "Ramis Grower Web App",
    tagline: "A grower-facing dashboard for robotic pest monitoring.",
    summary: "A single-file demo of the Ramis grower web application: one place for growers to see pest pressure by zone, robot status and what to do next.",
    image: "assets/projects/ramis.webp",
    live: null,
    code: "https://github.com/AlirezaTomama/Ramis-Technology",
    tags: ["AgTech", "Dashboard", "MVP"],
    problem: "Field robots collect a lot of data, but a grower needs one clear answer each morning: which zones need attention today, and which don't.",
    built: [
      "Dashboard that leads with \"What should I do now\" recommendations per zone",
      "Pages for farm and fields, robots, robot control, pest monitoring, observations, alerts, and analytics and reports",
      "No build step, no dependencies and no backend: everything lives in one index.html",
      "Sign in with any email and password to explore; all data is illustrative sample data"
    ],
    highlights: [
      { value: "8", label: "pages in the demo" },
      { value: "0", label: "dependencies" }
    ],
    skills: ["Stakeholder needs to UI", "Information hierarchy", "Prototyping", "Domain translation"]
  },
  {
    slug: "bahrami",
    title: "Bahrami Immigration Platform",
    tagline: "Turning a brochure website into an advisory platform.",
    summary: "A bilingual (English / فارسی) prototype that redesigns an immigration firm's static brochure site into a client-acquisition and advisory platform.",
    image: "assets/projects/bahrami.webp",
    live: "https://alirezatomama.github.io/Bahrami-Immigration-Firm-/",
    code: "https://github.com/AlirezaTomama/Bahrami-Immigration-Firm-",
    tags: ["Bilingual", "Funnel design", "Service redesign"],
    problem: "Most immigration firm websites ask for a paid consultation first. Visitors leave before they understand their options, and the firm gets poorly prepared leads.",
    built: [
      "A guided journey: Discover, Assess, Compare, Understand, Trust, Book, Onboard, Track",
      "An eligibility assessment and CRS score so visitors get real value before booking",
      "Booking as step 3, not step 1, with a pre-filled intake",
      "Three layers: public website, decision engine, and a client workspace with checklist, documents and case timeline",
      "Full English and Farsi support, including right-to-left layout"
    ],
    highlights: [
      { value: "2", label: "languages, LTR and RTL" },
      { value: "3", label: "product layers" }
    ],
    skills: ["Customer journey mapping", "Business process redesign", "Rules engine", "Localization"]
  }
];

/* ---------------------------------------------------------------------
   CASE STUDIES
   Template fields (all optional except slug, title, summary):
   slug, title, summary, company, period, role, tags[], metrics[{value,label}],
   sections[{heading, text, list[]}], link{label,url}
   --------------------------------------------------------------------- */
window.CASE_STUDIES = [
  {
    slug: "ramis-mvp",
    title: "Shipping an AgTech MVP in under 4 months",
    summary: "How I turned input from growers, universities and industry councils into a delivered MVP, and what the first pilots taught us.",
    company: "Ramis Technology",
    period: "2024 – present",
    role: "Business Systems Analyst",
    tags: ["Requirements", "BPMN", "UAT", "Dynamics 365"],
    metrics: [
      { value: "< 4 mo", label: "to MVP" },
      { value: "27", label: "defects closed in UAT" },
      { value: "~$50K", label: "grant funding" }
    ],
    sections: [
      { heading: "Context", text: "Ramis is an early-stage AgTech company building robots that monitor crops for pests. The product had to make sense to growers, researchers and funders at the same time." },
      { heading: "The problem", text: "More than ten stakeholders wanted different things, and hardware and sensor constraints weren't visible to the business side. Field device data was re-entered by hand, and reporting lived in spreadsheets." },
      { heading: "What I did", list: [
        "Gathered requirements from 10+ stakeholders and wrote the BRD, functional specifications and user stories",
        "Translated hardware and sensor constraints into system requirements, acting as the bridge between engineering and the business",
        "Specified a RESTful API integration and source-to-target mappings into Dynamics 365 Business Central",
        "Modeled current and future-state operations in BPMN, wrote test cases and led UAT with 4 pilot customers",
        "Built the business case, budget and KPI framework for government innovation grants"
      ] },
      { heading: "Outcome", list: [
        "MVP delivered in under 4 months",
        "About 120 records a week no longer re-keyed by hand",
        "Weekly reporting cut from 2 days to half a day with SQL views and Power BI",
        "27 defects closed and 3 version-two requirements defined, including real-time monitoring",
        "About $50,000 in non-dilutive funding secured"
      ] }
    ],
    link: { label: "See the grower web app", url: "#/project/ramis" }
  },
  {
    slug: "onboarding-5-to-3",
    title: "Cutting customer onboarding from 5 days to 3",
    summary: "Mapping a service process end to end, finding six bottlenecks, and redesigning the handoffs between teams.",
    company: "Direction Service Inc.",
    period: "2022 – 2023",
    role: "Business Operations Analyst",
    tags: ["Process mapping", "SAP Business One", "Power BI"],
    metrics: [
      { value: "5 → 3", label: "days to onboard" },
      { value: "6", label: "bottlenecks removed" },
      { value: "6 h/wk", label: "reporting time saved" }
    ],
    sections: [
      { heading: "The problem", text: "Customer onboarding took five business days on average, and nobody could point to exactly where the time went. Customer and billing records lived in spreadsheets." },
      { heading: "What I did", list: [
        "Mapped onboarding and service delivery in BPMN and identified 6 bottlenecks",
        "Redesigned the handoffs between teams",
        "Documented requirements and data mappings to migrate records into SAP Business One, and supported UAT and cutover for 3 teams",
        "Built weekly KPI reports in SQL and Power BI covering volume, cycle time and SLA adherence"
      ] },
      { heading: "Outcome", list: [
        "Average onboarding time down from 5 to 3 business days",
        "About 6 hours of manual reporting saved every week"
      ] }
    ]
  }
];

/* ---------------------------------------------------------------------
   CERTIFICATES  (verifyUrl: paste a credential link, or null to hide)
   --------------------------------------------------------------------- */
window.CERTIFICATES = [
  // type: "cert" = professional certification, "course" = course / training
  // verifyUrl: paste the "Show credential" link here to show a Verify button
  { name: "Entry Certificate in Business Analysis (ECBA)", short: "ECBA", issuer: "IIBA", year: "2026", type: "cert", verifyUrl: null },
  { name: "Microsoft Power BI Data Analyst (PL-300)", short: "PL-300", issuer: "Microsoft", year: "2026", type: "cert", verifyUrl: null },
  { name: "Certified Associate in Project Management (CAPM)®", short: "CAPM", issuer: "PMI (via Pearson VUE)", year: "Nov 2025", type: "cert", credentialId: "7BA1ZAP937R6", verifyUrl: null },
  { name: "Google Business Intelligence Certificate", short: "Google BI", issuer: "Google", year: "Jun 2025", type: "cert", credentialId: "WY43AR86NOZG", verifyUrl: null },

  { name: "Microsoft Azure Data Fundamentals (DP-900) Cert Prep by Microsoft Press", issuer: "Microsoft", year: "Nov 2026", type: "course", verifyUrl: null },
  { name: "Azure Data Factory Administration Essential Training: Manage, Secure, and Monitor Environments", issuer: "Microsoft", year: "Nov 2026", type: "course", verifyUrl: null },
  { name: "Microsoft Azure Essentials by Microsoft Press", issuer: "Microsoft", year: "Oct 2026", type: "course", verifyUrl: null },
  { name: "Agile Software Development", issuer: "LinkedIn Learning", year: "Jun 2025", type: "course", verifyUrl: null },
  { name: "Product Management First Steps", issuer: "LinkedIn Learning", year: "Jan 2023", type: "course", verifyUrl: null },
  { name: "Product Management: Building a Product Roadmap", issuer: "LinkedIn Learning", year: "Jan 2023", type: "course", verifyUrl: null }
];

window.EDUCATION = [
  { name: "Master of Science, Mechanical Engineering", issuer: "Isfahan University of Technology" },
  { name: "Data Analytics and Machine Learning Diploma", issuer: "M2M Tech Inc., Vancouver" }
];

/* ---------------------------------------------------------------------
   RESUME (shown in the Resume window; the PDF is the downloadable copy)
   --------------------------------------------------------------------- */
window.RESUME = {
  summary: "Business Systems Analyst with 5+ years of experience translating stakeholder needs into system requirements across sales, operations and technology startups. I elicit requirements, model processes in BPMN, write functional specs, data mappings and API integration requirements for Dynamics 365, SAP Business One and CRM platforms, then lead UAT through go-live.",
  experience: [
    {
      title: "Business Systems Analyst", company: "Ramis Technology Ltd.", period: "Jan 2024 – Present", place: "Vancouver, BC",
      points: [
        "Owned the business systems lifecycle end to end, from 10+ stakeholder interviews to an MVP in under 4 months",
        "Specified a RESTful API integration into Dynamics 365 Business Central, removing ~120 manual records a week",
        "Built SQL views and Power BI dashboards that cut weekly reporting from 2 days to half a day",
        "Led UAT with 4 pilot customers, closing 27 defects; secured ~$50K in grant funding"
      ]
    },
    {
      title: "Business Operations Analyst", company: "Direction Service Inc.", period: "Apr 2022 – Nov 2023", place: "Vancouver, BC",
      points: [
        "Redesigned onboarding handoffs, cutting average onboarding from 5 to 3 business days",
        "Documented the migration of customer and billing records into SAP Business One",
        "Turned 300+ customer interviews and funnel data into changes that lifted signup conversion by up to 50%"
      ]
    },
    {
      title: "Business Developer", company: "Blue Crane Inc.", period: "Mar 2020 – Apr 2022", place: "Remote",
      points: [
        "Built qualification criteria to screen ~200 startup applications; 60% of my recommendations were approved",
        "Market and competitor analysis for ventures that generated $900K in combined first-year revenue"
      ]
    }
  ],
  skills: [
    { group: "Business analysis", items: ["Requirements elicitation", "BRD & functional specs", "User stories", "Gap analysis", "Business cases"] },
    { group: "Process", items: ["BPMN 2.0", "Visio", "Current / future state", "SOPs"] },
    { group: "Systems", items: ["Dynamics 365 Business Central", "SAP Business One", "REST APIs & JSON", "Data mapping & migration", "UAT"] },
    { group: "Data", items: ["SQL", "Power BI (DAX, Power Query)", "Python", "Excel", "Google Analytics", "A/B testing"] },
    { group: "Delivery", items: ["Agile / Scrum", "Jira", "Confluence", "SharePoint", "Figma"] }
  ]
};
