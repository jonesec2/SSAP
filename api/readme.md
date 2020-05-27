# AWS Lambda API

-   [x] Skeleton readme
-   [ ] Configure for lambda properly
-   [ ] Determine necessary functions & response models
-   [ ] Determine if all in one file or multiple

1. Run locally and install instructions
    ```js
    $ npm install
    $ npm run get-potion
    $ npm run get-user
    $ npm run ...
    ```
    - SAM ([Serverless Application Model][sam-cli]) CLI
        - [install][sam-install]
        - [debug][sam-debug]
        - [local][sam-local]
        - [api][sam-api]
        - [test][sam-test]
        - [invoke][sam-invoke]
1. Potion functions
    - get stuff
    - brew stuff
1. User functions
    - get money
    - buy stuff
    - randomizing die roll stuff

[sam-cli]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
[sam-install]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
[sam-debug]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging-nodejs.html
[sam-local]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-invoke.html
[sam-api]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-start-api.html
[sam-test]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-automated-tests.html
[sam-invoke]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html
