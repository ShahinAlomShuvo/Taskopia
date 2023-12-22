import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const OngoingTaskCard = ({ tasks, refetch }) => {
  const { title, description, priority, deadline, _id } = tasks;

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/todo-task/${id}`).then((data) => {
          if (data.status === 200) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Contest has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className='bg-white p-4 rounded space-y-3 border-b-4 border-[#FFAA8A]'>
      <div className='flex justify-between gap-2'>
        <h2 className='bg-[#A0D9B4] px-4 py-2 rounded font-semibold'>
          {title}
        </h2>
        <p className='bg-pink-500  px-4 py-2 rounded text-white'>{priority}</p>
      </div>
      <p className='text-gray-600'>{description}</p>
      <div className='flex justify-between items-center'>
        <p>{deadline}</p>
        <div className='flex gap-2'>
          <Link
            to={`/dashboard/update-task/${_id}`}
            className='btn btn-accent bg-[#A0D9B4] border-none  '
          >
            <FaRegPenToSquare size={20} />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className='btn btn-error  text-white'
          >
            <FaRegTrashCan size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngoingTaskCard;
