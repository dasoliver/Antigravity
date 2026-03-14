# Antigravity OS

Unified Platform for Nearshoring, Capital & Risk Management.

## Monorepo Structure

```
antigravity/
├── apps/
│   └── web/          # Next.js 15 frontend (App Router)
├── packages/
│   ├── db/           # Drizzle ORM + PostgreSQL schemas
│   ├── core/         # Business logic (risk-engine, nearshoring, inventory-manager, capital-allocator)
│   └── ai/           # AI/ML integrations (LLM client, agents, embeddings)
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Apps

| App | Description |
|-----|-------------|
| `@antigravity/web` | Next.js 15 frontend with App Router and Tailwind CSS |

## Packages

| Package | Description |
|---------|-------------|
| `@antigravity/db` | Drizzle ORM + PostgreSQL — shared database layer |
| `@antigravity/core` | Business logic — risk engine, nearshoring, inventory, capital allocation |
| `@antigravity/ai` | AI/ML integrations — LLM clients, agents, embeddings |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Run linter
pnpm lint

# Run tests
pnpm test
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```
