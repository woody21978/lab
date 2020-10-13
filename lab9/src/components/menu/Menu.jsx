import React from "react";
import Burger from "../burger/Burger.jsx";
import Drawer from "../drawer/Drawer.jsx";
import "./Menu.scss";

function Menu() {

  return (
    <div className="menu">
      <Burger/>
      <Drawer/>
    </div>
  );
}

export default Menu;
