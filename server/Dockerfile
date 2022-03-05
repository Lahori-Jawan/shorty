FROM node:12-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY . ./

RUN ls -a
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
