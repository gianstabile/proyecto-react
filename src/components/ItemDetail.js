import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="container-md p-5 border rounded">
      <div className="row gy-1">
        <div className="col-4 gx-1">
          <img className="img-fluid" src={data.image} />
        </div>

        <div className="col-5 item__info ps-5 pt-3">
          <h2>{data.title}</h2>
          <p className="fs-5 fw-bold">Referencia: {data.reference}</p>
          <p className="fs-5 pt-3 pe-4">{data.extDescription}</p>
        </div>

        <div className="col-3 gx-1 d-flex flex-column align-items-center border rounded">
          <h5 className="flex-grow-1 fs-2 mt-5 text-end">${data.price}</h5>
          <p className="fs-5 text-end p-3">Stock: {data.stock} unidades.</p>
          <div className="mb-5">
            <ItemCount initial={1} stock={data.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
