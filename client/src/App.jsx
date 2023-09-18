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
  RegisterScreen,
} from "./screens";
// Actions
import { action as registerAction } from "./screens/RegisterScreen";
import { action as loginAction } from "./screens/LoginScreen";
import { action as addJobAction } from "./screens/AddJobScreen";
import { action as editJobAction } from "./screens/EditJobScreen";
// Loaders
import { loader as dashboardLoader } from "./screens/DashboardLayout";
import { loader as listJobsLoader } from "./screens/AllJobsScreen";
import { loader as getJobLoader } from "./screens/EditJobScreen";

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
        path: "profile",
        element: <h1>Stats</h1>,
      },
      {
        path: "admin",
        element: <AdminScreen />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
