import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/Home/Home'
import Lists from './components/Lists'
import Error from './components/Error'
import SideMenu from './components/SideMenu/SideMenu'

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
        <Route path="/users" element={<Lists />} />
        <Route path="/products" element={<Lists />} />
        <Route path="/categories" element={<Lists />} />
        <Route path="*" element={<Error />} /> {/* 404 Route */}
      </Routes>
      {/* <!-- End of Content Wrapper --> */}
    </div>
    </>
  )
}

export default App
