FROM node:20.11.0-alpine as build

ARG node_env
ARG client_protocol
ARG client_host
ARG google_api_key

ENV NODE_ENV "production"
ENV CLIENT_PROTOCOL $client_protocol
ENV CLIENT_HOST $client_host
ENV CLIENT_PORT ''
ENV GOOGLE_API_KEY $google_api_key

WORKDIR /home/node/app
RUN npm install -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine as server
COPY --from=build /home/node/app/build/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]