# DOCKER COMPOSE
## Step 1: Create Instance and Install Docker in it
## Step 2: Must have Dockerfile written for microservice
## Step 3: Create docker-compose.yml file for Studentapp and Employeeapp services
```
services:          #default synxtax
  databasestudfirst:        #naming convention for container
    build: /opt/student-employeeyml/student/Mysql/  #location of the docker file
    ports:     #port mapping my container to host port 
      - '3306:3306'  
    container_name: Databasestud  #providing name to container
    network_mode:   #providing network mode
        bridge

  backendstudsecond: 
    build: /opt/student-employeeyml/student/Backendstud/    
    ports:
      - '8080:8080'        
    container_name: Backendstud
    network_mode:
        bridge

  frontendstudthrid:
    build:  /opt/student-employeeyml/student/Frontendstud/
    ports:
      - '80:80'
    container_name: Frontendstud
    network_mode:
        bridge
      
  databaseempfirt: 
    build: /opt/student-employeeyml/employee/Psql/
    ports:
      - '5432:5432'
    container_name: Databaseemp  
    network_mode:
      bridge

  backendendempfirst: 
    build: /opt/student-employeeyml/employee/Backendemp/
    ports: 
      - '8081:8080'
    container_name: Backendemp
    network_mode:
      bridge

  frontendempfirst:
    build: /opt/student-employeeyml/employee/Frontendemp/
    ports:
      - '3000:3000'
    container_name: Frontendemp
    network_mode:
      bridge
```
## Step 4: Clone Repository in /opt
```
git clone https://github.com/Aamantamboli/student-employeeyml.git
```
## Step 5: Change directory to where you have created docker-compose.yml
```
cd /opt/student-employeeyml/dockercompose/
```
## Step 6: Now Up docker compose by command
```
docker compose up
```
