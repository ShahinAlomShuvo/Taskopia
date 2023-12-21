import banner from "../../assets/Images/banner.jpg";
const Banner = () => {
  return (
    <div className='flex flex-wrap gap-4 container mx-auto py-10 items-center'>
      <div className='md:w-1/3 px-4 md:pl-4 xl:px-0 space-y-2'>
        <h2 className='text-3xl font-bold md:text-xl md:font-semibold lg:text-3xl lg:font-bold'>
          Master Your Productivity with Taskopia
        </h2>
        <p className='text-gray-500 md:text-sm lg:text-base'>
          Welcome to Taskopia - the ultimate hub for seamless task management.
          Elevate your productivity effortlessly. From organizing to achieving,
          Taskopia simplifies your workflow, ensuring every task is a step
          towards your success.
        </p>
        <button className='btn bg-[#917FFF] font-semibold text-white hover:text-black hover:bg-[#76A6FD]'>
          Lets Explore
        </button>
      </div>
      <div className='flex-1'>
        <img className='w-full' src={banner} alt='banner image' />
      </div>
    </div>
  );
};

export default Banner;
