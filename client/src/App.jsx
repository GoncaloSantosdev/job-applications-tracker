// React Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Screens
import {
  DashboardLayout,
  ErrorScreen,
  LoginScreen,
  RegisterScreen,
} from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
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
