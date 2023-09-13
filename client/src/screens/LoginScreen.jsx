/* eslint-disable react/no-unescaped-entities */
// React Router
import { Link } from "react-router-dom";
// Components
import { Hero } from "../components";

const LoginScreen = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row">
      <Hero />
      <div className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/2 py-8 md:py-0">
        <h3 className="text-2xl font-semibold">Sign In</h3>
        <form className="space-y-4 md:space-y-6 w-full mt-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-4 py-2 text-sm"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border rounded px-4 py-2 text-sm"
              required
            />
          </div>
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
