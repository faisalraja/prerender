FROM geekykaran/headless-chrome-node-docker:latest

WORKDIR /app
COPY server.js ./server.js
RUN npm install prerender prerender-memory-cache

EXPOSE 3000

ENV CACHE_MAXSIZE=1000
ENV CACHE_TTL=60
ENV ALLOWED_DOMAINS=www.google.com,www.example.com

CMD [ "node", "server.js" ]