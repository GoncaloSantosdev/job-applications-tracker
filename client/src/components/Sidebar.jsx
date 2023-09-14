// React Icons
import { Link } from "react-router-dom";
// Data
import { navData } from "../utils/data";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="fixed w-[100px] md:w-[290px] flex flex-col border-r px-6 py-8 h-screen z-50 bg-white">
      <div>
        <h1>Logo</h1>
      </div>

      <div className="border-[0.5px] my-8" />

      <nav className="flex flex-col flex-grow gap-4">
        {navData.map((item, index) => (
          <li
            key={index}
            className={`list-none rounded px-4 py-3 hover:bg-blue-700 hover:text-white cursor-pointer transition-all ${
              item.isActive ? "bg-blue-700 text-white" : ""
            }`}
          >
            <Link to={item.path} className="flex items-center gap-4 text-sm">
              {item.icon && <item.icon size={20} />}
              <span className="hidden md:block">{item.title}</span>
            </Link>
          </li>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="text-blue-700 text-sm underline flex flex-col md:flex-row items-center gap-4">
          <AiOutlineLogout size={24} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
