import React from "react";
import { getFromLocal,removeFromLocal } from "../functions/localStorage";

function Header() {
  const email = getFromLocal("email")

  const logout = () => {
    removeFromLocal("email")
    removeFromLocal("token")
    window.location = `/`;
  };

  return (
    <header className="header">
      <nav className="header__menu">
        <div className="header__menu--profile">
          <h6>{email}</h6>
        </div>
        <ul>
          <li>
            <a href="." style={{ cursor: "pointer" }} onClick={logout}>
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
