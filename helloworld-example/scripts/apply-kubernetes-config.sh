#!/bin/bash

cd ../cdk8s

# build kubernetes config yaml file
npm run synth

# apply kubernetes config file
kubectl apply -f dist/*.yaml