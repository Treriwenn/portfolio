import React from "react";

function Tag({ nom }) {
  return (
    <div className="tag-container">
      <img 
        src={require(`../../assets/images/icon/${nom}.webp`)} 
        alt="Icône" 
        className="tag-container__icon"
      />
      <span className="tag-container__button">{nom}</span>
    </div>
  );
}

export default Tag;
