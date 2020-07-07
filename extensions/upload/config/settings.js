if(process.env.NODE_ENV === 'Production') {
  module.exports = {
    provider: 'aws-s3-webp-optimized',
    providerOptions: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
      region: 'us-east-1',
      params: {
        Bucket: process.env.S3_BUCKET_NAME
      }
    }
  }
} else {
  module.exports = {
    provider: 'aws-s3-webp-optimized',
    providerOptions: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
      region: 'us-east-1',
      params: {
        Bucket: process.env.S3_BUCKET_NAME
      }
    }
  }
}