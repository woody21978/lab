import React from "react";
import { view } from "@risingstack/react-easy-state";
import state from "../../store.js";
import toggleMenu from '../../action/toggleMenu.js';
import "./Burger.scss";


function Burger() {
  return (
    <div
      className={
        state.burgerMenu.active
          ? "menu-burger menu-burger--active"
          : "menu-burger"
      }
      onClick={toggleMenu}
    >
      <span></span>
    </div>
  );
}

export default view(Burger);