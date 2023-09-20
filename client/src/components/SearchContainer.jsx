// React Router
import { Form, Link, useSubmit } from "react-router-dom";
// Context
import { useAllJobsContext } from "../screens/AllJobsScreen";
// Components
import FormRow from "./FormRow";

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, status, type, sort } = searchValues;

  const submit = useSubmit();

  return (
    <Form className="mt-8 bg-white shadow rounded px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-4">
        <FormRow
          type="search"
          name="search"
          label="Search"
          placeholder="Search..."
          defaultValue={search}
          required={false}
          onChange={(e) => submit(e.currentTarget.form)}
        />
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
            defaultValue={status}
            onChange={(e) => submit(e.currentTarget.form)}
          >
            <option>all</option>
            <option>pending</option>
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
            defaultValue={type}
            onChange={(e) => submit(e.currentTarget.form)}
          >
            <option>all</option>
            <option>full-time</option>
            <option>part-time</option>
            <option>internship</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="sort"
            className="block mb-2 text-sm font-medium text-black"
          >
            Sort
          </label>
          <select
            name="sort"
            id="sort"
            className="w-full border rounded px-4 py-2 text-sm"
            defaultValue={sort}
            onChange={(e) => submit(e.currentTarget.form)}
          >
            <option>all</option>
            <option>newest</option>
            <option>oldest</option>
            <option>a-z</option>
            <option>z-a</option>
          </select>
        </div>
      </div>

      <div className="!mt-8">
        <Link to={"/dashboard/all-jobs"} className="btn-primary">
          Reset Search Values
        </Link>
      </div>
    </Form>
  );
};

export default SearchContainer;
