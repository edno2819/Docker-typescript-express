FROM node:16

ENV  HOME=/usr/src/

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn -y

COPY . .

EXPOSE 3000

CMD ["yarn", "dev:server"]