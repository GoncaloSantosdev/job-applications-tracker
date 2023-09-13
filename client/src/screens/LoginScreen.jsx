/* eslint-disable react/no-unescaped-entities */
// React Router
import { Link } from "react-router-dom";
// Components
import { FormRow, Hero } from "../components";

const LoginScreen = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row">
      <Hero />
      <div className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/2 py-8 md:py-0">
        <h3 className="text-2xl font-semibold">Sign In</h3>
        <form className="space-y-4 md:space-y-6 w-full mt-6">
          <FormRow
            type="email"
            name="email"
            label="Email"
            placeholder="name@gmail.com"
            defaultValue="maria@gmail.com"
          />
          <FormRow
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
            defaultValue="123456"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white rounded-full px-8 py-2 hover:bg-blue-800 transition text-sm"
          >
            Login
          </button>

          <p className="text-sm font-light text-black">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
