import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/auth";
import { VenatanaEmergente } from "./VentanaEmergente";
import { Button } from "./Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Header.css';

export function Header() {

  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [ventanaDesplegada, setVentanaDesplegada] = useState(false); 
  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleMenuAction = () => {
    setMenuDesplegado(menuDesplegado == true ? false : true);
  };
  
  const handleClick = () => {
    if(auth.user != null) {
      navigate("/perfil");
    } else {
      navigate("/login");
    }
  };

  const finalizarSesión = () => {
    auth.logout();
    setVentanaDesplegada(false);
  };

  const continuarSesion = () => {
    setVentanaDesplegada(false);
  };

  const handleClickOption = (option) => {
    if(option.name == 'Iniciar sesión') {
      navigate('/login');
    } else if(option.name == 'Cerrar sesión') {
      setVentanaDesplegada(true);
      setMenuDesplegado(false);
    }
    else if(option.name == 'Artículos') {
      navigate('/principal');
      setMenuDesplegado(false);
    }
  }
  
  const optionsMenu = [];

  optionsMenu.push({
    name: "Novedades",
    to: "/principal",
    admin_permission: true,
    author_permission: false
  });
  optionsMenu.push({
    name: "Artículos",
    to: "/principal",
    admin_permission: false,
    author_permission: false
  });
  optionsMenu.push({
    name: "Autores",
    to: "/principal",
    admin_permission: true,
    author_permission: false
  });
  optionsMenu.push({
    name: "Iniciar sesión",
    to: "/principal",
    admin_permission: false,
    author_permission: false
  });
  optionsMenu.push({
    name: "Cerrar sesión",
    to: "/principal",
    admin_permission: true,
    author_permission: true
  });

  return(
    <>
      <VenatanaEmergente
      estado={ventanaDesplegada}
      cambiarEstado={setVentanaDesplegada}
      elementos={
        <section className="head-cerrar-sesion">
          <h3>Seguro que quieres cerrar tu sesión?</h3>
          <div>
            <Button handleClick={finalizarSesión} text="Continuar" />
            <Button handleClick={continuarSesion} text="Cancelar" />
          </div>
        </section>
      }>
      </VenatanaEmergente>
      <header className="hs">
        <section className="hs-logo">
          <HomeIcon 
          onClick={() => navigate("/principal")}
          className="hs-icon"
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
          { !menuDesplegado &&
            <>
              <div onClick={handleClick}>
                <AccountCircleIcon className="hs-icons-porfile"
                fontSize="large" />
                <span>Perfil</span>
              </div>
              <div onClick={handleMenuAction}>
                <MenuIcon className="hs-icons-menu"
                fontSize="large" />
                <span>Menú</span>
              </div>
            </>
          }
          {
            menuDesplegado &&
            <>
              <ul>
                {optionsMenu.map((option) => {
                  if((option.admin_permission || option.author_permission) && auth.user == null) return null;
                  else if((option.admin_permission && !option.author_permission) && auth.user.rol == 'autor') return null;
                  if(option.name == 'Iniciar sesión' && auth.user != null) return null;

                  return <li 
                  onClick={() => handleClickOption(option)}
                  key={option.name}>
                    {option.name}
                  </li>;
                })}
              </ul>
              <div onClick={handleMenuAction}>
                <MenuIcon className="hs-icons-menu"
                fontSize="large" />
              </div>
            </>
          }
        </section>
      </header>
    </>
  );
}