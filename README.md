# <div align="center"> DOCKER </div>
<p align="center">
 <img src=https://github.com/user-attachments/assets/6ce7cea4-dd64-42c9-b433-083dbb2e352e>
</p>

# What is Docker?
Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerization. It allows developers to package applications and their dependencies into containers, which can run consistently across different computing environments.Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime. Using Docker, you can quickly deploy and scale applications into any environment and know your code will run.

# Docker Architecture ?

![image](https://github.com/user-attachments/assets/4f2f1b65-ab0c-49bd-a7e6-4154797359ea)

The above picture, clearly indicates that Docker Deamon is brain of Docker. If Docker Deamon is killed, stops working for some reasons, Docker is brain dead :p (sarcasm intended).

# Docker LifeCycle
We can use the above Image as reference to understand the lifecycle of Docker.<br>
There are three important things,<br>
1.docker build -> builds docker images from Dockerfile<br>
2.docker run -> runs container from docker images<br>
3.docker push -> push the container image to public/private regestries to share the docker images.<br>

# Understanding the terminology (Inspired from Docker Docs)
## Docker daemon
The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

## Docker registries
A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.<br>

When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry. Docker objects<br>

When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects. This section is a brief overview of some of those objects.

## Dockerfile
Dockerfile is a file where you provide the steps to build your Docker Image.

## Images
An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.<br>

You might create your own images or you might only use those created by others and published in a registry. To build your own image, you create a Dockerfile with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what makes images so lightweight, small, and fast, when compared to other virtualization technologies.

# Why use Docker?
Using Docker lets you ship code faster, standardize application operations, seamlessly move code, and save money by improving resource utilization. With Docker, you get a single object that can reliably run anywhere. Docker's simple and straightforward syntax gives you full control. Wide adoption means there's a robust ecosystem of tools and off-the-shelf applications that are ready to use with Docker.<br>
## Ship More Software Faster

![image](https://github.com/user-attachments/assets/e9caef92-af00-40a5-8883-fee94eecf1b2)

Docker users on average ship software 7x more frequently than non-Docker users. Docker enables you to ship isolated services as often as needed.

## Standardize Operations

![image](https://github.com/user-attachments/assets/243b1015-b088-46c8-bbea-d632dafa4898)

Small containerized applications make it easy to deploy, identify issues, and roll back for remediation.

## Seamlessly Move

![image](https://github.com/user-attachments/assets/0244a54c-01c4-4646-addf-29adf32afe97)

Docker-based applications can be seamlessly moved from local development machines to production deployments on AWS.

## Save Money

![image](https://github.com/user-attachments/assets/0bf287c7-423f-433d-9a39-628f04c8d387)

Docker containers make it easier to run more code on each server, improving your utilization and saving you money.

# What is a container ?
A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.<br>
Container images become containers at runtime and in the case of Docker containers – images become containers when they run on Docker Engine. Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the infrastructure. Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging.<br>
Docker containers that run on Docker Engine:<br>
**Standard:** Docker created the industry standard for containers, so they could be portable anywhere<br>
**Lightweight:** Containers share the machine’s OS system kernel and therefore do not require an OS per application, driving higher server efficiencies and reducing server and licensing costs<br>
**Secure:** Applications are safer in containers and Docker provides the strongest default isolation capabilities in the industry

# Why are containers light weight ?
Containers are lightweight because they use a technology called containerization, which allows them to share the host operating system's kernel and libraries, while still providing isolation for the application and its dependencies. This results in a smaller footprint compared to traditional virtual machines, as the containers do not need to include a full operating system. Additionally, Docker containers are designed to be minimal, only including what is necessary for the application to run, further reducing their size.
