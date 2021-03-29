From node:14-alpine
Run apk add --no-cache python g++ make
WORKDIR /titlebot
COPY . .
EXPOSE 1234
RUN npm install --production
CMD ["node", "server/index.js"]