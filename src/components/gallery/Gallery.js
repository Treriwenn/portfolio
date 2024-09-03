import React from "react";
import { Link } from "react-router-dom";
import projects from "../../datas/project.json";
import Card from "../cards/Card";

const Gallery = () => {
  return (
    <div className="home_gallery">
      {projects.map((project) => {
        return (
          <article key={project.id}>
            <Link to={`/project/${project.id}`}>
              <Card image={project.cover} title={project.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
