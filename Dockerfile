# Use official Node.js image as base
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy everything else
COPY . .

# Build the app (production)
RUN npm run build

# Create a new smaller image for production
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files from the build stage
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Set production environment
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
