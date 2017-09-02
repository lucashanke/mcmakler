FROM node:6.11.2-alpine

WORKDIR /usr/app
EXPOSE 3001:3001

COPY package.json ./package.json
RUN npm install

COPY *.js ./

CMD ["npm","start"]
