import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FadeLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center items-center py-40'>
        <FadeLoader color='#36d7b7' />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
