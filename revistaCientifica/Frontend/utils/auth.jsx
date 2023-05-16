import React from "react";
import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (usuario) => {
        setUser(usuario);
        navigate("/principal");
    };

    const logout = () => {
        setUser(null);
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