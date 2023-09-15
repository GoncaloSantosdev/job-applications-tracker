// React Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Screens
import {
  DashboardLayout,
  ErrorScreen,
  LoginScreen,
  RegisterScreen,
} from "./screens";
// Actions
import { action as registerAction } from "./screens/RegisterScreen";
import { action as loginAction } from "./screens/LoginScreen";
// Loaders
import { loader as dashboardLoader } from "./screens/DashboardLayout";

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
        element: <h1>Stats</h1>,
      },
      {
        path: "all-jobs",
        element: <h1>Stats</h1>,
      },
      {
        path: "profile",
        element: <h1>Stats</h1>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
