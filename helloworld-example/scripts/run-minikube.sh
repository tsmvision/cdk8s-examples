#!/bin/bash

# run Minikube
minikube start

# register local docker images into minikube image
eval $(minikube docker-env)