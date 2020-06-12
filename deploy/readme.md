# Terraform deployment

Commands to run for deploy

```
// configures aws
terraform plan
terraform apply

// pushes react to aws s3 bucket
.\after-terraform-apply.ps1
```

Commands to run after done

```
// removes s3 bucket
terraform destroy
```

## Instructions

Implement [this][instructions]

1. Run locally and install instructions
1. Create Website Bucket (frontend)
1. Create API Bucket (backend)
1. Configure IAM/API Gateway to facilitate communication from front to back
1. Frontend pipeline
    - Build react app
    - Test react app
    - Package react app
1. Deploy front and back end code pieces

[instructions]: https://rogerwelin.github.io/aws/serverless/terraform/lambda/2019/03/18/build-a-serverless-website-from-scratch-with-lambda-and-terraform.html 'our instructions'
