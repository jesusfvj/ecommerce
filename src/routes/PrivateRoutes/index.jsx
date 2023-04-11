import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/log-in" />;
};

export default PrivateRoutes;
