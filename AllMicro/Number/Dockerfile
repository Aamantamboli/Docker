FROM ubuntu:latest

LABEL TODO="file"

RUN apt update

RUN apt install apache2 -y

RUN rm -rf /var/www/html/*

WORKDIR /var/www/html/

RUN mkdir /var/www/html/number

COPY ./ /var/www/html/number/

EXPOSE 80
    
CMD ["apachectl", "-D", "FOREGROUND"]
