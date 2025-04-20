import React from "react"
import All from "./allone.jsx";
import About from "./pakges.jsx"
import Home from "./serviices.jsx"
import Contact from "./wroking.jsx";
import Project from "./about1.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import './App.css';
import Gallary from "./websit.jsx";
import Order from "./orderpage.jsx";
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
        {
          path:'/order',
          element:<Order/>,
      
        },
        
       
      ],
    }
  ]
)

function App() {
  

  return <RouterProvider router={router} />
}

export default App