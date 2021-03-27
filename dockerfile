From node:14-alpine
Run apk add --no-cache python g++ make
WORKDIR /titlebot
COPY . .
RUN npm install --production
CMD ["node", "server/index.js"]