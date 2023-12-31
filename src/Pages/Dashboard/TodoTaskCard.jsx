import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const TodoTaskCard = ({ tasks, refetch }) => {
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

  const handleClick = async (id) => {
    try {
      const res = await axiosSecure.patch(`/update-todo-category/${id}`);
      if (res.status === 200) {
        refetch();
        window.location.reload();
        Swal.fire({
          title: "Congratulations!",
          text: "You Successfully Update a Task",
          icon: "success",
        });
      }
      console.log(res);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
      console.log(err.message);
    }
  };

  return (
    <div className='bg-white p-4 rounded space-y-3 border-b-4 border-yellow-400'>
      <div className='flex justify-between gap-2'>
        <h2 className='bg-[#A0D9B4] px-4 md:px-2 lg:px-4 py-2 rounded  font-semibold md:font-base lg:font-semibold'>
          {title}
        </h2>
        <p className='bg-pink-500 md:px-2 lg:px-4 px-4 py-2 rounded text-white'>
          {priority}
        </p>
      </div>
      <p className='text-gray-600'>{description}</p>
      <div className='flex justify-between items-center'>
        <p>{deadline}</p>
        <div className='flex gap-2'>
          <Link
            to={`/dashboard/update-task/${_id}`}
            className='btn btn-accent bg-[#A0D9B4] border-none  text-xl md:text-base lg:text-xl'
          >
            <FaRegPenToSquare />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className='btn btn-error  text-white text-xl md:text-sm lg:text-xl'
          >
            <FaRegTrashCan />
          </button>
        </div>
      </div>
      <button
        onClick={() => handleClick(_id)}
        className='btn  btn-block bg-[#A0D9B4]'
      >
        Mark As Ongoing
      </button>
    </div>
  );
};

export default TodoTaskCard;
