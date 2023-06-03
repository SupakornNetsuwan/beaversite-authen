import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
// Pages
import App from "./pages/App.jsx";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./index.css";
// Authentication layout
import AuthLayout from "./layouts/AuthLayout.jsx";
// Components
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthLayout>
        <Navbar />
        <Dashboard />
      </AuthLayout>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <SignIn />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
