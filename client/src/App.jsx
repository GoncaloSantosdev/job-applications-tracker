// React Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Screens
import {
  AddJobScreen,
  AdminScreen,
  AllJobsScreen,
  DashboardLayout,
  EditJobScreen,
  ErrorScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
} from "./screens";
// Actions
import { action as registerAction } from "./screens/RegisterScreen";
import { action as loginAction } from "./screens/LoginScreen";
import { action as addJobAction } from "./screens/AddJobScreen";
import { action as editJobAction } from "./screens/EditJobScreen";
import { action as deleteJobAction } from "./screens/DeleteJobScreen";
import { action as profileAction } from "./screens/ProfileScreen";
// Loaders
import { loader as dashboardLoader } from "./screens/DashboardLayout";
import { loader as listJobsLoader } from "./screens/AllJobsScreen";
import { loader as getJobLoader } from "./screens/EditJobScreen";
import { loader as adminLoader } from "./screens/AdminScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
    action: loginAction,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
    action: registerAction,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    loader: dashboardLoader,
    children: [
      {
        element: <h1>Stats</h1>,
        index: true,
      },
      {
        path: "add-job",
        element: <AddJobScreen />,
        action: addJobAction,
      },
      {
        path: "all-jobs",
        element: <AllJobsScreen />,
        loader: listJobsLoader,
      },
      {
        path: "edit-job/:id",
        element: <EditJobScreen />,
        loader: getJobLoader,
        action: editJobAction,
      },
      {
        path: "delete-job/:id",
        action: deleteJobAction,
      },
      {
        path: "profile",
        element: <ProfileScreen />,
        action: profileAction,
      },
      {
        path: "admin",
        element: <AdminScreen />,
        loader: adminLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
