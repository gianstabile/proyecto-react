import logo from "../img/logo_m.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header__top container-sm text-light shadow p-3 mb-4 bg-black rounded">
      <div className="container__top d-flex justify-content-between align-items-center h-100">
        <div className="nav__title">
          <img src={logo} className="logo__top" alt="logo" />
          <h2 className="nav__title__text">Greed Sexshop</h2>
        </div>
        <nav className="nav__menu d-flex">
          <ul className="nav__menu__all d-flex justify-content-around gap-4 list-unstyled p-2">
            <li className="menu__item">
              <a href="http://www.google.com/">Productos</a>
            </li>
            <li className="menu__item">
              <a href="http://www.google.com/">Venta Mayorista</a>
            </li>
            <li className="menu__item">
              <a href="http://www.google.com/">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="nav__login d-flex justify-content-around align-items-center">
          <ul className="nav__menu__all d-flex gap-3 list-unstyled">
            <li className="menu__item">
              <a href="http://www.google.com/">Registrarse</a>
            </li>
            <li className="menu__item">
              <a href="http://www.google.com/">Iniciar sesión</a>
            </li>
          </ul>
          <div
            className="d-flex m-1 p-2 h-50"
            data-toggle="tooltip"
            title="Tienes 3 productos en el carrito."
          >
            <button className="btn btn-dark">
              <CartWidget />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
