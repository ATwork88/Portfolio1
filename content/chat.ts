export const chatGreeting =
  "Hi, I'm Ajay's portfolio assistant. Pick a question below and I'll answer from his profile and work history.";

export const chatFaq = [
  {
    id: "who",
    question: "Who is Ajay?",
    answer:
      "Ajay Thakur is a full stack AI developer based in Philadelphia, PA with 8+ years of experience. He designs and builds AI-powered products, scalable SaaS platforms, and high-performance web applications end to end, from architecture to deployment, and takes full ownership of what he ships.",
  },
  {
    id: "available",
    question: "Is Ajay available for new projects?",
    answer:
      "Yes. Ajay is available for new projects. He works with a small number of clients at a time, typically as the sole technical lead or embedded alongside an existing team. You can reach him at contact.ajaythakur.dev@gmail.com or on LinkedIn.",
  },
  {
    id: "experience",
    question: "What is Ajay's work experience?",
    answer:
      "• Full Stack AI Developer, Self-Employed (Dec 2025 – Present): an independent practice building AI products and integrations for startups and growth-stage companies.\n• Full Stack AI Engineer, Chariot Solutions (Jan 2025 – Nov 2025): LLM document pipelines for financial clients, real-time healthcare integrations, and AI agent frameworks.\n• Full-Stack Developer, Atlasiko Inc (Mar 2020 – Dec 2024): grew from mid-level contributor to technical lead on multiple client projects.\n• Web and App Developer, Web Wizard Development (Feb 2019 – Nov 2019): web and mobile projects for small businesses.",
  },
  {
    id: "ai",
    question: "What AI projects has Ajay built?",
    answer:
      "• A multi-tenant manufacturing RAG platform (FastAPI, Qdrant, vLLM, Kubernetes) with strict per-tenant data isolation.\n• An AI document automation platform for a financial back office, using OpenAI and Claude with validation, human review, and audit logging.\n• A fleet of AI agents for corporate reputation intelligence, built on the Anthropic API.\n• A serverless AI nutrition app using AWS Bedrock with Claude Vision, fully defined in Terraform.\n• withConflux, a content-AI API gateway he built and launched himself.",
  },
  {
    id: "rag",
    question: "Does Ajay have experience with RAG and LLMs?",
    answer:
      "Yes. He designed and built a full RAG pipeline for a multi-tenant manufacturing platform: document ingestion, chunking, Hugging Face embeddings, Qdrant storage with per-tenant metadata, and namespace-filtered retrieval so tenants' data never mixes. Inference ran on a self-hosted vLLM endpoint for cost control, with FastAPI orchestrating retrieval and streaming on Kubernetes. He has also used OpenAI and Claude in production document-extraction systems.",
  },
  {
    id: "results",
    question: "What measurable results has Ajay delivered?",
    answer:
      "• Dental telehealth integration engine: sync failures dropped from 11.4% to 0.18%, nightly ingestion from 2h40m to 14 minutes, and clinic onboarding from 10 days to under 36 hours.\n• OCR document pipeline: an 80% reduction in manual data entry at over 95% extraction accuracy.\n• Serverless AI nutrition app: sub-2-second responses at roughly $1–3 per month in running costs.\n• Real-estate fund modernization: replaced a multi-day monthly reporting process with real-time data.",
  },
  {
    id: "tech",
    question: "What technologies does Ajay use?",
    answer:
      "• Frontend: React, Next.js, TypeScript, Vue.js, Angular, Svelte, Astro, Tailwind CSS, Three.js, GSAP.\n• Backend: Python (Django, FastAPI, Flask), Node.js (Express, NestJS), C# / .NET, GraphQL, Celery, Redis, WebSockets.\n• AI: OpenAI API, Anthropic Claude, RAG pipelines, Qdrant, vLLM, Hugging Face, AI agents.\n• Infrastructure: PostgreSQL, MongoDB, AWS, Docker, Kubernetes, Terraform, CI/CD.",
  },
  {
    id: "cloud",
    question: "What cloud and infrastructure experience does he have?",
    answer:
      "Mainly AWS: Lambda, ECS Fargate, Bedrock, RDS, S3, Textract, CloudFront, and API Gateway. He also uses Docker, Kubernetes, Terraform for infrastructure as code, Vercel, and Azure App Service. His serverless nutrition app has all 26 AWS resources defined in Terraform and deploys with a single command.",
  },
  {
    id: "frontend",
    question: "Can Ajay build polished frontends?",
    answer:
      "Yes. For airrived.ai he built a site with real-time 3D WebGL scenes (Three.js) and scroll-triggered animations (GSAP) at 60fps. For nango.dev, a Y Combinator W23 company, he built the full public website with Astro and Sanity.io so the team can update content without a developer.",
  },
  {
    id: "withconflux",
    question: "What is withConflux?",
    answer:
      "withConflux is a self-funded developer tool Ajay built and launched. It puts multiple content-AI vendors (moderation, music detection, reverse image search, AI-generated content detection) behind one authenticated API. It includes a content-hash dedup cache, cost- and latency-based provider routing with failover, hard spend caps, and per-vendor cost reporting. It is built with Node.js, TypeScript, Express, MongoDB, and React.",
  },
  {
    id: "zeroretain",
    question: "What is ZeroRetain AI?",
    answer:
      "ZeroRetain AI is a SaaS product Ajay is currently building. It lets organizations ask natural-language questions across their documents and emails without storing, indexing, or retaining any customer data: content is retrieved in real time, processed in memory, answered, and discarded. It targets regulated industries like legal, healthcare, and finance. See the My SaaS page for details.",
  },
  {
    id: "education",
    question: "What is Ajay's education?",
    answer:
      "Ajay holds a Bachelor's degree in Computer Science from North Carolina State University.",
  },
  {
    id: "contact",
    question: "How can I contact Ajay?",
    answer:
      "Email contact.ajaythakur.dev@gmail.com, or find him on LinkedIn (linkedin.com/in/ajay-thakur-7998bb360) and GitHub (github.com/ATwork88). The links are also in the sidebar.",
  },
];
