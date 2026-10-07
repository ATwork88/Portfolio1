export const projectFilters = [
  "Full Stack",
  "Integrations",
  "AI Agents",
  "AI Engineering",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  title: string;
  industry: string;
  filters: ProjectFilter[];
  role: string;
  built: string;
  stack: string[];
  skills: string[];
  result: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Dental Telehealth Integration Engine",
    industry: "Healthcare / Dental Telehealth",
    filters: ["Integrations", "Full Stack"],
    role: "Built the integration engine for a Series A telehealth company (85 clinics)",
    built:
      "A bidirectional sync engine connecting the company's clinical triage engine to legacy dental practice-management systems, so the internal team could stay focused on diagnostics. One isolated adapter per vendor behind a unified schema. Webhooks with a polling fallback and backoff. Safe writeback that never creates duplicates. A small self-updating Windows service for clinic systems that had no public API.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Pydantic",
      "Node.js",
      "WebSockets",
    ],
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Pydantic",
      "Node.js",
      "WebSockets",
      "OAuth 2.0",
      "Webhook design",
      "Idempotency",
      "Distributed locks",
      "Contract testing",
      "HIPAA-aware design",
    ],
    result:
      "Sync failures 11.4% to 0.18% in 7 weeks. Historical ingestion 2h40m to 14 minutes. New-clinic onboarding 10 days to under 36 hours.",
  },
  {
    title: "Real-Estate Fund Manager Modernization",
    industry: "Real Estate / Investment Management",
    filters: ["Full Stack", "Integrations"],
    role: "Ran the assessment and blueprint, then built the platform (two phases)",
    built:
      "Replaced disconnected systems and manual handoffs across Finance, Asset Operations, Acquisitions and Investor Relations. FastAPI services on AWS parse monthly operating statements and rent rolls and validate them against a standard chart of accounts. Investor-portal webhooks keep LP records in sync with document storage. A Next.js executive dashboard shows occupancy, NOI variance and capital call status. Messy scanned PDFs go through fuzzy-match parsing with a human review queue.",
    stack: ["Python", "FastAPI", "AWS", "Next.js", "React", "PostgreSQL"],
    skills: [
      "Python",
      "FastAPI",
      "AWS",
      "Next.js",
      "React",
      "PostgreSQL",
      "Webhooks",
      "Data validation",
      "Fuzzy matching",
      "Human-in-the-loop design",
      "Technical discovery and architecture",
    ],
    result:
      "Replaced a multi-day monthly reporting process with continuous, accurate data. Audited the legacy Excel models and documented the calculation errors that built the case for moving off them.",
  },
  {
    title: "Multi-Agent Orchestration System (OpenClaw + MCP)",
    industry: "AI Operations / Lead Research",
    filters: ["AI Agents"],
    role: "Designed and built the system",
    built:
      "A production autonomous agent system where specialized sub-agents coordinate through a Mission Control layer. Agents use Tavily for search, ZeroBounce for verification and Google Sheets for output, all connected through MCP.",
    stack: ["OpenClaw", "MCP", "Tavily", "ZeroBounce", "Google Sheets"],
    skills: [
      "OpenClaw",
      "Model Context Protocol (MCP)",
      "Multi-agent orchestration",
      "Tool integration",
      "Tavily",
      "ZeroBounce",
      "Google Sheets",
      "Cost control",
    ],
    result:
      "200+ autonomous operations a month at a 95%+ success rate, for under $5 a month in running cost.",
  },
  {
    title: "Multi-Tenant Manufacturing RAG Platform",
    industry: "Manufacturing / Supply Chain",
    filters: ["AI Engineering"],
    role: "Built the application and inference layer (not model training)",
    built:
      "The engineering layer between the app, the retrieval pipeline and a self-hosted model endpoint for an AI decision-intelligence platform. Document ingestion and chunking, metadata strategy and retrieval logic over Qdrant, FastAPI services for validation and context assembly, and strict metadata filtering so each enterprise client's data stays separate. Deployed on Kubernetes.",
    stack: [
      "Python",
      "FastAPI",
      "Qdrant",
      "vLLM",
      "Hugging Face",
      "Kubernetes",
    ],
    skills: [
      "Python",
      "FastAPI",
      "RAG",
      "Qdrant",
      "Hugging Face",
      "vLLM",
      "Multi-tenant isolation",
      "Chunking and metadata strategy",
      "Kubernetes (deployments, probes, rolling releases)",
    ],
    result:
      "Supported 10+ enterprise tenants and 100K+ documents with isolated retrieval and metadata filtering.",
  },
  {
    title: "Corporate Reputation Intelligence Agent Fleet",
    industry: "Corporate Communications / Intelligence",
    filters: ["AI Agents", "AI Engineering"],
    role: "Built the agent fleet and the review dashboard",
    built:
      "Purpose-built AI agents for source collection, sentiment analysis and narrative synthesis on the Anthropic API, run on a schedule. Prompt caching and batching keep cost down, and rate-limit-aware scheduling keeps runs reliable. Every output carries provenance, goes through human approval, and appears in a Node.js dashboard where analysts review and calibrate agent output.",
    stack: ["Anthropic API", "Node.js", "React"],
    skills: [
      "Anthropic API",
      "Node.js",
      "React",
      "Prompt caching and batching",
      "Scheduled agent runs",
      "Provenance tracking",
      "Human-approval workflows",
      "Agent evaluation",
    ],
    result:
      "Automated analysis across 1,000+ sources/month, reducing recurring analyst research workload by roughly 60%.",
  },
  {
    title: "Behavioral-Health AI Voice & Scheduling Gateway",
    industry: "Healthcare / Behavioral Health",
    filters: ["AI Agents", "Integrations"],
    role: "Architected and built the integration gateway",
    built:
      "An AI voice, scheduling and patient-communication system that ties together telephony, conversational voice AI, an LLM orchestration layer, a CRM and EHR-adjacent scheduling through one secure gateway instead of point-to-point connections. The voice AI never holds clinical-system credentials. It calls narrow, purpose-built gateway functions.",
    stack: [
      "Twilio",
      "OpenAI",
      "FastAPI",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Salesforce",
      "Epic / athenahealth",
      "REST APIs",
      "FHIR",
      "AWS",
    ],
    skills: [
      "Voice AI",
      "LLM orchestration",
      "API gateway design",
      "EHR/CRM integration",
      "HIPAA-aware architecture (BAAs, minimum-necessary PHI, progressive authentication, zero-retention configs)",
    ],
    result:
      "Compliance built into the architecture from day one rather than added later. Unified 5+ healthcare integrations behind one secure gateway and automated hundreds of scheduling/communication workflows.",
  },
  {
    title: "Retail Investment & Digital Asset Platform",
    industry: "Fintech / Investing",
    filters: ["Full Stack", "Integrations"],
    role: "Built the financial APIs and backend",
    built:
      "The backend for an app that unifies fractional-share investing, portfolio management and crypto. Account management, fractional-share transactions, portfolio data and digital-asset workflows, integrated with brokerage and clearing infrastructure, crypto services and institutional custody.",
    stack: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Brokerage / clearing APIs",
      "Crypto APIs",
      "AWS",
    ],
    skills: [
      "Backend and API design",
      "Fintech integrations",
      "Transaction processing",
      "Data consistency",
      "Security",
      "Audit traceability",
    ],
    result:
      "Transaction consistency and traceability across multiple external financial systems. Connected 5+ financial providers and supported consistent processing across thousands of account and transaction events.",
  },
  {
    title: "GeoTel TeleTracker",
    industry: "Telecommunications / Geospatial Data",
    filters: ["Full Stack"],
    role: "Senior Geospatial Software Architect / Lead Software Engineer",
    built:
      "Architecture and engineering for GeoTel's telecom-infrastructure intelligence SaaS. PostGIS entity matching with confidence tiers (deterministic, high-confidence inferred, ambiguous, unmatched) and provenance, so users can see why two records were linked.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "PostGIS"],
    skills: [
      "PostGIS",
      "PostgreSQL",
      "Geospatial data modeling",
      "Entity resolution",
      "Data pipelines",
      "SaaS architecture",
    ],
    result:
      "Platform data covers 5.9M+ fiber route miles, 7,500+ carriers, 15.65M+ fiber-lit buildings, 535,000+ towers and 15+ datasets.",
  },
  {
    title: "PlayThis",
    industry: "Gaming / Prediction Markets",
    filters: ["Full Stack"],
    role: "Built the platform",
    built:
      "A prediction-market and competitive gaming platform covering the full market lifecycle: open and close markets, take predictions, determine outcomes, settle, and update balances and rankings. Database transactions with row-level locking and idempotency keys keep balances correct after settlement. WebSocket updates handle reconnects, delayed data and duplicate events without corrupting market or user data.",
    stack: ["React", "TypeScript", "PostgreSQL", "WebSockets", "REST APIs"],
    skills: [
      "React",
      "TypeScript",
      "PostgreSQL (transactions, row-level locking)",
      "Idempotency",
      "WebSockets",
      "REST APIs",
      "Real-time systems",
    ],
    result:
      "Live in production with thousands of market and prediction events processed through transactional settlement and real-time WebSocket updates.",
    link: { label: "Live Site", href: "https://app.play-this.com" },
  },
  {
    title: "AI Document Automation Platform",
    industry: "Financial / Back Office",
    filters: ["AI Engineering"],
    role: "Built the platform",
    built:
      "A system that turns inbound PDFs, emails and forms into structured data. LLM extraction with several validation layers, deduplication and normalization, human review for anything uncertain, and audit logging with workflow state tracking so every decision can be traced.",
    stack: ["OpenAI", "Claude", "FastAPI", "PostgreSQL"],
    skills: [
      "OpenAI",
      "Claude",
      "FastAPI",
      "PostgreSQL",
      "Structured LLM extraction",
      "Validation layers",
      "Human-in-the-loop review",
      "Audit logging",
      "Retries and error handling",
    ],
    result: "Processes hundreds of inbound documents a day.",
  },
  {
    title: "Serverless AI on AWS (Nutrition App + OCR Pipeline)",
    industry: "Health & Wellness / Document Processing",
    filters: ["AI Engineering"],
    role: "Designed and built both",
    built:
      "Two fully serverless AI systems on AWS. An AI nutrition app using Bedrock (Claude Vision for image analysis, Claude Sonnet for meal planning), defined entirely in Terraform. A document pipeline (S3, Lambda, Textract, DynamoDB) with a multi-tenant AppSync GraphQL API and row-level tenant isolation.",
    stack: [
      "AWS Bedrock (Claude Vision, Claude Sonnet)",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "Textract",
      "AppSync GraphQL",
      "Terraform",
    ],
    skills: [
      "AWS Bedrock",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "Textract",
      "AppSync GraphQL",
      "Terraform",
      "Multi-tenant design",
      "Cost optimization",
    ],
    result:
      "Nutrition app: sub-2-second responses at roughly $1-3 a month. OCR pipeline: 80% less manual data entry at 95%+ extraction accuracy.",
  },
];

export const alsoBuilt: {
  title: string;
  description?: string;
  stack?: string[];
  sites?: { name: string; href: string; note?: string }[];
}[] = [
  {
    title: "Self-Hosted Time Tracking & Invoicing",
    description:
      "QuickBooks sync via MCP, OAuth 2.0, webhooks, PDF invoicing, duplicate-billing prevention.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
    ],
  },
  {
    title: "AI Voice Agent Suite",
    description:
      "Vapi voice agents for cold calling, real-estate calls and quoting, wired to GoHighLevel, HubSpot, Make, Zapier and n8n.",
    stack: [
      "Vapi",
      "OpenAI",
      "Make.com",
      "Zapier",
      "n8n",
      "GoHighLevel",
      "HubSpot",
      "Airtable",
    ],
  },
  {
    title: "Twilio Flex + Salesforce Contact Center",
    description:
      "Attribute-based routing and Open CTI for an 85-agent travel contact center.",
    stack: [
      "Twilio Flex",
      "TaskRouter",
      "Studio",
      "Functions",
      "Salesforce Open CTI",
      "React",
      "TypeScript",
      "Node.js",
    ],
  },
  {
    title: "FundWise AI",
    description:
      "Nonprofit fundraising web app with an OpenAI integration and organization-level data separation.",
  },
  {
    title: "Wellness EMR-CRM-Marketing Bridge",
    description:
      "Real-time events and identity resolution with PHI kept out of marketing tools.",
  },
  {
    title: "Client sites",
    sites: [
      { name: "Nango.dev", href: "https://nango.dev", note: "YC W23; Astro, Sanity" },
      {
        name: "Airrived.ai",
        href: "https://airrived.ai",
        note: "Next.js, Three.js, GSAP",
      },
      {
        name: "Charles & Colvard",
        href: "https://www.charlesandcolvard.com",
        note: "Astro, Svelte, PHP",
      },
      {
        name: "WristCheck",
        href: "https://wristcheck.com",
        note: "Node.js, Next.js, PostgreSQL",
      },
      {
        name: "LARQ",
        href: "https://www.livelarq.com",
        note: "Node.js, Next.js",
      },
    ],
  },
  {
    title: "withConflux",
    description: "A content-AI API gateway.",
  },
];
