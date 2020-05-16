const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  // Can be recreated using URL : https://console.aws.amazon.com/iam/home?#/security_credentials
  accessKeyId: "AKIAJC27P42ZV5YGPBCA",
  secretAccessKey: "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"
});

const fileName = '/Users/ggeetanj/Pictures/0e25a6387c72f190c83cf16813a6cf31.jpg';
const fileContent = fs.readFileSync(fileName);
const uploadFile = () => {
     const params = {
       //Bucket name of our upload Bucket
         Bucket: 'whirlpool-qr-app',
         //We can set Id as per our convention. Planning something like 1_[], 2_[]
         Key: fileName,
         Body: fileContent,
         ContentType: "image/jpeg"
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) {
           throw s3Err;
         }
         console.log(`File uploaded successfully at ${data.Location}`)
     });
};

uploadFile();
