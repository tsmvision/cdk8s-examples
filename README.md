# cdk8s-examples

## helloWorld

### How to run

#### Build New Image

`$ scripts/docker/docker-image-build.sh`

* go to deployment folder

`$ cd deployment`


#### Generate Kubernetes config file

`$ npm run synth`

* Go back to the root folder

`$ cd ..`

#### Run kubernetes (Minikube)

`$ kubectl apply -f deployment/dist/deployment.k8s.yaml`

### How to test hello world rest api in the host

* Make sure kubernetes deployment is up and running

`$ kubectl get deploy`

* Open another terminal or terminal tab and run minikube tunnel

`$ minikube tunnel`

* Open browser or terminal and test http://localhost:3000 and make sure that you get the helloworld emssage correctly.



