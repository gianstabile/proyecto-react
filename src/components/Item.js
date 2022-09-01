import React from "react";
import "./Item.css";

const Item = ({ info }) => {
  return (
      <div className="card card__container">
        <img className="card-img-top" src={info.image} alt={info.alt} />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">{info.description}</p>
          <p className="card-text h5 p-2">Precio: ${info.price}</p>
          <a href="#" className="btn btn-dark">
            Ver detalle
          </a>
          <p className="card-text p-2">Stock: {info.stock} unidades</p>
        </div>
      </div>
  );
};

export default Item;
