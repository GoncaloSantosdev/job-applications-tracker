/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
// React Router
import { Link, redirect, useNavigation, Form } from "react-router-dom";
// Components
import { FormRow, Hero } from "../components";
// React Toastify
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";

export const action = async ({ request }) => {
  // get input values
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // request
  try {
    await customFetch.post(`${USERS_URL}/login`, data);
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="md:h-screen flex flex-col md:flex-row">
      <Hero />
      <div className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/2 py-8 md:py-0">
        <h3 className="text-2xl font-semibold">Sign In</h3>
        <Form method="post" className="space-y-4 md:space-y-6 w-full mt-6">
          <FormRow
            type="email"
            name="email"
            label="Email (admin@gmail.com)"
            placeholder="name@gmail.com"
            defaultValue="maria@gmail.com"
          />
          <FormRow
            type="password"
            name="password"
            label="Password (123456)"
            placeholder="••••••••"
            defaultValue="123456"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white rounded-full px-8 py-2 hover:bg-blue-800 transition text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Login"}
          </button>

          <p className="text-sm font-light text-black">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline">
              Register here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginScreen;
