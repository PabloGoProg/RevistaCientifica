import React from "react";
import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (usuario) => {
        try {
            const rol = await axios.get(`http://localhost:3000/editores/${usuario.id_usuario}`);
            rol.data > 0 ? usuario.rol = 'admin' : usuario.rol = 'autor'; 
            setUser(usuario);
            navigate("/principal");
        } catch (error) {
            console.log(error)
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    }

    const auth = {user, login, logout};

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function PrrotectedRoute({ children }) {
    const auth = useAuth();
    if(!auth.user) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}

export { AuthProvider, useAuth };