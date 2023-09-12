import React from 'react'
import NavBar from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import {Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ProductList/>} />
        <Route path="/cosmetics" element={<h1>cosmetics</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
