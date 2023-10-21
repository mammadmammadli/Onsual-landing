FROM node:20-alpine
COPY ["package.json", "./"]
COPY . .
ARG envFile
RUN cp ${envFile} .env
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
