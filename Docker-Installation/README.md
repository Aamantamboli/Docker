# Docker Installation Guide

## Step 1: Create Instance and Connect

![image](https://github.com/user-attachments/assets/58df257c-428e-4035-ab10-6ea574078895)

First, create a virtual machine (VM) or EC2 instance and connect to it via SSH. Ensure that the instance is running an Ubuntu operating system.

## Step 2: Install Docker on Ubuntu

Follow these steps to install Docker from Docker's official repositories.

### 1. Add Docker’s Official GPG Key

Run the following commands to add Docker’s GPG key to your system:

```bash
# Update the package index
sudo apt-get update

# Install dependencies for HTTPS support
sudo apt-get install ca-certificates curl

# Add Docker’s official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc

# Ensure the key has the correct permissions
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

### 2. Add Docker's Official Repository

Now, add Docker’s official repository to your system’s APT sources:

```bash
# Add Docker's repository to your sources list
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
sudo apt-get update
```

## Step 3: Install Docker Packages

Once the repository is added, install Docker and its required components using the following command:

```bash
# Install Docker, Docker CLI, containerd, and Docker Compose plugin
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

This will install:

- `docker-ce`: The Docker Engine
- `docker-ce-cli`: The Docker CLI tools
- `containerd.io`: The container runtime
- `docker-buildx-plugin`: Docker’s build tool
- `docker-compose-plugin`: Docker Compose plugin for managing multi-container applications

## Step 4: Verify the Installation

After installation is complete, verify that Docker is correctly installed by running:

```bash
# Check Docker version
docker --version

# Test Docker installation with a simple hello-world container
sudo docker run hello-world
```

If everything is set up correctly, you will see a "Hello from Docker!" message.

---

### Notes:
- Make sure your system meets Docker’s requirements.
- After installation, you may need to add your user to the Docker group to run Docker commands without `sudo`. This can be done with the following command:

  ```bash
  sudo usermod -aG docker $USER
  ```

  Log out and log back in for the changes to take effect.
