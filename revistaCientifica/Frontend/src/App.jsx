import React from 'react';
import { Header } from './Components/Header.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';

export function App(){
    return (
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

            <Footer></Footer>
            </HashRouter>
        </section>
    );
}