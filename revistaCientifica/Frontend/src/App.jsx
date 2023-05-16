import React from 'react';
import { Header } from './Components/Header.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import { Perfil } from './Pages/Perfil.jsx';
import { Principal } from './Pages/Principal.jsx';
import { AuthProvider, PrrotectedRoute } from '../utils/auth.jsx';
import './Styles/index.css';

export function App(){
    return (
        <section className='mainContent'>
            <HashRouter>
                <AuthProvider>
                    <Header/>

                    <Routes>
                        <Route path="/" element={<Principal />} /> 
                        {/* Protege la ruta de perfil de algun ingreso a traves del enrutamiento del navegador*/}
                        <Route path="/perfil" 
                        element={
                            <PrrotectedRoute>
                                <Perfil />
                            </PrrotectedRoute>
                        } />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/principal" element={<Principal />} />
                        <Route path="*" element={<p>Not found</p>} />
                    </Routes>
                    <Footer/>
                </AuthProvider>
            </HashRouter>
        </section>
    );
}