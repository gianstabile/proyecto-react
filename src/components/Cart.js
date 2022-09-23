import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Cart.css";
import { doc, addDoc, updateDoc, collection, getFirestore, serverTimestamp, increment} from "firebase/firestore";
import Loader from "./Loader";

const Cart = () => {
  const { clearCart, cartList, removeItem, totalPrice } =
    useContext(CartContext);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Comprador hardcodeado
  const order = {
    buyer: {
      name: "Juan Pablo",
      email: "juanporozco@gmail.com",
      phone: "29848564287",
      address: "Libertad 150",
    },
    date: serverTimestamp(),
    items: cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.qty,
    })),
    total: totalPrice(),
  };

  //Función de terminar compra
  const createOrder = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) =>
        alert("Tu orden de compra se creó correctamente." + "\n" + "ID:  " + id)
      )
      .catch((err) => console.log(err));
    //actualizo el stock
    cartList.map((item) => {
      const itemRef = doc(db, "items", item.id);
      updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });
    clearCart();
  };

  if (cartList.length === 0) {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="mb-4 container">
            <div className="container d-flex justify-content-between">
              <h3>Carrito de compra</h3>
              <button
                onClick={clearCart}
                className="btn btn-danger align-items-end"
              >
                Limpiar todo
              </button>
            </div>
            <div className="container mt-3 mb-5">
              <p className="fs-5">No tienes elementos añadidos a tu carrito.</p>
              <Link to="/">
                <Button color="dark">Ir a comprar</Button>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mb-4 container">
          <div className="container d-flex justify-content-between">
            <h3>Carrito de compra</h3>
            <button
              onClick={clearCart}
              className="btn btn-danger align-items-end"
            >
              Limpiar todo
            </button>
          </div>
          <div className="row">
            <div className="col-9 container">
              <div className="row m-3 mt-5 gap-3 justify-content-between align-items-center">
                <div className="container col-1">
                  <h6>Thumbnail</h6>
                </div>
                <div className="container col-4">
                  <h6>Detalle de producto</h6>
                </div>
                <div className="container col-1">
                  <h6>Cantidad</h6>
                </div>
                <div className="container col-1">
                  <h6>$ Un.</h6>
                </div>
                <div className="container col-1">
                  <h6>Subtotal</h6>
                </div>
                <div className="container col-1">
                  <h6>Eiminar</h6>
                </div>
              </div>

              {cartList.map((item) => (
                <div key={item.id} className="container mt-1 p-1">
                  <div className="row border rounded m-1 justify-content-between align-items-center p-2">
                    <div className="col-1">
                      <img
                        className="img-thumbnail item__cart__img"
                        src={item.image}
                        alt={item.alt}
                      />
                    </div>
                    <div className="col-4">
                      <p className="fs-5 lead">{item.title}</p>
                    </div>
                    <div className="col-1">
                      <p className="fs-5 lead text-center">x {item.qty}</p>
                    </div>
                    <div className="col-1">
                      <p className="fs-5 text-center">${item.price}</p>
                    </div>
                    <div className="col-1">
                      <p className="fs-5 text-center">
                        ${item.qty * item.price}
                      </p>
                    </div>
                    <div className="col-1">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-dark me-2 ms-3"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-3 container justify-content-center">
              <div className="row mt-5 justify-content-between align-items-center">
                <div>
                  <h5 className="text-center">Resumen de compra</h5>
                </div>
              </div>
              <div className="container p-3">
                <div className="border rounded p-4 d-flex flex-column gap-4 justify-content-between align-items-center">
                  <h6>Subtotal: ${totalPrice()}</h6>
                  <h6>
                    Envío:
                    <span className="text-success"> FREE</span>
                  </h6>
                  <h6>
                    <span className="text-success"> Acepta devolución</span>
                  </h6>
                  <h5>
                    {" "}
                    Total: <span className="text-success">${totalPrice()}</span>
                  </h5>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-1">
                <Button color="dark" className="p-3" onClick={createOrder}>
                  Terminar compra
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
