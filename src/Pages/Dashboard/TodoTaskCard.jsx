import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
const TodoTaskCard = ({ tasks }) => {
  const { title, description, priority, deadline } = tasks;
  return (
    <div className='bg-white p-4 rounded space-y-3 border-b-4 border-yellow-400'>
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
          <button className='btn btn-accent bg-[#A0D9B4] border-none  '>
            <FaRegPenToSquare size={20} />
          </button>
          <button className='btn btn-error  text-white'>
            <FaRegTrashCan size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTaskCard;
