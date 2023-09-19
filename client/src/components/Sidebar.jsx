// React Icons
import { NavLink } from "react-router-dom";
// Data
import { navData } from "../utils/data";
import { useDashboardContext } from "../screens/DashboardLayout";
// React Icons
import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";

const Sidebar = () => {
  const { logoutUser, data } = useDashboardContext();

  return (
    <>
      <div className="hidden fixed w-[100px] md:w-[240px] md:flex flex-col border-r px-6 py-8 h-screen z-50 bg-white">
        <div className="flex items-center gap-4">
          <BsPersonWorkspace size={24} />
          <h2>CareerSync</h2>
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
              >
                {item.icon && <item.icon size={20} />}
                <span className="hidden md:block">{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto">
          <button
            className="text-blue-700 text-sm underline flex flex-col md:flex-row items-center gap-4"
            onClick={logoutUser}
          >
            <AiOutlineLogout size={24} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
