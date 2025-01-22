import AWS from "aws-sdk";

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async (req, res) => {
  let annualReports = [];

  const input = {
    Bucket: "paact",
    Prefix: "reports/",
    Delimiter: "/",
  };

  const data = await s3.listObjectsV2(input).promise();
  const files = data.Contents;

  files.forEach((file) => {
    // Don't add directorys
    if (file.Size !== 0) {
      // Clean up title so it's only the year name.
      const title = file.Key.replace("reports/", "")
        .replace("PA-", "")
        .replace("-min", "")
        .replace(".pdf", "");

      const annualReport = { title: title, key: file.Key };
      annualReports.push(annualReport);
    }
  });

  // Reverse so newest first
  annualReports.reverse();

  res.statusCode = 200;
  res.json(annualReports);
};
