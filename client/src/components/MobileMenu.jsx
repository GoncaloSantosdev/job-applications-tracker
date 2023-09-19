/* eslint-disable react/prop-types */
// React Router
import { NavLink } from "react-router-dom";
// Context
import { useDashboardContext } from "../screens/DashboardLayout";
// Data
import { navData } from "../utils/data";
// React Icons
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ closeSidebar }) => {
  const { logoutUser, data } = useDashboardContext();
  return (
    <div className="px-4 py-8 h-full">
      <div className="flex items-center justify-between">
        <h1>Logo</h1>
        <AiOutlineClose onClick={closeSidebar} />
      </div>

      <div className="border-[0.5px] my-8" />

      <nav className="flex flex-col flex-grow gap-4">
        {navData.map((item, index) => {
          if (item.title === "Admin" && !data.isAdmin) {
            return null;
          }
          return (
            <NavLink
              key={index}
              to={item.path}
              className="flex items-center gap-4 rounded px-4 py-3 hover:bg-blue-700 hover:text-white transition-all"
              end
              onClick={closeSidebar}
            >
              {item.icon && <item.icon size={20} />}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-8 px-4">
        <button
          className="text-blue-700 text-sm underline flex items-center gap-4"
          onClick={logoutUser}
        >
          <AiOutlineLogout size={24} /> Logout
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
