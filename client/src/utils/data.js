// React Icons
import { BiStats } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const navData = [
  {
    title: "Stats",
    path: "",
    icon: BiStats,
    isActive: true,
  },
  {
    title: "Jobs List",
    path: "",
    icon: CiViewList,
    isActive: false,
  },
  {
    title: "Add Job",
    path: "",
    icon: IoAddCircleOutline,
    isActive: false,
  },
  {
    title: "Profile",
    path: "",
    icon: AiOutlineUser,
    isActive: false,
  },
  {
    title: "Admin",
    path: "",
    icon: MdOutlineAdminPanelSettings,
    isActive: false,
    isAdmin: false,
  },
];
