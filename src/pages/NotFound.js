import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-Content">
        <h2>Erreur 404</h2>
        <NavLink to={"/"}>
          <h3>
            Retour a l'accueil <i className="fas fa-home"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
