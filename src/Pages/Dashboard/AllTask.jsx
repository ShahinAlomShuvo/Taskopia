import useOngoingTask from "../../Hooks/useOngoingTask";
import useTodoTask from "../../Hooks/useTodoTask";
import OngoingTaskCard from "./OngoingTaskCard";
import TodoTaskCard from "./TodoTaskCard";

const AllTask = () => {
  const [todoTasks, isPending, refetch] = useTodoTask();
  const [ongoingTasks] = useOngoingTask();
  console.log(ongoingTasks);

  return (
    <div className='grid md:grid-cols-3 gap-4'>
      {/* todo task  */}
      <div className='space-y-6'>
        <h2 className='text-center text-2xl font-semibold border-b-2 '>
          To-do
        </h2>

        {todoTasks.map((todo) => (
          <TodoTaskCard key={todo._id} tasks={todo}></TodoTaskCard>
        ))}
      </div>
      {/* ongoing task  */}
      <div className='space-y-6'>
        <h2 className='text-center text-2xl font-semibold border-b-2 '>
          On Going
        </h2>
        {ongoingTasks.map((task) => (
          <OngoingTaskCard key={task._id} tasks={task}></OngoingTaskCard>
        ))}
      </div>
      {/* Completed task  */}
      <div className='space-y-6'>
        <h2 className='text-center text-2xl font-semibold border-b-2 '>
          Completed
        </h2>
        <div className='bg-white p-4 rounded space-y-3 border-b-4 border-green-700 '>
          <div className='flex justify-between'>
            <h2 className='bg-[#A0D9B4] px-4 py-2 rounded'>Website Design</h2>
            <p className='bg-primary px-4 py-2 rounded text-white'>High</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            commodi ea sapiente est
          </p>
          <div className='flex justify-between'>
            <p>31-12-2023</p>
            <button className='btn'>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
