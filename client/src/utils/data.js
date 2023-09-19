// React Icons
import { BiStats } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const navData = [
  {
    title: "Stats",
    path: ".",
    icon: BiStats,
  },
  {
    title: "All Jobs",
    path: "all-jobs",
    icon: CiViewList,
  },
  {
    title: "Add Job",
    path: "add-job",
    icon: IoAddCircleOutline,
  },
  {
    title: "Profile",
    path: "profile",
    icon: AiOutlineUser,
  },
  {
    title: "Admin",
    path: "admin",
    icon: MdOutlineAdminPanelSettings,
  },
];
