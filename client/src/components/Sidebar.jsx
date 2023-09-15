// React Icons
import { NavLink } from "react-router-dom";
// Data
import { navData } from "../utils/data";
import { AiOutlineLogout } from "react-icons/ai";
import { useDashboardContext } from "../screens/DashboardLayout";

const Sidebar = () => {
  const { logoutUser } = useDashboardContext();

  return (
    <div className="fixed w-[100px] md:w-[290px] flex flex-col border-r px-6 py-8 h-screen z-50 bg-white">
      <div>
        <h1>Logo</h1>
      </div>

      <div className="border-[0.5px] my-8" />

      <nav className="flex flex-col flex-grow gap-4">
        {navData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex items-center gap-4 rounded px-4 py-3 hover:bg-blue-700 hover:text-white transition-all"
            end
          >
            {item.icon && <item.icon size={20} />}
            <span className="hidden md:block">{item.title}</span>
          </NavLink>
        ))}
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
  );
};

export default Sidebar;
