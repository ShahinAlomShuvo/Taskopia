import { FaUsers } from "react-icons/fa6";

const OurUsers = () => {
  return (
    <div
      className='bg-cover bg-center relative '
      style={{
        backgroundImage:
          "url(https://projectsly.com/images/blog/task-management-dependencies.png?v=1670514978795773617)",
      }}
    >
      <div className='bg-black opacity-60 absolute inset-0'></div>
      <div className='relative z-10 p-6 flex flex-wrap gap-10 justify-evenly py-20 my-10'>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUsers className='text-6xl p-4 bg-[#937EFF] rounded-full' />
          <h2 className='text-3xl font-bold'>500+</h2>
          <p className='text-2xl font-bold'>Team Leaders</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUsers className='text-6xl p-4 bg-[#937EFF] rounded-full' />
          <h2 className='text-3xl font-bold'>700+</h2>
          <p className='text-2xl font-bold'>Entrepreneurs</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUsers className='text-6xl p-4 bg-[#937EFF] rounded-full' />
          <h2 className='text-3xl font-bold'>900+</h2>
          <p className='text-2xl font-bold'>Students</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUsers className='text-6xl p-4 bg-[#937EFF] rounded-full' />
          <h2 className='text-3xl font-bold'>1000+</h2>
          <p className='text-2xl font-bold'>Others</p>
        </div>
      </div>
    </div>
  );
};

export default OurUsers;
