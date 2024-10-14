## How to run
### `$ scripts/run.sh`

Run minikube tunnel to expose loadbalancer into host

Open new terminal (or tab)
### `$ mikube tunnel`

Test with curl
Make sure that you can get result

`$ curl http://localhost:80`

### Connect Telepresence
```$ telepresence connect```

### Check deployment to intercept
`$ telepresence list`

### Intercept the deployment (service) above

`$ telepresence intercept [telepresence deployment(service) name] --port 8080:80`

### Now the pod is replaced by localhost

### Make sure that curl return empty (error) return
`$ curl http://localhost:80`

### Run spring boot app locally

`$ cd backend/java-backend`

`$ ./gradlew bootRun`

### Try curl and Make sure that it return string value
`$ curl http://localhost:80`