FROM node:alpine
WORKDIR /usr/src/nexofox-test

# Copy source files
COPY package.json ./
COPY . .

# Install dependencies and generate js from ts
RUN npm install && npm install typescript -g && tsc

# Open port 9876
EXPOSE 9876

# Starts app
CMD ["node", "dist/app.js"]
