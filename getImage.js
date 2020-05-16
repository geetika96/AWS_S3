const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  // Can be recreated using URL : https://console.aws.amazon.com/iam/home?#/security_credentials
    accessKeyId: "AKIAIDR7MCUVVGMN6JPQ",
    secretAccessKey: "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"
});

const fileName = '/Users/ggeetanj/Pictures/0e25a6387c72f190c83cf16813a6cf31.jpg';
const getFile = () => {

    const result_Image = "https://whirlpool-qr-app.s3.ap-south-1.amazonaws.com/"+fileName;
    console.log(result_Image);
    return result_Image;
  //   const params = {
  //   //Bucket name of our upload Bucket
  //     Bucket: 'whirlpool-qr-app',
  //     //ToDo Set id as 1_ 2_ 3_ ...
  //     Key: fileName,
  //     ContentType: "image/jpeg"
  //   };
  //
  //   const data = s3.getObject(params, function(err, data) {
  // });
};

getFile();
