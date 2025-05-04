# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build TypeScript
RUN npx tsc

# Start the application
CMD ["node", "lib/index.js"]
