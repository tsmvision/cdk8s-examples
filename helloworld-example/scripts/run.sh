#!/bin/bash

./build-docker-images.sh
./run-minikube.sh
./apply-kubernetes-config.sh