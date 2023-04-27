FROM node:18

WORKDIR "/src"

RUN npm install

RUN   npm run dev

