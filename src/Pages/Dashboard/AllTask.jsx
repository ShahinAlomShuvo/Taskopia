const AllTask = () => {
  return (
    <div className='grid md:grid-cols-3 gap-4'>
      <div className='space-y-6'>
        <h2 className='text-center text-2xl font-semibold border-b-2 '>
          To-do
        </h2>
        <div className='bg-white p-4 rounded space-y-3'>
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
        <div className='bg-white p-4 rounded space-y-3'>
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
      <div className='space-y-6'>
        <h2 className='text-center text-2xl font-semibold border-b-2 '>
          On Going
        </h2>
        <div className='bg-white p-4 rounded space-y-3'>
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
