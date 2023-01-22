import React from "react";
import Navigation from "../components/Navigation";
import GalleryDisplay from "../components/GalleryDisplay";
import SocialNetWork from "../components/SocialNetWork";

const Gallery = () => {
  return (
    <main>
      <div className="gallery">
        <Navigation />
        <SocialNetWork />
        <GalleryDisplay />
      </div>
    </main>
  );
};

export default Gallery;
