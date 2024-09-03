import React from 'react';


function Card({image, title}) {


    return (
      <div className="card">
        <img src={require(`../../assets/images/project/${image}`)} alt={title} className="card_img" />
        <div className="card_overlay"></div>

        <h2 className="card_title">{title}</h2>
      </div>
    );
}

export default Card;
