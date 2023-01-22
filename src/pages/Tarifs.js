import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import SocialNetWork from "../components/SocialNetWork";

const Tarifs = () => {
  return (
    <div className="tarifs">
      <Navigation />
      <SocialNetWork />
      <h1>Tarifs et prestations :</h1>
      <div className="tarifs-container">
        <ul className="list">
          <li>
            <ul className="tarif-cat">
              <h3>Juste moi</h3>
              <img
                src="./assets/img/portrait5.jpg"
                alt="photo de portrait homme"
              />
              <li className="price">130€</li>
              <li>Séance pour une personne, en extérieur ou en studio</li>
            </ul>
          </li>
          <li>
            <ul className="tarif-cat">
              <h3>Pour deux</h3>
              <img src="./assets/img/couple4.jpg" alt="photo de couple" />
              <li className="price">195€</li>
              <li>Pour deux personnes, en extérieur ou en studio</li>
            </ul>
          </li>
          <li>
            <ul className="tarif-cat">
              <h3>Famille</h3>
              <img src="./assets/img/family6.jpg" alt="photo de famille" />
              <li className="price">220€</li>
              <li>
                Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou
                en studio 30 euros en supplément par personne au-delà de 4
                (hormis enfant jusqu’à 2 ans)
              </li>
            </ul>
          </li>
          <li>
            <ul className="tarif-cat">
              <h3>Il était une fois</h3>
              <img
                src="./assets/img/pregnant5.jpg"
                alt="photo de femme enceinte"
              />

              <li className="price">160€</li>
              <li>
                Photo de grossesse (À votre domicile, en extérieur ou en studio)
              </li>
            </ul>
          </li>
          <li>
            <ul className="tarif-cat">
              <h3>Mon bébé</h3>
              <img src="./assets/img/baby2.jpg" alt="photo de bébé" />

              <li className="price">100€</li>
              <li>Photo d’enfant jusqu’à 3 ans (photo à domicile)</li>
            </ul>
          </li>
          <li>
            <ul className="tarif-cat">
              <h3>J’immortalise l’événement</h3>
              <img src="./assets/img/wedding2.jpg" alt="photo de femme marié" />

              <li className="price">sur mesure</li>
              <li>Prestation de mariage ou baptême sur devis</li>
            </ul>
          </li>
          <li>
            <ul className="devis-container">
              <NavLink
                to={"/contact"}
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="btn-devis">Demandez un devis</li>
              </NavLink>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tarifs;
