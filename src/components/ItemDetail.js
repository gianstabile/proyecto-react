import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Button } from "reactstrap";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
import "boxicons";
import Loader from "./Loader";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useContext(CartContext);
  const onAdd = (qty) => {
    setGoToCart(true);
    addItem(data, qty);
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-md p-5 border rounded">
          <div className="row gy-1">
            <div className="col-4 gx-1">
              <img className="img-fluid rounded" src={data.image} />
            </div>

            <div className="col-5 item__info ps-5 pt-3">
              <h2>{data.title}</h2>
              <p className="fs-5">
                <span className="fw-bold">Referencia:</span> {data.reference}
              </p>
              <p className="fs-5 pt-3 pe-4">{data.description}</p>
            </div>

            <div className="col-3 gx-1 d-flex flex-column justify-content-around align-items-center border rounded">
              <h5 className="fs-2 mt-5 text-end pb-3">${data.price}</h5>
              <p className="fs-5 text-end pb-3 text-success">
                Stock: {data.stock} unidades.
              </p>
              <p className="text-success pt-2 fs-6 d-flex align-items-center gap-1">
                <box-icon type="solid" name="truck"></box-icon>
                Envío: FREE
              </p>
              <p className="text-success pt-2 fs-6 d-flex align-items-center gap-1">
                <box-icon type="solid" name="discount"></box-icon>
                Cuotas sin interés
              </p>
              <p className="pt-2 fs-6 text-center d-flex align-items-center gap-1">
                <box-icon type="solid" name="left-down-arrow-circle"></box-icon>
                Devolución bajo condiciones
              </p>
              <div className="mb-5 pt-4">
                {goToCart ? (
                  <div>
                    <Link to="/">
                      <Button color="dark">Seguir comprando</Button>
                    </Link>
                    <Link to="/cart">
                      <Button color="dark" className="m-1">
                        Ir al carrito
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default ItemDetail;
