import { useAuthContext } from "@context";
import { AuthService } from "@services";

export function useSignOut() {
  const { removeCredentials } = useAuthContext() 
  const { removeToken } = AuthService();

  function signOut() {
    removeCredentials();
    removeToken();
  }

  return {
    signOut
  }
}