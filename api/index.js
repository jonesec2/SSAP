const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async function(event, context) {
	console.log('potions api: event ', event);
	console.log('potions api: context ', context);
	console.log('Getting buckets...');
	return s3.listBuckets().promise();
};
