FROM node:12.16.0-stretch as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package.json package-lock.json ./

USER root

RUN npm install && npm cache clean --force

##################################################

FROM node:12.16.0-alpine

WORKDIR /usr/src/app

USER node

COPY --chown=node:node --from=builder /usr/src/app/node_modules /usr/src/app/node_modules

COPY --chown=node:node . .

CMD [ "node", "--require", "dotenv/config", "entry.js" ]
