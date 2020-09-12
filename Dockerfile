FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN yarn install && yarn cache clean

COPY . /app

RUN yarn global add serve

CMD ["yarn", "run", "build"]