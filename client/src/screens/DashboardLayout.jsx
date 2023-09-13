import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div>Sidebar</div>
      <div>Navbar</div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
