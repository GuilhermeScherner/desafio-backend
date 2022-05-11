FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.20.2-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /app/build /usr/share/nginx/html/
ENV PORT=80
EXPOSE $PORT

WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

RUN chmod +x env.sh
RUN apk add --no-cache bash


CMD /bin/bash -c /usr/share/nginx/html/env.sh && sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
