import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.DB_APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export { ID } from 'appwrite';