import logo from "../img/logo_m.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header__top container-sm text-light shadow p-3 mb-4 bg-black rounded">
      <div className="container__top d-flex justify-content-between align-items-center h-100">
        <div className="nav__title">
          <img src={logo} className="logo__top" alt="logo" />
          <NavLink to="/" className="link">
            <h2 className="nav__title__text">Greed Sexshop</h2>
          </NavLink>
        </div>
        <nav className="nav__menu d-flex">
          <ul className="nav__menu__all d-flex justify-content-around gap-4 list-unstyled p-2">
            <li className="menu__item">
              <NavLink to="/category/sextoys" className="link">
                Sex Toys
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/category/cosmetica" className="link">
                Cosmética y geles
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/category/lenceria" className="link">
                Lencería
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/category/bondage" className="link">
                Bondaje
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav__login d-flex ">
          <ul className="nav__menu__all d-flex gap-3 list-unstyled justify-content-around align-items-center">
            <li className="menu__item">
              <NavLink to="/registrar" className="link">
                Registrarse
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="ingresar" className="link">
                Iniciar sesión
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/carrito"
                className="d-flex m-1 p-2 h-50 link"
                data-toggle="tooltip"
                title="Tienes 3 productos en el carrito."
              >
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
