# Docker Compose Guide

## Step 1: Create an Instance and Install Docker

Ensure that you have an instance (virtual machine, EC2, etc.) running Ubuntu, and Docker is installed on it. Follow the [Docker Installation Guide](#docker-installation) to install Docker.

## Step 2: Prepare Dockerfiles for Microservices

Ensure that you have the `Dockerfile` written for each microservice you want to deploy (such as `StudentApp`, `EmployeeApp`, etc.). These files define how your microservices will be built and deployed within containers.

## Step 3: Create `docker-compose.yml` for StudentApp and EmployeeApp Services

Create a `docker-compose.yml` file to define and manage multiple services (containers) at once. Here’s a sample `docker-compose.yml` file that includes the services for both `StudentApp` and `EmployeeApp`.

```yaml
version: '3'  # Docker Compose version

services:  # Define services

  # StudentApp - Database Service
  databasestudfirst: 
    build: /opt/student-employeeyml/student/Mysql/  # Location of Dockerfile
    ports:     
      - '3306:3306'  # Port mapping (container port to host port)
    container_name: Databasestud  # Container name
    network_mode: bridge  # Network mode

  # StudentApp - Backend Service
  backendstudsecond: 
    build: /opt/student-employeeyml/student/Backendstud/    
    ports:
      - '8080:8080'        
    container_name: Backendstud
    network_mode: bridge

  # StudentApp - Frontend Service
  frontendstudthird:
    build: /opt/student-employeeyml/student/Frontendstud/
    ports:
      - '80:80'
    container_name: Frontendstud
    network_mode: bridge

  # EmployeeApp - Database Service
  databaseempfirst: 
    build: /opt/student-employeeyml/employee/Psql/
    ports:
      - '5432:5432'
    container_name: Databaseemp  
    network_mode: bridge

  # EmployeeApp - Backend Service
  backendempfirst: 
    build: /opt/student-employeeyml/employee/Backendemp/
    ports: 
      - '8081:8080'
    container_name: Backendemp
    network_mode: bridge

  # EmployeeApp - Frontend Service
  frontendempfirst:
    build: /opt/student-employeeyml/employee/Frontendemp/
    ports:
      - '3000:3000'
    container_name: Frontendemp
    network_mode: bridge
```

### Explanation of Key Fields:
- `build`: Path to the directory containing the `Dockerfile`.
- `ports`: Maps a port on the host to a port in the container (host:container).
- `container_name`: Custom name for the container.
- `network_mode`: Defines how containers are networked (in this case, using the `bridge` network mode).

## Step 4: Clone the Repository

Clone the repository that contains the required `Dockerfile` configurations and other microservice files:

```bash
git clone https://github.com/Aamantamboli/student-employeeyml.git
```

The repository will be cloned to the `/opt` directory.

## Step 5: Navigate to the Directory with `docker-compose.yml`

After cloning the repository, navigate to the directory where you have placed the `docker-compose.yml` file:

```bash
cd /opt/student-employeeyml/dockercompose/
```

## Step 6: Start Docker Compose

Now, you can use Docker Compose to start the services (containers) defined in your `docker-compose.yml` file.

```bash
docker-compose up
```

This command will:
- Build the Docker images for the services.
- Start the containers defined in `docker-compose.yml`.

To run it in detached mode (in the background), use:

```bash
docker-compose up -d
```

## Step 7: Verify the Services

After running `docker-compose up`, you can check the status of your containers with the following command:

```bash
docker ps
```

This will list all the running containers, and you should see your `StudentApp` and `EmployeeApp` services running.

---

### Notes:
- Make sure the `docker-compose.yml` file is correctly formatted and all necessary files are in the correct directories.
- The `docker-compose.yml` file uses relative paths, so make sure that the paths to the `Dockerfile` directories (such as `/opt/student-employeeyml/student/Mysql/`) are correct.
- If you encounter any errors during the process, you can use `docker-compose logs` to check the logs of each service for debugging.
