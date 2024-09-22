import {Construct} from 'constructs';
import {App, Chart, ChartProps} from 'cdk8s';
import {Deployment, ImagePullPolicy, ServiceType} from "cdk8s-plus-28";

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    const helloWorldBackendDeployment = new Deployment(this, 'hello-world', {
        replicas: 1,
        containers: [
            {
                name: 'app-container',
                image: 'hello-world-backend:latest',
                imagePullPolicy: ImagePullPolicy.IF_NOT_PRESENT,
                ports: [{
                    number: 3000,
                }],
                securityContext: {
                    ensureNonRoot: false,
                },
            }
        ]
    });

    helloWorldBackendDeployment.exposeViaService({
        ports: [
            {
                port: 3000,
            }
        ],
        serviceType: ServiceType.LOAD_BALANCER,
    });
  }
}

const app = new App();
new MyChart(app, 'deployment');
app.synth();
