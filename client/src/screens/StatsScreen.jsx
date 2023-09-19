/* eslint-disable react-refresh/only-export-components */
// React Router
import { useLoaderData } from "react-router-dom";
// Components
import { ChartsContainer, StatsCard, Title } from "../components";
// API
import customFetch from "../utils/customFetch";
import { JOBS_URL } from "../constants/api";
// React Toastify
import { toast } from "react-toastify";
// React Icons
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineSmsFailed, MdPendingActions } from "react-icons/md";

export const loader = async () => {
  try {
    const { data } = await customFetch.get(`${JOBS_URL}/stats`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const StatsScreen = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <div className="py-8 px-8">
      <Title title="Your Stats" />

      <div className="mt-8 flex flex-col lg:flex-row gap-4">
        <StatsCard
          icon={<MdPendingActions size={24} />}
          number={defaultStats.pending}
          title="Pending"
        />
        <StatsCard
          icon={<AiOutlineSchedule size={24} />}
          number={defaultStats.interview}
          title="Interview"
        />
        <StatsCard
          icon={<MdOutlineSmsFailed size={24} />}
          number={defaultStats.declined}
          title="Declined"
        />
      </div>

      <div className="mt-12">
        {monthlyApplications?.length >= 1 && (
          <ChartsContainer data={monthlyApplications} />
        )}
      </div>
    </div>
  );
};

export default StatsScreen;
