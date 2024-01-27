import { useState } from 'react'
import Post from './components/post/Post'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
