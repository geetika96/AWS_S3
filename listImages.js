const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  // Can be recreated using URL : https://console.aws.amazon.com/iam/home?#/security_credentials
    accessKeyId: "AKIAJC27P42ZV5YGPBCA",
    secretAccessKey: "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"
});

function listAllObjectsFromS3Bucket(bucket, days) {
  //Days as per which data is to be filtered
  //days will be -1 by default when client is not passing anything
    const params = {
      //Bucket name of our upload Bucket
        Bucket: 'whirlpool-qr-app'
    };
  s3.listObjects(params, function(err, data) {
   if (err) {
     console.log(err);
   return err; // an error occurred
 }
 for (var num in data.Contents) {
   var timestampDiffAllowed = days * 24 * 60 * 60 * 1000;
   var timestamp = new Date().getTime() - data.Contents[num].LastModified.getTime();
   if(days==-1 || timestampDiffAllowed > timestamp)
   console.log(data.Contents[num].Key);

 }
 });
};

listAllObjectsFromS3Bucket('whirlpool-qr-app',30);
