import React from "react";
import DataFichProject from "../../datas/project.json";

function Projet({id}) {
    const ficheProject = DataFichProject.find((project) => project.id === id);
    console.log(ficheProject)
    return (
        <div className="projet-container">
            <div>
                <img src={require(`../../assets/images/project/${ficheProject?.cover}`)}></img>
            </div>
            <div>
                <h3>{ficheProject.title}</h3>
                <p>{ficheProject.description}</p>

                {ficheProject.linkPage ?
                    <div className="description-info__description__text__link">
                        <a href={ficheProject?.linkPage}>Lien Page</a>
                    </div>

                    : null
                }
               
            </div>
        </div>
    );
}

export default Projet;
