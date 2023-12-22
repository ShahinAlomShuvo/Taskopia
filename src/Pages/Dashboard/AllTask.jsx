import { FadeLoader } from "react-spinners";
import useCompletedTask from "../../Hooks/useCompletedTask";
import useOngoingTask from "../../Hooks/useOngoingTask";
import useTodoTask from "../../Hooks/useTodoTask";
import CompletedTaskCard from "./CompletedTaskCard";
import OngoingTaskCard from "./OngoingTaskCard";
import TodoTaskCard from "./TodoTaskCard";
import TaskDashboardHeader from "./TaskDashboardHeader";

const AllTask = () => {
  const [todoTasks, isPending, refetch] = useTodoTask();
  const [ongoingTasks, , reload] = useOngoingTask();
  const [completedTasks, , completeTaskReload] = useCompletedTask();

  return (
    <>
      <TaskDashboardHeader></TaskDashboardHeader>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='grid md:grid-cols-3 gap-4'>
          {/* todo task  */}
          <div className='space-y-6'>
            <h2 className='text-center text-2xl font-semibold border-b-2 '>
              To-do
            </h2>

            {todoTasks.map((todo) => (
              <TodoTaskCard
                key={todo._id}
                tasks={todo}
                refetch={refetch}
              ></TodoTaskCard>
            ))}
          </div>
          {/* ongoing task  */}
          <div className='space-y-6'>
            <h2 className='text-center text-2xl font-semibold border-b-2 '>
              On Going
            </h2>
            {ongoingTasks.map((task) => (
              <OngoingTaskCard
                key={task._id}
                tasks={task}
                refetch={reload}
              ></OngoingTaskCard>
            ))}
          </div>
          {/* Completed task  */}
          <div className='space-y-6'>
            <h2 className='text-center text-2xl font-semibold border-b-2 '>
              Completed
            </h2>
            {completedTasks.map((task) => (
              <CompletedTaskCard
                key={task._id}
                tasks={task}
                refetch={completeTaskReload}
              ></CompletedTaskCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllTask;
