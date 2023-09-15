// React Router
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
// Components
import { FormRow, Title } from "../components";
// API
import customFetch from "../utils/customFetch";
import { JOBS_URL } from "../constants/api";
// React Toastify
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  // get input values
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // request
  try {
    await customFetch.post(`${JOBS_URL}`, data);
    toast.success("Job created successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AddJobScreen = () => {
  const data = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="py-8 px-8">
      <Title title="Add Job" />
      <Form method="post" className="space-y-6 mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <FormRow
            type="text"
            name="position"
            label="Position"
            placeholder="position"
            required
          />
          <FormRow
            type="text"
            name="company"
            label="Company"
            placeholder="company"
            required
          />
        </div>
        <FormRow
          type="text"
          name="location"
          label="Job Location"
          placeholder="location"
          required
        />

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-black"
            >
              Job Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full border rounded px-4 py-2 text-sm"
            >
              <option selected>pending</option>
              <option>interview</option>
              <option>declined</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-black"
            >
              Job Type
            </label>
            <select
              name="type"
              id="type"
              className="w-full border rounded px-4 py-2 text-sm"
            >
              <option selected>full-time</option>
              <option>part-time</option>
              <option>internship</option>
            </select>
          </div>
        </div>

        <div className="!mt-8">
          <button className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddJobScreen;
