/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
// React Router
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
// Components
import { Header, MobileMenu, Sidebar } from "../components";
// API
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";
// React Toastify
import { toast } from "react-toastify";

const DashboardContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get(`${USERS_URL}/profile`);
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardLayout = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get(`${USERS_URL}/logout`);
    toast.success("See you soon...");
  };

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <DashboardContext.Provider value={{ data, logoutUser }}>
      <div className="flex bg-[#F4F7FE] min-h-screen relative w-full">
        {sidebar ? (
          <>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 z-40 md:hidden"></div>
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center h-screen items-center z-50 md:hidden">
              <div className="bg-white shadow rounded w-[80%] h-[80vh]">
                <MobileMenu closeSidebar={closeSidebar} />
              </div>
            </div>
          </>
        ) : (
          <Sidebar />
        )}

        <div className="flex flex-col w-full md:ml-[240px] overflow-hidden">
          <Header handleSidebar={handleSidebar} />
          <main>
            <Outlet context={{ data }} />
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
