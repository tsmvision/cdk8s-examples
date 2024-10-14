#!/bin/bash

docker build ../backend/java-backend/ -t spring-boot-hello-world

# register local docker images into minikube image
eval $(minikube docker-env)