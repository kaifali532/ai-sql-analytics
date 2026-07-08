# System Architecture

## Component Flow

```mermaid
graph TD
  A[User] -->|Uploads CSV/Excel| B(Frontend React App)
  B -->|Multipart Data| C{Backend API Express}
  C -->|Stores Metadata| D[(PostgreSQL - System Schema)]
  C -->|Infers Types & Creates Table| E[(PostgreSQL - user_data Schema)]
  C -->|Batched Insert| E
```

## AI Query Flow

```mermaid
sequenceDiagram
  participant User
  participant Frontend
  participant Backend
  participant Gemini
  participant DB

  User->>Frontend: "Show top 5 sales"
  Frontend->>Backend: POST /ai/ask
  Backend->>DB: Fetch Dataset Schema
  Backend->>DB: Fetch Chat History
  Backend->>Gemini: Prompt + Context (Schema/History)
  Gemini-->>Backend: Raw SQL Query
  Backend->>Backend: Strict Security Validation (Block DROP, etc)
  Backend->>DB: Execute Query (Read-only, 10s timeout)
  DB-->>Backend: Result set
  Backend->>Gemini: Result set + Prompt for insights
  Gemini-->>Backend: Business Insights JSON
  Backend-->>Frontend: SQL, Results, Insights
  Frontend-->>User: Renders Charts and Insights
```

## Security Design Decisions
- **Schema Isolation**: User data is placed in the `user_data` namespace, strictly separate from the application's configuration tables.
- **SQL Sanitization**: Regex blocking of all mutating SQL keywords (`DROP`, `DELETE`, `ALTER`).
- **Parameterized Config**: `DATABASE_URL` and keys are managed via environment variables.

## Caching Strategy
Currently implemented as fast in-memory stores via Prisma Client query caching.
