import { App, Chart } from 'cdk8s';
import { Deployment, ServiceType } from "cdk8s-plus-28";
// import * as path from "node:path";
// import path from 'path';

export const app = new App();
const chart = new Chart(app, 'express-app');
// const appData = new ConfigMap(chart, 'AppData');
// appData.addDirectory(path.join(__dirname, 'app'));

const deployment = new Deployment(chart, 'deployment', {
    replicas: 1,
    securityContext: {
        // TODO: fix this
        ensureNonRoot: false,
        // user: 1000,
        // group: 1000,
    }
});

deployment.addContainer({
    image: 'tsmvision/express-app:latest',
    portNumber: 8080,
    securityContext: {
    //     // TODO: fix this
        ensureNonRoot: false,
    //     // user: 1000,
    //     // group: 2000,
    }
});

deployment.exposeViaService({
    serviceType: ServiceType.LOAD_BALANCER,
    ports: [
        {
            port: 80,
            targetPort: 8080,
        }
    ],
});

app.synth();
