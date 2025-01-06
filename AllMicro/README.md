# Deploying Microservices Using Docker Containers

## Step 1: Launch an Instance
![Screenshot 2024-08-26 231009](https://github.com/user-attachments/assets/a2ed93e8-2b2c-4a20-8ccb-662caaee4ac9)

## Step 2: Create Dockerfiles for Each Microservice

Below are the `Dockerfile` configurations for each microservice:

### 1. Amazon Clone
```dockerfile
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

### 2. Counter
```dockerfile
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

### 3. Number
```dockerfile
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

### 4. Puppy
```dockerfile
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

### 5. Season
```dockerfile
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

### 6. Student Backend
```dockerfile
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

### 7. Student Frontend
```dockerfile
FROM ubuntu:latest
RUN apt update && \
    apt install apache2 -y
COPY index.html /var/www/html/
EXPOSE 80
CMD ["apachectl","-D","FOREGROUND"]
```

### 8. Todo
```dockerfile
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

### 9. Traffic
```dockerfile
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

### 10. VR
```dockerfile
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

## Step 3: Build Docker Images for All Microservices

To build the Docker image for each microservice, navigate to the folder where the respective `Dockerfile` is located and run the following command:

```bash
docker build -t <image_name> .
```

For example:
```bash
docker build -t amazon-clone .
docker build -t counter .
docker build -t number .
docker build -t puppy .
docker build -t season .
docker build -t student-backend .
docker build -t student-frontend .
docker build -t todo .
docker build -t traffic .
docker build -t vr .
```

## Step 4: Create Containers from the Built Images

Once the images are built, run the following command to create a container for each microservice:

```bash
docker run -d -p <host_port>:<container_port> <image_name>
```

For example:
```bash
docker run -d -p 8081:80 amazon-clone
docker run -d -p 8082:80 counter
docker run -d -p 8083:80 number
docker run -d -p 8084:80 puppy
docker run -d -p 8085:80 season
docker run -d -p 8086:8080 student-backend
docker run -d -p 8087:80 student-frontend
docker run -d -p 8088:80 todo
docker run -d -p 8089:80 traffic
docker run -d -p 8090:80 vr
```

Ensure that each container's port is mapped to a unique host port.

## Step 5: Access Microservices via Browser

Once the containers are up and running, you can access the microservices via your instance's public IP address and the respective port numbers in your browser. For example:

- Amazon Clone: `http://<public_ip>:8081`
- Counter: `http://<public_ip>:8082`
- Number: `http://<public_ip>:8083`
- Puppy: `http://<public_ip>:8084`
- Season: `http://<public_ip>:8085`
- Student Backend: `http://<public_ip>:8086`
- Student Frontend: `http://<public_ip>:8087`
- Todo: `http://<public_ip>:8088`
- Traffic: `http://<public_ip>:8089`
- VR: `http://<public_ip>:8090`
