import React, { useState } from "react";
import { galleryData } from "../data/galleryData";

const Card = ({ galleryNumber }) => {
  const [currentGallery] = useState(galleryData[galleryNumber]);

  return (
    <div className="project-main">
      <div className="project-content"></div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{currentGallery.title}</h3>
          </span>
          <img
            src={currentGallery.img}
            alt={currentGallery.title}
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
