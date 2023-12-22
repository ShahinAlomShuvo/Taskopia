import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const TaskDashboardHeader = () => {
  const { user, logOutUser } = useAuth();
  return (
    <div className='flex justify-between pt-5 pb-10 items-center'>
      <h2 className='text-base font-semibold md:text-3xl md:font-bold'>
        Task Management
      </h2>
      <div className=' flex items-center gap-2'>
        <div className='text-right'>
          <h2 className='text-base font-medium md:text-lg md:font-semibold'>
            {user?.displayName}
          </h2>
          <Link to={"/"} className='btn btn-sm' onClick={() => logOutUser()}>
            Logout
          </Link>
        </div>
        <div className='avatar'>
          <div className='w-12 md:w-16 rounded-full'>
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboardHeader;
