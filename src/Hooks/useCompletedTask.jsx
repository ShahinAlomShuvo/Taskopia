import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCompletedTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: completedTasks = [],
  } = useQuery({
    queryKey: [user?.email, "completedTasks"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/get-completed-task/${user?.email}`)
      );
      return res.data;
    },
  });

  return [completedTasks, isPending, refetch];
};

export default useCompletedTask;
