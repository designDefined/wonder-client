import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

export const getPresignedURL = async (filename: string) => {
  try {
    const client = new S3Client({
      region: "ap-northeast-2",
      credentials: {
        accessKeyId: (import.meta.env.VITE_AWS_ACCESS_KEY ?? "") as string,
        secretAccessKey: (import.meta.env.VITE_AWS_SECRET_KEY ?? "") as string,
      },
    });
    const command = new PutObjectCommand({
      Bucket: (import.meta.env.VITE_AWS_BUCKET_NAME ?? "") as string,
      Key: "test/" + filename,
    });
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    return url;
  } catch (e) {
    return "no_url";
  }
};

const getExtensionStringFromFilename = (filename: string) => {
  const lastDotIndex = filename.lastIndexOf(".");
  return filename.slice(lastDotIndex);
};

export const pushFileToPresignedURL = async (file: File) => {
  try {
    const randomId = nanoid(10);
    const extension = getExtensionStringFromFilename(file.name);
    const url = await getPresignedURL(randomId + extension);
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "image/*",
      },
      body: file,
    });
    return url.split("?")[0];
  } catch (e) {
    console.log(e);
    return null;
  }
};
