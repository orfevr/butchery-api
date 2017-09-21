# Base image
FROM node:8.5.0-alpine

# App directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# app default port
EXPOSE 8001

CMD [ "npm", "start" ]