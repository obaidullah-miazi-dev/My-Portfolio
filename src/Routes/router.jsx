// src/Routes/Router.jsx
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails"; 

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home 
      },
      {
        path: "project/:slug",       
        Component: ProjectDetails      
      }
    ]
  }
]);