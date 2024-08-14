# Use the official Node.js image as a base
FROM node:18-alpine

# Install Python and other dependencies required by node-gyp
RUN apk add --no-cache python3 make g++ 

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
