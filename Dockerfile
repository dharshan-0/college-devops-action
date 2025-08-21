FROM node:24.6.0-bookworm-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm i

COPY . .

RUN pnpm build

CMD [ "pnpm", "preview" ]
