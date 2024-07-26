import { useState } from 'react'
import './App.css'
import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"
import Home from "./components/home"
import Contact from "./components/contact"
import About from "./components/about"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const App=()=> {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Header /><Home/></>
    },
    {
      path:"/contact",
      element:<><Header /><Contact/></>
    },
    {
      path:"/about",
      element:<><Header /><About/></>
    }
  ])
  return(
    <div>
    <RouterProvider router={router}/>
    <Footer />
    </div>
  )
}

export default App
