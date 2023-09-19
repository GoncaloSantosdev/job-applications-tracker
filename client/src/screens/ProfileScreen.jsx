/* eslint-disable react-refresh/only-export-components */
// React Router
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
// API
import customFetch from "../utils/customFetch";
import { USERS_URL } from "../constants/api";
// Components
import { FormRow, Title } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");

  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.put(`${USERS_URL}/profile`, formData);
    toast.success("Profile updated successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ProfileScreen = () => {
  const { data } = useOutletContext();
  const { firstName, lastName, email, location } = data;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="py-8 px-8">
      <Title title="User Profile" />
      <Form
        method="post"
        className="space-y-6 mt-8"
        encType="multipart/form-data"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <FormRow
            type="text"
            name="firstName"
            label="First Name"
            placeholder="first name"
            defaultValue={firstName}
            required
          />
          <FormRow
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="last name"
            defaultValue={lastName}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="avatar" className="text-sm">
            Select an image file
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            className="text-sm"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <FormRow
              type="text"
              name="location"
              label="Location"
              placeholder="location"
              defaultValue={location}
              required
            />
          </div>
          <div className="w-full">
            <FormRow
              type="email"
              name="email"
              label="Email"
              placeholder="name@gmail.com"
              defaultValue={email}
              required
            />
          </div>
        </div>

        <div className="!mt-8">
          <button className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileScreen;
