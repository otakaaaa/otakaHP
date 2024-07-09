FROM node:22

ENV TZ Asia/Tokyo

WORKDIR /src

COPY ./package.json /src

RUN yarn install

COPY . /src

EXPOSE 8080

CMD ["yarn", "serve"]