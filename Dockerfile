#Stage 1 - build the react app
FROM node:18 as builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install 
COPY . .
RUN yarn build


#Stage 2 - run the react app
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
expose 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]