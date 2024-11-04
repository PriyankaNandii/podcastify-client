import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useAuth = () => {
  const auth = useContext(AuthContext);
  console.log(auth, "form auth");
  return auth;
};

export default useAuth;
