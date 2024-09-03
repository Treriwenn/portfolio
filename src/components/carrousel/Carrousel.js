import React, { useState } from "react";
import DataProject from "../../datas/project.json";
// import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Carrousel() {

  const slides = DataProject.map((project) => project );
  /* Crée un Hook d'état */
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  const length = slides.length; //longueur du tableau de slides

  /**Function pour l'image precedente */
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  /**Function pour l'image suivante */
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}
      {slides.map((project, index) => {

        return (
          <Link to={`/project/${project.id}`}>
            <div key={index} className={index === current ? "slider active" : "slider"}>
              {index === current && (
                <img src={require(`../../assets/images/project/${project.cover}`)} alt="img-appartement" className="slide__image" />
              )}
              {index === current && length > 1 && (
                <div className="slider__title">
                  {project.title}
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Carrousel;
