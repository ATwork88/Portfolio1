export const saas = {
  name: "ZeroRetain AI",
  tagline: "Ask anything. Store nothing.",
  status: "Concept stage · MVP planning",
  category: "Privacy-First Document Intelligence",
  summary:
    "A privacy-first document intelligence platform that lets organizations ask natural-language questions across their internal documents, emails, and knowledge systems without storing, indexing, or retaining any customer data. Documents are retrieved, analyzed, answered, and immediately discarded.",
  promise: "Your data is processed, answered, and forgotten.",
  problem: {
    intro:
      "Organizations want AI-powered knowledge assistants, but many in regulated industries cannot adopt them:",
    points: [
      "Sensitive information cannot be stored with external vendors.",
      "Compliance requirements restrict data retention.",
      "Legal teams reject permanent indexing of internal documents.",
      "Existing RAG systems require storing embeddings and indexes.",
    ],
    industries: ["Healthcare", "Legal", "Finance", "Insurance", "Government"],
  },
  steps: [
    "Authenticate the user with their Microsoft 365 or Google Workspace account.",
    "Retrieve the relevant documents in real time through the provider's APIs, respecting the user's permissions.",
    "Process the documents in memory only.",
    "Generate a grounded answer with supporting sources.",
    "Return the response to the user.",
    "Discard all retrieved content.",
  ],
  guarantees: [
    "No document storage",
    "No embeddings or vector database",
    "No caching of content",
    "No training on customer data",
    "Automatic memory destruction after every response",
  ],
  retained:
    "Only metadata is kept: user ID, request timestamp, billing information, and system metrics. Never content.",
  suite: [
    {
      title: "Microsoft 365 Privacy Assistant",
      description:
        "Query Outlook, OneDrive, SharePoint, and Teams through Microsoft Graph without exposing company data to an index.",
      example: "What contracts expire this quarter?",
    },
    {
      title: "Legal Document Assistant",
      description:
        "Analyze contracts, NDAs, and policies for legal teams without persisting confidential client documents.",
      example: "Show all renewal clauses in vendor contracts.",
    },
    {
      title: "Healthcare Knowledge Assistant",
      description:
        "HIPAA-conscious querying across clinical notes and records through EMR and FHIR APIs.",
      example: "Which patients need follow-up next week?",
    },
  ],
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "Fastify",
    "Microsoft Graph API",
    "Google Workspace APIs",
    "OAuth",
    "AWS Lambda / Cloud Run",
    "Claude / OpenAI / Azure OpenAI",
  ],
  roadmap: [
    "Start with the Microsoft 365 Privacy Assistant: the largest market and the easiest API access.",
    "Validate with 3–5 pilot customers on willingness to pay and compliance acceptance.",
    "Expand into legal, healthcare, finance, and insurance.",
  ],
};
