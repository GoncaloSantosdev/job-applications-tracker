// React Router
import { useLoaderData } from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";
// Components
import { StatsCard, Title } from "../components";
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
        <StatsCard
          icon={<FaUsers size={24} />}
          number={users}
          title="Current Users"
        />
        <StatsCard
          icon={<BsPersonWorkspace size={24} />}
          number={jobs}
          title="Total Jobs"
        />
      </div>
    </div>
  );
};

export default AdminScreen;
