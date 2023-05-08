import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Components/Header.jsx'
import { Login } from './Pages/Login.jsx'
import { Register } from './Pages/Register.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom';
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <section className='mainContent'>
    <HashRouter>
    <Header 
      porfileTarget="/register"
    />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>

      <span>footer</span>
    </HashRouter>
  </section>
)
