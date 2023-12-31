import { NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const Drawer = () => {
  return (
    <div>
      <div className='drawer z-10 lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-start justify-start w-full'>
          {/* Page content here */}
          <label htmlFor='my-drawer-2' className='btn  btn-ghost lg:hidden'>
            <BsList />
          </label>
        </div>
        <div className='drawer-side '>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-60 md:w-80  bg-slate-400 lg:bg-white text-base-content space-y-2 min-h-screen'>
            <li>
              <NavLink
                to={"/dashboard/add-task"}
                className='flex gap-2 items-center'
              >
                <FaCirclePlus size={26} />
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/all-task"}
                className='flex gap-2 items-center'
              >
                <FaClipboardList size={26} />
                All Task
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className='flex gap-2 items-center'>
                <FaHome size={26} />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
