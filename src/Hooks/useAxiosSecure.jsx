import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://task-management-server-lake.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const status = err.response.status;
      console.log("from interceptor", status);

      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
