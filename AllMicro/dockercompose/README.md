# DOCKER COMPOSE 
## Step 1: Create Instance and Install Docker in it 
## Step 2: Must have Dockerfile written for microservice 
## Step 3: Create docker-compose.yml file for Allmicro services
```
services:          #default synxtax
  frontendnginxfirst:        #naming convention for container
    build: /opt/AllMicro/Amazon clone/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '80:80'  
    container_name: Amazonclone  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxsecond:        #naming convention for container
    build: /opt/AllMicro/Counter/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '81:80'  
    container_name: Counter  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxtthird:        #naming convention for container
    build: /opt/AllMicro/Number/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '82:80'  
    container_name: Number  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxfour:        #naming convention for container
    build: /opt/AllMicro/Puppy/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '83:80'  
    container_name: Puppy  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxfive:        #naming convention for container
    build: /opt/AllMicro/Season/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '84:80'  
    container_name: Season  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxsix:        #naming convention for container
    build: /opt/AllMicro/Todo/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '85:80'  
    container_name: Todo  #providing name to container
    network_mode:   #providing network mode
        bridge


  frontendnginxseven:        #naming convention for container
    build: /opt/AllMicro/Traffic/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '86:80'  
    container_name: Traffic  #providing name to container
    network_mode:   #providing network mode
        bridge

  frontendnginxeight:        #naming convention for container
    build: /opt/AllMicro/Vr/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '88:80'  
    container_name: Vr  #providing name to container
    network_mode:   #providing network mode
        bridge
```
## Step 4: Clone Repository in /opt
```
cd /opt/
git clone https://github.com/Aamantamboli/AllMicro.git
```
## Step 5: Change directory to where you have created docker-compose.yml
```
cd /opt/Allmicro/dockercompose/
```
## Step 6: Now Up docker compose by command 
```
docker compose up
```
