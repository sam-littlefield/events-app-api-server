# Use Official NodeJS base image
FROM node:18-alpine
# Copy application code.
COPY . /app/
# Change the working directory in the image
WORKDIR /app
# Install dependencies.
RUN npm install --omit=dev
# Start the Express app
CMD ["node", "./src/server.js"]
