FROM node:21.6.1-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN corepack enable && corepack prepare yarn@4.5.1 --activate

RUN adduser -D -h /usr/app/expoApp -s /bin/sh appuser

WORKDIR /usr/app/expoApp

# Copy all files at once including package.json, yarn.lock and the rest of the app
COPY apps/expoApp .

# Install dependencies after copying all files
RUN yarn install && npm install -g expo-cli && yarn add babel-plugin-module-resolver express && node -v && yarn -v

# Now run the export command
RUN yarn run export-w

RUN mkdir -p /usr/app/expoApp/public
RUN mv dist/* /usr/app/expoApp/public 2>/dev/null || true

COPY apps/expoApp/server.js .

RUN chown -R appuser:appuser /usr/app/expoApp
USER appuser

ENV PORT 6201
EXPOSE $PORT

CMD ["node", "server.js"]