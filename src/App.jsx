import React from "react"
import All from "./allone.jsx";
import About from "./about.jsx"
import Home from "./home.jsx"
import Contact from "./contact.jsx";
import Project from "./project.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import './App.css';
import Gallary from "./gallary.jsx";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<All/>,
      children:
      [
        {
          path:'/',
          element:<Home/>,
      
        },
        {
          path:'/about',
          element:<About/>,
      
        },
        {
          path:'/project',
          element:<Project/>,
      
        },
        {
          path:'/Contact',
          element:<Contact/>,
      
        },
        {
          path:'/gallary',
          element:<Gallary/>,
      
        },
        
       
      ],
    }
  ]
)

function App() {
  

  return <RouterProvider router={router} />
}

export default App