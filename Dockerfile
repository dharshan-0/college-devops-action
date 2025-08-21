FROM node:24-bookworm

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm i

CMD [ "pnpm", "vite", "--host" ]