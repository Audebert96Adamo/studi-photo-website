import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          end
        >
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to={"/gallery"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Gallery</li>
        </NavLink>

        <NavLink
          to={"/tarifs"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Tarifs</li>
        </NavLink>

        <NavLink
          to={"/contact"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
