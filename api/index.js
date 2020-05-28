const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/* example event and context from aws lambda
Event is exactly what you pass it
{
  "event": {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  },
  "context": {
    "callbackWaitsForEmptyEventLoop": true,
    "functionVersion": "$LATEST",
    "functionName": "sapp-potions-backend-helloFromLambdaFunction-YWQWOIVBHL9N",
    "memoryLimitInMB": "128",
    "logGroupName": "/aws/lambda/sapp-potions-backend-helloFromLambdaFunction-YWQWOIVBHL9N",
    "logStreamName": "2020/05/28/[$LATEST]4edb0044a2b94f0381cb9adde44f019d",
    "invokedFunctionArn": "arn:aws:lambda:us-east-2:146602580280:function:sapp-potions-backend-helloFromLambdaFunction-YWQWOIVBHL9N",
    "awsRequestId": "70acce10-cd8f-4fa2-8680-3c8d4364fbbf"
  }
}
*/

exports.handler = async function(event, context) {
	console.log('potions api: event ', event);
	console.log('potions api: context ', context);
	console.log('Getting buckets...');
	return s3.listBuckets().promise();
};
