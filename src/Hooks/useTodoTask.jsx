import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTodoTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: todoTasks = [],
  } = useQuery({
    queryKey: [user?.email, "todoTasks"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/get-todo-task/${user?.email}`)
      );
      return res.data;
    },
  });

  return [todoTasks, isPending, refetch];
};

export default useTodoTask;
