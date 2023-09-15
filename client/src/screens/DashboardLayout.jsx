/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
// React Router
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
// Components
import { Header, Sidebar } from "../components";
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

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get(`${USERS_URL}/logout`);
    toast.success("See you soon...");
  };

  return (
    <DashboardContext.Provider value={{ data, logoutUser }}>
      <div className="flex bg-[#F4F7FE] min-h-screen">
        <Sidebar />

        <div className="flex flex-col w-full ml-[100px] md:ml-[290px]">
          <Header />
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
