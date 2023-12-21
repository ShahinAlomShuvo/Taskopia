import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer/Drawer";

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen  lg:flex'>
      <Drawer></Drawer>
      <div className='flex-1  '>
        <div className='p-5 bg-base-200 min-h-full'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
