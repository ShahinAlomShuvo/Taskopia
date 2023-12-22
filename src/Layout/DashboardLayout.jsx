import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer/Drawer";

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen  lg:flex'>
      <div className='min-h-screen'>
        <Drawer></Drawer>
      </div>
      <div className='flex-1  '>
        <div className='p-5 bg-base-200 '>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
