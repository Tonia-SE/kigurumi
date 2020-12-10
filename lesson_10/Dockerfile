FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf  /etc/nginx/conf.d/kigurumi.conf
COPY build /usr/share/nginx/html