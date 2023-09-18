/* eslint-disable react-refresh/only-export-components */
// React Router
import { redirect } from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { JOBS_URL } from "../constants/api";
// React Toastify
import { toast } from "react-toastify";

export const action = async ({ params }) => {
  const { id } = params;

  // request
  try {
    await customFetch.delete(`${JOBS_URL}/${id}`);
    toast.success("Job deleted successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
