import React from 'react';
import { ArticleCard } from './Components/ArticleCard.jsx';
import { Header } from './Components/Header.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Footer} from './Components/Footer.jsx';
import { Principal } from './Pages/Principal.jsx';
import './Styles/index.css';

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
                <Route path="/principal" element={<Principal />} />
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
            </HashRouter>
        </section>
    );
}