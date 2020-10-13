import React from "react";
import { view } from "@risingstack/react-easy-state";
import state from "../../store.js";
import { NavLink } from 'react-router-dom';
import toggleMenu from '../../action/toggleMenu.js';
import "./Drawer.scss";
function Drawer() {
  return (
    <div
      className={
        state.burgerMenu.active ? "menu-sidebar show" : "menu-sidebar"
      }
    >
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink to="/" className="menu__link" onClick={toggleMenu}>
            Home
            </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/About" className="menu__link" onClick={toggleMenu}>
            About
            </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Contact" className="menu__link" onClick={toggleMenu}>
            Contact
            </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default view(Drawer);