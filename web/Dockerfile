FROM node:alpine AS build
WORKDIR /app
COPY ./package.json yarn.lock ./

RUN yarn
COPY . ./
RUN yarn build

FROM nginx:stable

ENV PORT=80

COPY --from=build /app/build  /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/

EXPOSE 80

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/nginx.conf && nginx -g 'daemon off;'