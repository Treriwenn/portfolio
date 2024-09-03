//import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFichProject from "../../datas/project.json";
import Tag from "./Tag";
import Banner from "../banner/Banner"
import Carrousel from "./Carrousel";
// import Collapse from "../collapse/Collapse";
// import Carrousel from "../carrousel/Carrousel";
// import Rate from "./Rate";
// import Host from "./Host";

const FicheProjectDisplay = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const ficheProject = DataFichProject.find((project) => project.id === id);

  /* Tags */
  const tagsProject = ficheProject?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
//   const competence = ficheProject?.competence.map((competence, i) => {
//     return (
//       <ul key={i}>
//         <li>{competence}</li>
//       </ul>
//     );
//   });

  return (
    <>
      {ficheProject ? (
        <div className="Fiche-container">
          <Banner image={require(`../../assets/images/project/${ficheProject.cover}`)} texte={ficheProject.title}/>
          <section className="Fiche-logement">
            <div className="description-info__titletags__title">
                    </div>
                <div className="description-info">
                    <div className="description-info__titletags">
                    {/* Tags */}
                    <div className="description-info__titletags__tagsgroupe">
                        {/* <h2>Compétence utilisé</h2> */}
                        <div className="description-info__titletags__tagsgroupe__tags">
                            {tagsProject}
                        </div>
                    
                    </div>
                    <div className="description-info__description">
                        <div className="description-info__description__text">
                            <p>{ficheProject.description}</p>
                            <div className="description-info__description__text__link">
                                <a href={ficheProject.link}>Code GitHub</a>
                            </div>
                            {ficheProject.linkPage ?
                                <div className="description-info__description__text__link">
                                    <a href={ficheProject?.linkPage}>Lien Page</a>
                                </div>

                                : null
                            }
                        </div>
                        <Carrousel slides={ficheProject?.pictures}/>
                    </div>
                </div>
                </div>
            </section>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default FicheProjectDisplay;
