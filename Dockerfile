FROM node:14-slim
LABEL MAINTAINER="Wellington Zambiazzi <w.zambiazzi@gmail.com>"
ENV PORT=3000
RUN apt-get update && apt-get install -y curl
COPY . /demo
WORKDIR /demo
RUN npm i
EXPOSE $PORT
CMD npm start
