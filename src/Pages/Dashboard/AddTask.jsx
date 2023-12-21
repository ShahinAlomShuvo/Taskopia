const AddTask = () => {
  return (
    <div>
      <h2 className='bg-[#003F77] text-3xl font-semibold text-center text-white py-6 rounded-t'>
        Add A New Task
      </h2>
      <div className='px-10 py-8 bg-white shadow-lg rounded-b rounded-lg'>
        <form className='space-y-6'>
          {/* task name input  */}
          <label className='form-control w-full '>
            <div className='label'>
              <span className='text-lg font-semibold'>Task Title</span>
            </div>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full  bg-[#D6DFE7] border-none'
            />
          </label>
          <div className='grid md:grid-cols-2 gap-2'>
            {/* priority  */}
            <label className='form-control w-full'>
              <div className='label'>
                <span className='text-lg font-semibold'>Priority</span>
              </div>
              <select className='select select-bordered bg-[#D6DFE7] border-none'>
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
            {/*  deadline  */}
            <label className='form-control w-full '>
              <div className='label'>
                <span className='text-lg font-semibold'>Dead line</span>
              </div>
              <input
                type='date'
                placeholder='Type here'
                className='input input-bordered w-full  bg-[#D6DFE7] border-none'
              />
            </label>
          </div>
          {/* Description  */}
          <label className='form-control'>
            <div className='label'>
              <span className='text-lg font-semibold'>Description</span>
            </div>
            <textarea
              className='textarea textarea-bordered h-52 bg-[#D6DFE7] border-none'
              placeholder='Description...'
            ></textarea>
          </label>
          <div className='flex justify-center'>
            <button className='btn bg-[#043E73] text-white btn-primary border-none'>
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
