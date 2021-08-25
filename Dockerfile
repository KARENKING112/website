FROM alpine:latest
RUN apk add nodejs yarn
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM alpine:latest
RUN apk add nginx
WORKDIR /app
COPY --from=0 /app/dist ./dist
COPY nginx.conf /etc/nginx/http.d/default.conf
CMD ["nginx", "-g", "daemon off;"]