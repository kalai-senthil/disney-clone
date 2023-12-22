import { Account, Client } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setJWT(process.env.APPWRITE_API_KEY as string)
  .setProject(process.env.PROJECT_ID as string);
const account = new Account(client);
export const appwrite = { client, account };
