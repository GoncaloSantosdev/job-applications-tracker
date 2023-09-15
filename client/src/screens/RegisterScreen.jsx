/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
// React Router
import { Form, redirect, useNavigation, Link } from "react-router-dom";
// Components
import { FormRow, Hero } from "../components";
// API
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";
// React Toastify
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  // get input values
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // request
  try {
    await customFetch.post(`${USERS_URL}/register`, data);
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const RegisterScreen = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="md:h-screen flex flex-col md:flex-row">
      <Hero />
      <div className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/2 py-8 md:py-0">
        <h3 className="text-2xl font-semibold">Sign Up</h3>
        <Form method="post" className="space-y-4 md:space-y-6 w-full mt-6">
          <div className="flex justify-between gap-4">
            <FormRow
              type="text"
              name="firstName"
              label="First Name"
              placeholder="first name"
              defaultValue="Maria"
              required
            />
            <FormRow
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="last name"
              defaultValue="Menegheli"
              required
            />
          </div>
          <div className="flex justify-between gap-4">
            <FormRow
              type="text"
              name="location"
              label="Location"
              placeholder="location"
              defaultValue="New York City"
              required
            />
            <FormRow
              type="email"
              name="email"
              label="Email"
              placeholder="name@gmail.com"
              defaultValue="maria@gmail.com"
              required
            />
          </div>
          <FormRow
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
            defaultValue="123456"
            required
          />
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>

          <p className="text-sm font-light text-black">
            Already have an account?{" "}
            <Link to={"/"} className="font-medium underline">
              Login Here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterScreen;
