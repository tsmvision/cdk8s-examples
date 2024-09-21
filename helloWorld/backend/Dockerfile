# Step 1: Use the official Node.js image as the base image
FROM node:22-alpine3.19

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

COPY ./build/ .

EXPOSE 3000

CMD ["node", "index.js"]
