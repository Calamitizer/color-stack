FROM node:14.3-alpine AS development

WORKDIR /usr/src/cs

COPY . ./

RUN yarn
RUN yarn deploy
