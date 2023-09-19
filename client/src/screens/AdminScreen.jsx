// React Router
import { useLoaderData } from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";
// Components
import { Title } from "../components";
// React Toastify
import { toast } from "react-toastify";
// React Icons
import { FaUsers } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

export const loader = async () => {
  try {
    const { data } = await customFetch.get(`${USERS_URL}/admin`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AdminScreen = () => {
  const { users, jobs } = useLoaderData();

  return (
    <div className="py-8 px-8">
      <Title title="Admin Stats" />

      <div className="mt-8 flex gap-8">
        <div className="bg-white text-black hover:bg-blue-700 hover:text-white transition-all shadow rounded px-6 py-6 flex items-center justify-between gap-24">
          <div>
            <p className="text-xl font-semibold">{users}</p>
            <p className="text-lg">Current Users</p>
          </div>
          <FaUsers size={24} />
        </div>
        <div className="bg-white text-black hover:bg-blue-700 hover:text-white transition-all shadow rounded px-6 py-6 flex items-center justify-between gap-24">
          <div>
            <p className="text-xl font-semibold">{jobs}</p>
            <p className="text-lg">Total Jobs</p>
          </div>
          <BsPersonWorkspace size={24} />
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
