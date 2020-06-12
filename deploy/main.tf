provider "aws" {
  shared_credentials_file = "/.aws/credentials"
  region = "${var.region}"
}

locals {
  bucket_name = "${var.website_bucket}-${var.unique_tag}"
  bucket_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "AddPerm",
        "Effect": "Allow",
        "Principal": "*",
        "Action": ["s3:GetObject"],
        "Resource": ["arn:aws:s3:::${var.website_bucket}-${var.unique_tag}/*"]
      }
    ]
  })
}

resource "aws_s3_bucket" "site_bucket" {
  bucket        = local.bucket_name
  acl           = "public-read"
  force_destroy = true
  policy        = local.bucket_policy
  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}


