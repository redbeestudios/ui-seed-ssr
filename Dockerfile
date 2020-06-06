FROM  node:14.4.0-slim as builder

COPY . /app
WORKDIR /app
RUN npm rebuild node-sass && npm install && npm run build

EXPOSE 8080
ENTRYPOINT node dist/server.js
