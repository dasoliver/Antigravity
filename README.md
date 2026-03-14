# 🚀 Antigravity OS

Unified monorepo platform for Nearshoring, Capital Allocation & Risk Management — powered by AI.

## Structure

```
antigravity/
├── apps/
│   └── web/                  # Next.js 15 frontend (App Router)
├── packages/
│   ├── db/                   # Drizzle ORM + PostgreSQL schemas
│   ├── core/                 # Business logic (risk-engine, nearshoring, inventory-manager, capital-allocator)
│   └── ai/                   # AI/ML integrations (LLM client, agents, embeddings)
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Tech Stack

- **Next.js 15** — App Router, React 19
- **TypeScript** — Strict mode throughout
- **Drizzle ORM** — Type-safe SQL
- **PostgreSQL** — Primary database
- **Tailwind CSS** — Utility-first styling
- **pnpm workspaces** — Monorepo management

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start web app (localhost:3000)
pnpm dev

# Build all apps
pnpm build
```

## Packages

| Package | Description |
|---------|-------------|
| `@antigravity/web` | Next.js 15 frontend with Tailwind CSS |
| `@antigravity/db` | Drizzle ORM schemas and PostgreSQL client |
| `@antigravity/core` | Business logic: risk-engine, nearshoring, inventory-manager, capital-allocator |
| `@antigravity/ai` | AI/ML integrations: LLM client, agents, embeddings |