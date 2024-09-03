import React from "react";

const images = require.context('../../assets/images/icon', false, /\.(webp)$/);


function Competence() {
  return (
    <div className="competence">
      {images.keys().map((imagePath, index) => {
        // Extraire le nom du fichier à partir du chemin
        const fileName = imagePath.replace('./', '').split('.')[0];

        return (
          <div key={index} className="competence__card">
            <img className="competence__card__image" src={images(imagePath)} alt={fileName} />
            <p className="competence__card__texte">{fileName}</p> {/* Afficher le nom du fichier */}
          </div>
        );
      })}
    </div>
  );
}

export default Competence;
