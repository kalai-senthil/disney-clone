import { ID } from "appwrite";
import { appwrite } from "./client";
import { UserCredentials } from "../../typings";

async function login({ email, password }: UserCredentials) {
  try {
    const user = await appwrite.account.createEmailSession(email, password);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, data: null, error };
  }
}

async function register({ email, password }: UserCredentials) {
  try {
    const user = await appwrite.account.create(ID.unique(), email, password);
    console.log(user);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error, data: null };
  }
}
export const auth = { login, register };
