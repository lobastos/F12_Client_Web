FROM node:lts-alpine as build-stage
RUN npm install -g @vue/cli -D sass-loader sass
WORKDIR /app
EXPOSE 3000
USER node
CMD ["npm","run", "serve"]

#FROM node:lts-alpine as build-stage

#RUN npm install -g http-server

#WORKDIR /app

#COPY package*.json ./

#RUN npm install

#COPY . . 

#EXPOSE 3000

#CMD ["npm", "serve"]

# FROM node:lts-alpine as build-stage

#RUN npm install -g @vue/cli @vue/cli-service-global