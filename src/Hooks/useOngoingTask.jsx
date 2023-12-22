import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOngoingTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: ongoingTasks = [],
  } = useQuery({
    queryKey: [user?.email, "ongoingTasks"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/get-ongoing-task/${user?.email}`)
      );
      return res.data;
    },
  });

  return [ongoingTasks, isPending, refetch];
};

export default useOngoingTask;
