# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

ARG SERVER_PORT
ENV SERVER_PORT=${SERVER_PORT}

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE ${SERVER_PORT}

# Start the application
CMD ["npm", "start"]