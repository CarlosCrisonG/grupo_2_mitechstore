import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/Home/Home'
import Table from './components/Table/Table'
import Error from './components/Error'
import SideMenu from './components/SideMenu/SideMenu'
import Users from "./components/Users/Users"
import Products from "./components/Products/Products"
import Categories from "./components/Categories/Categories"

function App() {
  return (
    <>
      <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <SideMenu />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} /> {/* 404 Route */}
      </Routes>
      {/* <!-- End of Content Wrapper --> */}
    </div>
    </>
  )
}

export default App
