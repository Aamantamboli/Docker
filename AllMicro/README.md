# All Micro Services through Container
## Step 1: Launch Instance

![Screenshot 2024-08-26 231009](https://github.com/user-attachments/assets/8815fa1e-0594-48bb-9d16-1ca8fb66b566)

## Step 2: Create Docker file for each MicroService
### Amazon clone
```
FROM ubuntu:latest
LABEL TODO="file"
RUN apt update
RUN apt install apache2 -y
RUN rm -rf /var/www/html/*
WORKDIR /var/www/html/
RUN mkdir /var/www/html/amazon
COPY ./ /var/www/html/amazon/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
```
### Counter
```
FROM ubuntu:latest
LABEL TODO="file"
RUN apt update
RUN apt install apache2 -y
RUN rm -rf /var/www/html/*
WORKDIR /var/www/html/
RUN mkdir /var/www/html/vr
COPY ./ /var/www/html/vr/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
```
### Number
```
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
```
### Puppy
```
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
```
### Season
```
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
```
### Student backned
```
FROM ubuntu:latest
LABEL Backend="studentappmicroservice"
ADD https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.93/bin/apache-tomcat-9.0.93.zip /opt/
WORKDIR /opt/
RUN apt update && \
    apt install unzip openjdk-11-jdk -y && \
    unzip apache-tomcat-9.0.93.zip
COPY student.war /opt/apache-tomcat-9.0.93/webapps/
COPY mysql-connector.jar /opt/apache-tomcat-9.0.93/lib/
COPY context.xml  /opt/apache-tomcat-9.0.93/conf/
RUN chmod +rwx /opt/apache-tomcat-9.0.93/bin/*.sh
EXPOSE 8080
CMD ["/opt/apache-tomcat-9.0.93/bin/catalina.sh", "run"]
```
### Student frontend
```
FROM ubuntu:latest
RUN apt update && \
    apt install apache2 -y
COPY index.html /var/www/html/
EXPOSE 80
CMD ["apachectl","-D","FOREGROUND"]
```
### Todo
```
FROM ubuntu:latest
LABEL TODO="file"
RUN apt update
RUN apt install apache2 -y
RUN rm -rf /var/www/html/*
WORKDIR /var/www/html/
RUN mkdir /var/www/html/todo
COPY ./ /var/www/html/todo/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
```
### Traffic
```
FROM ubuntu:latest
LABEL TODO="file"
RUN apt update
RUN apt install apache2 -y
RUN rm -rf /var/www/html/*
WORKDIR /var/www/html/
RUN mkdir /var/www/html/traffic
COPY ./ /var/www/html/traffic/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
```
### VR
```
FROM ubuntu:latest
LABEL TODO="file"
RUN apt update
RUN apt install apache2 -
RUN rm -rf /var/www/html/*
WORKDIR /var/www/html/
RUN mkdir /var/www/html/vr
COPY ./ /var/www/html/vr/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
```

## Step 3: Build docker image for all micro services by command
```
docker build -t <image_name> .
```

## Step 4: Create container through build image by command
```
docker run -d -p <host_port>:<container_port> <image_name>
```
## Step 5: Hit Public IP of Instance and particular port on browser you will get your micro services
