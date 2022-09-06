import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
  return (
    <div className="card card__container">
      <img className="card-img-top" src={info.image} alt={info.alt} />
      <div className="card-body">
        <div className="d-flex flex-column justify-content-start">
          <h5 className="card-title text-center">{info.title}</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center pt-2">
          <p className="card-text h5 p-2">Precio: ${info.price}</p>
          <Link to={`/item/${info.id}`} className="btn btn-dark">
            Ver detalle
          </Link>
          <p className="card-text p-2">Stock: {info.stock} unidades</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
