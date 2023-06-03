import { useContext } from "react";
// Context
import AuthContext from "../contexts/AuthContext";

const useAuthen = () => {
  return useContext(AuthContext);
};

export default useAuthen;
