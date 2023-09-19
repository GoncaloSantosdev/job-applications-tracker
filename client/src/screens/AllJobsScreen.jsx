/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
// React Router
import { Link, useLoaderData } from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { JOBS_URL } from "../constants/api";
// Components
import { JobCard, Message, Title } from "../components";
// React Toastify
import { toast } from "react-toastify";

const AllJobsContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get(`${JOBS_URL}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AllJobsScreen = () => {
  const data = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data }}>
      <div className="py-8 px-8">
        <Title title="All Jobs" />

        <div>Filter Jobs</div>

        {data.length === 0 ? (
          <div className="mt-20">
            <Message variant="danger">
              No Jobs to display 😕{" "}
              <Link
                to={"/dashboard/add-job"}
                className="underline font-semibold"
              >
                Add Jobs
              </Link>
            </Message>
          </div>
        ) : (
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {data.map((item) => (
              <div key={item._id} className="bg-white rounded p-6 shadow">
                <JobCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobsScreen;