import {
  BlobSASPermissions,
  BlobServiceClient,
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
} from "@azure/storage-blob";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const containerName = "posts";

const accountName = process.env.AZURE_STORAGE_NAME;
const accountKey = process.env.AZURE_STORAGE_KEY;

if (!accountName || !accountKey) {
  throw new Error("Azure Storage account name and key are required");
}

const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey
);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

async function generateSASToken() {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const permissions = new BlobSASPermissions();
  permissions.write = true;
  permissions.create = true;
  permissions.read = true;

  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + 30);

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: containerClient.containerName,
      permissions: permissions,
      expiresOn: expiryDate,
    },
    sharedKeyCredential
  ).toString();

  return sasToken;
}

export default generateSASToken;

// Código para ejecutar y verificar la generación del SAS token
generateSASToken().then(token => {
  console.log("Generated SAS Token:", token);
}).catch(err => {
  console.error("Error generating SAS token:", err.message);
});
