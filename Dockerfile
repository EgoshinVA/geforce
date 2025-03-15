FROM node:20

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "run", "dev"]