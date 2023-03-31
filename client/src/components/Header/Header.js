import React from "react";
import "../../css/Header/Header.css";
import { words } from "../../words";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">{words.headerTitle}</div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/orders"}>Orders</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
