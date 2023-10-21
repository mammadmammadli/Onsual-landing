FROM node:20-alpine
COPY ["package.json", "./"]
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
