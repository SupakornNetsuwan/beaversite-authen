import useAuthen from "../hooks/useAuthen";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { user } = useAuthen();

  if (!user.isAuthen) {
    return <Navigate to="/signin" replace={true} />;
  }

  return <>{children}</>;
};

export default AuthLayout;
