# Deploye Employee app through Dockerfile
## Step 1: Create Instance and connect it 

![image](https://github.com/user-attachments/assets/8182739f-c9d0-495c-a1b7-64e581f9f9c5)

## Step 2: Write Dockerfile for Backend 
```
# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest
# Environment variables for PostgreSQL
ENV POSTGRES_DB=employees
ENV POSTGRES_USER=test
ENV POSTGRES_PASSWORD=1234
# Define a custom path for PostgreSQL data
ENV PGDATA=/var/lib/postgresql/custom_data
# Create the custom data directory and set permissions
RUN mkdir -p /var/lib/postgresql/custom_data && chown -R postgres:postgres /var/lib/postgresql/custom_data
# Create the configuration directory to avoid missing directory errors
RUN mkdir -p /etc/postgresql/conf.d
# Copy initialization SQL script to the Docker image
COPY init-db.sql /docker-entrypoint-initdb.d/
# Copy custom PostgreSQL configuration file
COPY postgresql.conf /etc/postgresql/postgresql.conf
# Expose the PostgreSQL port
EXPOSE 5432
# Ensure PostgreSQL uses the custom configuration and data directory
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]
```
### write postgresql.conf file
```
# PostgreSQL configuration file
# Set the data directory
data_directory = '/var/lib/postgresql/custom_data'
# Connection settings
listen_addresses = '*'
port = 5432
# Logging settings
logging_collector = on
log_directory = 'log'
log_filename = 'postgresql.log'
# Other settings can go here
```
### write init-db.sql file
```
-- Check if the user 'test' exists, and create it if it does not
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE rolname = 'test') THEN
      CREATE USER test WITH PASSWORD '1234';
   END IF;
END
$$;
-- Check if the database 'employees' exists, and create it if it does not
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database
      WHERE datname = 'employees') THEN
      CREATE DATABASE employees;
   END IF;
END
$$;
-- Grant all privileges on the database 'employees' to the user 'test'
GRANT ALL PRIVILEGES ON DATABASE employees TO test;
-- Switch to the 'employees' database
\c employees
-- Grant usage and privileges on the public schema to the user 'test'
GRANT USAGE ON SCHEMA public TO test;
GRANT CREATE ON SCHEMA public TO test;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO test;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO test
```
## Step 2: Write Dockerfile for backend
```
# Use Ubuntu as the base image
FROM ubuntu:latest
# Set environment variables for non-interactive apt installs
ENV DB_HOST="<instance_pub_ip>" 
ENV DB_USER="test" 
ENV DB_PASSWORD="1234" 
ENV DB_NAME="employees" 
ENV DB_PORT="5432" 
ENV ALLOWED_ORIGINS="http://<instance_pub_ip>:3000"
# Set Go environment variables
ENV GOPATH=/go
ENV GOROOT=/usr/local/go
ENV PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
# Update and install dependencies
RUN apt-get update && \
    apt-get install -y wget git build-essential
# Install Go
RUN wget https://golang.org/dl/go1.19.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz && \
    rm go1.19.linux-amd64.tar.gz
# Create the Go working directory
RUN mkdir -p /home/ubuntu/project
# Set the working directory
WORKDIR /home/ubuntu/project
# Copy the Go application code to the container
COPY . .
# Expose port 8080 to the outside world
EXPOSE 8080
# Command to run the Go application
CMD ["go", "run", "main.go"]
```
## Step 3: Write Dockerfile for frontend
```
# Use the official Ubuntu base image for a supported version
FROM ubuntu:bionic
# Set the working directory inside the container
WORKDIR /usr/src/app
# Install curl and Node.js setup script dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
# Install Node.js (which includes npm)
RUN apt-get install -y nodejs
# Install n globally (if needed)
RUN npm install -g n
# Install Node.js version 14.17.0 using n
RUN n 14.17.0
# Copy package.json and package-lock.json files
COPY package*.json ./
COPY .env ./
# Install application dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Expose port 3000 to the outside world
EXPOSE 3000
# Start the application
CMD ["npm", "start"]
```
## Step 4: Must have Instance Public IP in .env File 
```
REACT_APP_SERVER_URL=http://<instance_pub_ip>:8080/employees
```
## Step 5: Build Docker image for database,backend & frontend by command
```
docker build -t <image_name> .
```
## Step 6: Run container from that image by command
```
docker run -d -p <host_port>:<container_port> <image_name>
```
## Step 7: Hit public IP and particular on browser you will get your website
