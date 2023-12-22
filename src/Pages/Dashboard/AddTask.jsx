import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/add-todo-task", data);
      if (res.status === 200) {
        reset();
        Swal.fire({
          title: "Congratulations!",
          text: "You Successfully Added a Task",
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
    <div>
      <h2 className='bg-[#003F77] text-3xl font-semibold text-center text-white py-6 rounded-t'>
        Add A New Task
      </h2>
      <div className='px-10 py-8 bg-white shadow-lg rounded-b rounded-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {/* task name input  */}
          <label className='form-control w-full '>
            <div className='label'>
              <span className='text-lg font-semibold'>Task Title</span>
            </div>
            <input
              {...register("title", { required: true })}
              id='title'
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full  bg-[#D6DFE7] border-none'
            />
            {errors.title && (
              <span className='text-red-600 mt-8'>Task Name is required</span>
            )}
          </label>
          <div className='grid md:grid-cols-2 gap-2'>
            {/* priority  */}
            <label className='form-control w-full'>
              <div className='label'>
                <span className='text-lg font-semibold'>Priority</span>
              </div>
              <select
                id='priority'
                {...register("priority", { required: true })}
                className='select select-bordered bg-[#D6DFE7] border-none'
              >
                <option>Pick one</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
              {errors.priority && (
                <span className='text-red-600 mt-8'>Priority is required</span>
              )}
            </label>
            {/*  deadline  */}
            <label className='form-control w-full '>
              <div className='label'>
                <span className='text-lg font-semibold'>Dead line</span>
              </div>
              <input
                id='deadline'
                {...register("deadline", { required: true })}
                type='date'
                placeholder='Type here'
                className='input input-bordered w-full  bg-[#D6DFE7] border-none'
              />
            </label>
            {errors.deadline && (
              <span className='text-red-600 mt-8'>Deadline is required</span>
            )}
          </div>
          {/* Description  */}
          <label className='form-control'>
            <div className='label'>
              <span className='text-lg font-semibold'>Description</span>
            </div>
            <textarea
              id='description'
              {...register("description", { required: true })}
              className='textarea textarea-bordered h-52 bg-[#D6DFE7] border-none'
              placeholder='Description...'
            ></textarea>
            {errors.description && (
              <span className='text-red-600 mt-8'>Description is required</span>
            )}
          </label>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='btn bg-[#043E73] text-white btn-primary border-none'
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
