import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); 

export const account = new Account(client);
export { ID } from 'appwrite';