# Use Node 22 (Debian slim - works with Next.js native deps on Railway)
FROM node:22-slim AS base

WORKDIR /app

# 1. Copy package files and install with npm
COPY package.json package-lock.json ./
RUN npm ci

# 2. Copy app and build
COPY . .
ENV NODE_ENV=production
RUN npx next build

# 3. Run (Railway sets PORT at runtime)
EXPOSE 3000
CMD ["node", "server.js"]
