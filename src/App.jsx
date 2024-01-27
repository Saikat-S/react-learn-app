import { useState } from 'react'
import Post from './components/post/Post'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import List from './pages/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/van-list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
