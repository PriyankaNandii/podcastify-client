import { useContext } from "react";
import { AuthContext, AuthContextType } from "../Providers/AuthProviders"; // Ensure the type is imported

const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};

export default useAuth;
