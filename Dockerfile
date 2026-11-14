FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
COPY public ./public
RUN node -e "console.log('build ok')"
EXPOSE 3000
USER node
CMD ["node", "server.js"]
