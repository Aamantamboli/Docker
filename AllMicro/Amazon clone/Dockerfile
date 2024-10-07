FROM ubuntu:latest

LABEL TODO="file"

RUN apt update

RUN apt install apache2 -y

RUN rm -rf /var/www/html/*

WORKDIR /var/www/html/

COPY ./ /var/www/html/

EXPOSE 80
    
CMD ["apachectl", "-D", "FOREGROUND"]
