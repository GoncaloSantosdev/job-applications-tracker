/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import { Header, Sidebar } from "../components";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "Maria" };

  const logoutUser = async () => {
    console.log("Logout User");
  };

  return (
    <DashboardContext.Provider value={{ user, logoutUser }}>
      <div className="flex bg-[#F4F7FE] min-h-screen">
        <Sidebar />

        <div className="flex flex-col w-full">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
