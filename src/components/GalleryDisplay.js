import React, { useEffect, useState } from "react";
import { galleryData } from "../data/galleryData";
import Card from "./Card";

const GalleryDisplay = () => {
  const [gallery] = useState(galleryData);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = [
    "Mariage",
    "Grossesse",
    "Bébé",
    "Famille",
    "Baptême",
    "Couple",
    "Portrait",
  ];

  return (
    <main>
      <div className="filter-container">
        <ul className="radio-container">
          {radios.map((cat) => (
            <li>
              <input
                type="radio"
                id={cat}
                name="catRadio"
                checked={cat === selectedRadio}
                onClick={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor="catRadio">{cat}</label>
            </li>
          ))}
        </ul>

        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )}
      </div>

      <div className="gallery">
        {gallery
          .filter((gal) => gal.cat === selectedRadio)
          .map((gal) => (
            <Card galleryNumber={gal.id} />
          ))}
      </div>
    </main>
  );
};

export default GalleryDisplay;
