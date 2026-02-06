# Use Node 22
FROM node:22-alpine AS base

WORKDIR /app

# 1. Copy package files and install with pnpm 9 (bypasses Railway's old pnpm)
COPY package.json pnpm-lock.yaml ./
RUN npm run install:frozen

# 2. Copy app and build
COPY . .
RUN npx next build

# 3. Run custom server
EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production
CMD ["node", "server.js"]
