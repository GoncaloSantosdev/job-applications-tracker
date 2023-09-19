// React Router
import { Link } from "react-router-dom";
// React Icons
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDashboardContext } from "../screens/DashboardLayout";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { data } = useDashboardContext();

  return (
    <header className="bg-white py-6 px-8 flex justify-between items-center">
      <div className="cursor-pointer">
        <HiOutlineMenuAlt2 size={24} />
      </div>
      <div className="hidden md:block">
        <h3 className="text-lg">Welcome to Kanban 🙂</h3>
      </div>
      <div className="flex items-center gap-4">
        <Link to={"profile"} className="flex items-center gap-4">
          {data.firstName}
          {data.avatar ? (
            <img
              src={data.avatar}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          ) : (
            <FaUserCircle size={24} />
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
