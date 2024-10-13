FROM node:20-alpine AS builder

WORKDIR /app
COPY . /app
RUN npm install

FROM node:20-alpine
ARG USERNAME=appuser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

COPY --from=builder /app /app

WORKDIR /app
EXPOSE 8080

USER 1000:1000

CMD ["npm", "run", "dev"]
