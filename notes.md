# K8s Notes

## To create a deployment

```bash
kubectl create deploy nosk-dp --image=vishwakarmad1999/nosk
```

## To create different types of services

```bash
# ClusterIP
kubectl expose deployment nosk-dp --port=9000 --target-port=3000

# NodePort
kubectl expose deployment nosk-dp --port=3000 --type=NodePort

# LoadBalancer
kubectl expose deployment nosk-dp --port=3000 --type=LoadBalancer
```

## To rollout update using an updated image

```bash
# This does the job
kubectl set image deploy/ng-dp nosk=vishwakarmad1999/nosk:1.0.3; kubectl rollout status deploy/ng-dp

# To check the rollout status
kubectl rollout status deployment nosk-dp
```

## If you delete a pod, then the deployment would balance the numbers by spinning another pod

The reason being the number of replicas you provided k8s at the time of scaling or creating a deployment.

## To delete the pods, services, and deployments tagged with a label

```bash
kubectl delete all -l app=ng-dp
```
