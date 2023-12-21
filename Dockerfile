FROM node:20.10-alpine3.18

# Create app directory
WORKDIR /usr/src/app

# Add files to the container
ADD . /usr/src/app/

# Install dependencies
RUN npm install
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "build" ]