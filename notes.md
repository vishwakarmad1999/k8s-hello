# K8s Notes

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
kubectl set image deploy/ng-dp nosk=vishwakarmad1999/nosk:1.0.2; kubectl rollout status deploy/ng-dp

# To check the rollout status
kubectl rollout status deployment nosk-dp
```
