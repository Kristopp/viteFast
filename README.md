# ViteFast AI Agent Template

A modern, full-stack TypeScript template for building AI agent applications with Fastify and React.

## 🚀 Features

- **Backend**: Fastify with TypeBox schema validation and Zod for additional validation
- **Frontend**: Vite + React + TypeScript with Ant Design UI components
- **Monorepo**: Organized workspace structure with shared types
- **Development**: Single command to run both server and client
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Modern Tooling**: ESM modules, fast builds, and hot reload

## 🏗️ Project Structure

```
/
├── apps/
│   ├── server/               # Fastify backend (port 3001)
│   │   ├── src/
│   │   │   ├── routes/       # API routes
│   │   │   ├── plugins/      # Fastify plugins
│   │   │   ├── schemas/      # TypeBox schemas
│   │   │   └── app.ts        # Main application
│   │   └── package.json
│   └── client/               # React frontend (port 5173)
│       ├── src/
│       │   ├── components/   # React components
│       │   ├── services/     # API client services
│       │   └── main.tsx      # Entry point
│       └── package.json
├── packages/
│   └── shared/               # Shared types and utilities
└── package.json              # Root workspace configuration
```

## 🛠️ Getting Started


### Prerequisites

- Node.js 22 (LTS) — see `.nvmrc` for the recommended version (22.18.0)
- npm >= 9

### Installation


1. Clone or use this template
2. (Recommended) Use nvm to set your Node version:
   ```bash
   nvm install # Uses the version in .nvmrc (22.18.0)
   nvm use
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
5. Start development servers:
   ```bash
   npm run dev
   ```

This will start both the server (http://localhost:3001) and client (http://localhost:5173) simultaneously.

## 📜 Available Scripts

### Root Level
- `npm run dev` - Start both server and client in development mode
- `npm run dev:server` - Start only the Fastify server
- `npm run dev:client` - Start only the Vite client  
- `npm run build` - Build both server and client for production
- `npm run test` - Run tests for all packages
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages

### Server (apps/server)
- `npm run dev` - Start server in watch mode
- `npm run build` - Build server
- `npm run start` - Start production server

### Client (apps/client)
- `npm run dev` - Start Vite dev server
- `npm run build` - Build client for production
- `npm run preview` - Preview production build

## 🔧 Core Dependencies

### Backend
- **Fastify**: High-performance web framework
- **TypeBox**: TypeScript-first schema validation
- **Zod**: Additional runtime type validation
- **dotenv**: Environment variable management
- **@fastify/cors**: CORS support

### Frontend  
- **Vite**: Fast build tool and dev server
- **React**: UI library with TypeScript
- **Ant Design**: Professional UI components
- **Axios**: HTTP client for API calls

## 🌐 API Endpoints

The server provides these endpoints:

- `GET /health` - Health check endpoint
- `GET /api/hello` - Example API endpoint
- `POST /api/echo` - Echo endpoint for testing

## 🎯 Next Steps

This template includes placeholders for common AI agent features:

1. **Add AI Services**: OpenAI, Anthropic, or local models
2. **Add Vector Database**: Pinecone or ChromaDB for embeddings
3. **Add Authentication**: JWT-based auth system
4. **Add WebSocket**: Real-time agent communication
5. **Add Database**: PostgreSQL or MongoDB for persistence

Check the copilot instructions file (`.vscode/copilot-instructions.md`) for detailed guidance on extending this template.

## 📝 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Server Configuration
PORT=3001
HOST=0.0.0.0
NODE_ENV=development
LOG_LEVEL=info

# CORS Configuration  
CORS_ORIGIN=http://localhost:5173
```

## 🔍 Development

The project uses:
- TypeScript with strict configuration
- ESM modules throughout
- Vite proxy for API calls during development
- Hot reload for both server and client
- Shared types between frontend and backend

## 📦 Deployment

The template is ready for deployment to:
- Vercel (recommended for full-stack)
- Railway
- Docker containers
- Any Node.js hosting platform

Build for production:
```bash
npm run build
```

## 🤝 Contributing

This is a template project. Feel free to customize it for your AI agent applications!

## 📄 License

MIT License - feel free to use this template for your projects.
