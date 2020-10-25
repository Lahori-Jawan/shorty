FROM node:10.22-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

# check files list

RUN npm install
RUN npm run build

RUN npm run build

COPY ./dist .
RUN ls -a

EXPOSE 3000

CMD [ "npm", "start" ]