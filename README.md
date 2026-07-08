# AI SQL Analytics Platform

An enterprise-grade AI-powered analytics platform that allows users to upload CSV/Excel files and interact with the data using natural language, without writing any SQL.

## Features

- **Multi-Dataset Support**: Upload and analyze multiple datasets independently.
- **Automatic Schema Detection**: Intelligently infers datatypes and generates optimized PostgreSQL schemas.
- **Dynamic Table Generation**: Automatically builds and populates tables dynamically within isolated schemas.
- **AI-Powered Analytics**: Powered by Google Gemini. Translates natural language into secure, strictly validated SQL.
- **Smart Profiling**: Automatically computes statistical metrics on uploaded datasets (outliers, missing values, min/max).
- **Data Visualizations**: Recharts-based dynamic data visualizations.
- **Export & Reporting**: Generate comprehensive PDF reports, CSVs, and Excel files.
- **Security First**: JWT authentication, rate limiting, SQL injection protection, isolated schemas.

## Architecture

See [Architecture.md](./docs/Architecture.md) for full architectural documentation, including ER Diagrams, component flow, and AI context management strategies.

## Setup Instructions

### Prerequisites
- Node.js v20+
- PostgreSQL v14+
- Docker & Docker Compose (optional)
- Google Gemini API Key

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repo-url>
   cd ai-sql-analytics
   \`\`\`

2. **Backend Setup**
   \`\`\`bash
   cd backend
   npm install
   cp .env.example .env # Configure your DATABASE_URL and GEMINI_API_KEY
   npx prisma generate
   npx prisma db push
   npm run dev
   \`\`\`

3. **Frontend Setup**
   \`\`\`bash
   cd frontend
   npm install
   npm run dev
   \`\`\`

## Deployment

The application is production-ready with Docker support.
\`\`\`bash
docker-compose up --build -d
\`\`\`
