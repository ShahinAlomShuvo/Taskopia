import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";
import { useEffect } from "react";

const UpdateTodoTask = () => {
  const { id } = useParams();
  const { isPending, data: singleTask = [] } = useQuery({
    queryKey: ["singleData", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/single-todo-contest/${id}`);
      return res.data;
    },
  });
  console.log(singleTask);

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosSecure.patch(`/update-todo-task/${id}`, data);
      if (res.status === 200) {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (!isPending && singleTask) {
      // Set default values only when singleTask is loaded and not empty
      setValue("title", singleTask.title || "");
      setValue("description", singleTask.description || "");
      setValue("priority", singleTask.priority || "");
      setValue("deadline", singleTask.deadline || "");
    }
  }, [isPending, singleTask, setValue]);

  return (
    <>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <h2 className='bg-[#003F77] text-3xl font-semibold text-center text-white py-6 rounded-t'>
            Update A Task
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
                  <span className='text-red-600 mt-8'>
                    Task Name is required
                  </span>
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
                    <span className='text-red-600 mt-8'>
                      Priority is required
                    </span>
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
                  <span className='text-red-600 mt-8'>
                    Deadline is required
                  </span>
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
                  <span className='text-red-600 mt-8'>
                    Description is required
                  </span>
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
      )}
    </>
  );
};

export default UpdateTodoTask;
