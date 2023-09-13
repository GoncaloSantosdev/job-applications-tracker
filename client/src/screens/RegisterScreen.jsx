/* eslint-disable react/no-unescaped-entities */
// React Router
import { Link } from "react-router-dom";
// Components
import { FormRow, Hero } from "../components";

const RegisterScreen = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row">
      <Hero />
      <div className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/2 py-8 md:py-0">
        <h3 className="text-2xl font-semibold">Sign Up</h3>
        <form className="space-y-4 md:space-y-6 w-full mt-6">
          <div className="flex justify-between gap-4">
            <FormRow
              type="text"
              name="firstname"
              label="First Name"
              placeholder="first name"
            />
            <FormRow
              type="text"
              name="lastname"
              label="Last Name"
              placeholder="last name"
            />
          </div>
          <div className="flex justify-between gap-4">
            <FormRow
              type="text"
              name="location"
              label="Location"
              placeholder="location"
            />
            <FormRow
              type="email"
              name="email"
              label="Email"
              placeholder="name@gmail.com"
            />
          </div>
          <FormRow
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-full px-8 py-2 hover:bg-blue-800 transition text-sm"
          >
            Sign Up
          </button>

          <p className="text-sm font-light text-black">
            Already have an account?{" "}
            <Link to={"/"} className="font-medium underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
