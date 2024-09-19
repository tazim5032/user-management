import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Register from "./Pages/SignUp/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import ShowTable from "./Pages/ManagerUser/ShowTable.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/manage-user",
        element: <ShowTable></ShowTable>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Register></Register>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </>
);
