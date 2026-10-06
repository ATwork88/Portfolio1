export const projects = [
  {
    "title": "nango.dev",
    "category": "Developer Tools / SaaS",
    "description": "Built the full public-facing website for Nango, an open-source OAuth and integrations platform used by thousands of developers. Chose Astro for static-generation performance and zero-JS-by-default output, paired with Sanity.io as a headless CMS so the team can update docs, changelogs, and landing pages without developer involvement. Delivered a structured content architecture, custom Sanity schemas, and a developer-focused design system.",
    "technologies": [
      "Astro",
      "Sanity.io"
    ],
    "links": [
      {
        "label": "Live Site",
        "href": "https://nango.dev"
      }
    ]
  },
  {
    "title": "airrived.ai",
    "category": "AI / SaaS",
    "description": "Built the full website for an AI platform that needed to communicate the sophistication of the product at first glance. Next.js foundation, Three.js for real-time 3D WebGL scenes, and GSAP for scroll-triggered animations, while holding 60fps across devices under GPU-intensive rendering.",
    "technologies": [
      "Next.js",
      "Three.js",
      "GSAP"
    ],
    "links": [
      {
        "label": "Live Site",
        "href": "https://airrived.ai"
      }
    ]
  },
  {
    "title": "Multi-Tenant Manufacturing RAG Platform",
    "category": "Manufacturing / Supply Chain",
    "description": "AI decision-intelligence platform serving multiple enterprise customers on a single system with strict data isolation. Designed the full RAG pipeline: document ingestion, chunking, Hugging Face embeddings, Qdrant storage with per-tenant metadata, and namespace-filtered retrieval, with inference on a self-hosted vLLM endpoint for cost control. FastAPI handled orchestration and response streaming on Kubernetes, giving each tenant grounded, cited answers with no cross-tenant leakage.",
    "technologies": [
      "Python",
      "FastAPI",
      "Qdrant",
      "vLLM",
      "Hugging Face",
      "Kubernetes"
    ]
  },
  {
    "title": "AI Document Automation Platform",
    "category": "Financial / Back Office",
    "description": "End-to-end automation for a back office processing hundreds of inbound documents daily. LLM extraction (OpenAI and Claude, selected per document type on cost and accuracy) parses unstructured documents into schema-validated JSON, followed by multi-layer validation, a human review queue for failures, deduplication, an append-only audit log, and a workflow state machine tracking each document from intake to disposition.",
    "technologies": [
      "OpenAI",
      "Claude",
      "PostgreSQL",
      "FastAPI"
    ]
  },
  {
    "title": "Corporate Reputation Intelligence Agent Fleet",
    "category": "Corporate Communications / Intelligence",
    "description": "Designed and deployed a fleet of purpose-built AI agents for source collection, sentiment and theme analysis, and narrative synthesis across dozens of sources for multiple enterprise clients. LLM calls were treated as production infrastructure: prompt caching, batching, rate-limit-aware scheduling, and retries with exponential backoff. Outputs were signed for provenance, and a Node.js and React dashboard let analysts accept, reject, or recalibrate results, feeding an accuracy feedback loop.",
    "technologies": [
      "Anthropic API",
      "Node.js",
      "React"
    ]
  },
  {
    "title": "Real-Estate Fund Manager Modernization",
    "category": "Real Estate / Investment Management",
    "description": "Led a two-phase modernization of a fund manager's spreadsheet-based reporting. Phase one: FastAPI services on AWS ingesting monthly operating statements and rent rolls across varied PDF formats, validating each line item against a standard chart of accounts. Phase two: a Next.js and React executive dashboard with real-time occupancy, NOI variance, capital call status, and cash flow projections, plus webhook alerts. Replaced a multi-day monthly reporting process with continuous, accurate data.",
    "technologies": [
      "Python",
      "FastAPI",
      "AWS",
      "Next.js",
      "React",
      "PostgreSQL"
    ]
  },
  {
    "title": "Dental Telehealth Integration Engine",
    "category": "Healthcare / Dental Telehealth",
    "description": "Rebuilt the integration layer for a Series A telehealth company connected to 85 clinics on legacy practice-management systems. Built a bidirectional sync engine with a canonical Pydantic-validated schema, Celery and Redis workers with per-clinic retries, dead-letter queues and circuit breakers, a Node.js WebSocket layer for real-time sync status, and a configuration-driven clinic onboarding framework. After 7 weeks: sync failures fell from 11.4% to 0.18%, nightly ingestion from 2h40m to 14 minutes, and clinic onboarding from 10 days to under 36 hours.",
    "technologies": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Pydantic",
      "Node.js",
      "WebSockets"
    ]
  },
  {
    "title": "withConflux — Content AI API Gateway",
    "category": "Developer Tools",
    "description": "Self-funded developer tool that consolidates multiple content-AI vendors (moderation, music detection, reverse image search, AI-generated content detection) behind a single authenticated endpoint. Features a content-hash deduplication cache, cost- and latency-based provider routing with automatic failover, atomic hard spend caps per account, and per-vendor cost reporting. Designed to be drop-in replaceable with direct vendor calls.",
    "technologies": [
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "React",
      "Redux"
    ],
    "links": [
      {
        "label": "Live Site",
        "href": "https://withconflux.com"
      }
    ]
  },
  {
    "title": "Serverless AI Nutrition App",
    "category": "Health & Wellness",
    "description": "Fully serverless AI nutrition app built to demonstrate infrastructure-as-code discipline and cost-efficient architecture. AWS Bedrock with Claude Vision analyzes food images and Claude Sonnet handles meal planning, all on Lambda. All 26 AWS resources are defined in Terraform with staging and production variables. Sub-2-second responses, roughly $1–3/month at light usage, and zero to production in one command.",
    "technologies": [
      "AWS Bedrock",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "Terraform"
    ]
  },
  {
    "title": "OCR Document Processing Pipeline",
    "category": "Document Processing",
    "description": "Serverless pipeline for a client digitizing high volumes of physical documents across multiple tenant organizations with strict data isolation. S3 uploads trigger Lambda functions orchestrating AWS Textract; a normalization layer maps fields to a standard schema with confidence scoring and flags low-confidence extractions for human review. Client API is an AppSync GraphQL endpoint with real-time status subscriptions. Achieved an 80% reduction in manual data entry at over 95% extraction accuracy.",
    "technologies": [
      "AWS S3",
      "Lambda",
      "Textract",
      "DynamoDB",
      "AppSync GraphQL"
    ]
  },
  {
    "title": "PlayThis — Prediction Market Gaming Platform",
    "category": "Gaming / Prediction Markets",
    "description": "Prediction-market and competitive gaming platform covering the full market lifecycle: creation, open prediction windows, closing, outcome determination, settlement, and balance updates. Consistency-focused design using database transactions with row-level locking, idempotency keys, and duplicate prevention, with WebSocket real-time updates and async queues so settlement doesn't block the request path during high-traffic market closes.",
    "technologies": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "REST APIs"
    ],
    "links": [
      {
        "label": "Live Site",
        "href": "https://app.play-this.com"
      }
    ]
  }
];
