import React from "react";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Header.css';
import { useAuth } from "../../utils/auth";

export function Header() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleClick = () => {
    if(auth.user != null) {
      navigate("/perfil");
    } else {
      navigate("/login");
    }
  }

  return(
      <header className="hs">

        <section className="hs-logo">
          <HomeIcon className="hs-icon"
          sx={{ fontSize: 40 }} />
          <div>
            <strong>Revista UAM</strong>
            <span>Universidad Autónoma de Manizales</span>
          </div>
        </section>

        <section className="hs-navBar">
          <input type="text" placeholder="Buscar" className="hs-search-input"/>
        </section>

        <section className="hs-icons">
          <div onClick={handleClick}>
            <AccountCircleIcon className="hs-icons-porfile"
            fontSize="large" />
            <span>Perfil</span>
          </div>
          <div>
            <MenuIcon className="hs-icons-menu"
            fontSize="large" />
            <span>Menú</span>
          </div>
        </section>

      </header>
  );
}