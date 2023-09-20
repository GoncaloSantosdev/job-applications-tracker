/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
// React Router
import { Link, useLoaderData } from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { JOBS_URL } from "../constants/api";
// Components
import {
  JobCard,
  Message,
  PageBtn,
  SearchContainer,
  Title,
} from "../components";
// React Toastify
import { toast } from "react-toastify";

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get(`${JOBS_URL}`, {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AllJobsScreen = () => {
  const { data, searchValues } = useLoaderData();

  const { jobs, totalJobs, numOfPages } = data;

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <div className="py-8 px-8">
        <Title title="All Jobs" />

        <SearchContainer />

        {data.jobs.length === 0 ? (
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
          <div className="mt-12">
            <h3 className="text-lg font-semibold">
              {totalJobs} Job{jobs.length > 1 && "s"} Found
            </h3>
            <div className="mt-4 grid lg:grid-cols-2 gap-4">
              {data.jobs.map((item) => (
                <div key={item._id} className="bg-white rounded p-6 shadow">
                  <JobCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
        {numOfPages > 1 && <PageBtn />}
      </div>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobsScreen;
