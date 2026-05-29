import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComponent from "./components/ParamComponent";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mocktest",
        element: <MockTest />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComponent />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
