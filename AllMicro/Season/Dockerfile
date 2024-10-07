FROM ubuntu:latest

LABEL TODO="file"

RUN apt update

RUN apt install apache2 -y

RUN rm -rf /var/www/html/*

WORKDIR /var/www/html/

RUN mkdir /var/www/html/season

COPY ./ /var/www/html/season/

EXPOSE 80
    
CMD ["apachectl", "-D", "FOREGROUND"]
