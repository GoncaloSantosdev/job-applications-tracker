// React Router
import { Link } from "react-router-dom";
// React Icons
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
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
          User
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
