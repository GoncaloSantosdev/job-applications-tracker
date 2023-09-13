// React Router
import { Outlet } from "react-router-dom";
// Components
import { Header, Sidebar } from "../components";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#F4F7FE] min-h-screen">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
