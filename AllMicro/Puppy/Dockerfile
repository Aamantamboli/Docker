FROM ubuntu:latest

LABEL TODO="file"

RUN apt update

RUN apt install apache2 -y

RUN rm -rf /var/www/html/*

WORKDIR /var/www/html/

RUN mkdir /var/www/html/puppy

COPY ./ /var/www/html/puppy/

EXPOSE 80
    
CMD ["apachectl", "-D", "FOREGROUND"]
