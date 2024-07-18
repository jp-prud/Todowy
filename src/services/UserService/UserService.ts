import { AuthCredentials } from "@types";
import { HttpClient } from "../utils/HttpClient";

export function ProfileService() {
  async function getProfile() { 
    const { data } = await HttpClient.get<AuthCredentials>('/profile')

    return data ?? ''
  }
  
  return {
    getProfile,
  }
}
