FROM node:18.17.0

WORKDIR /frontend

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]