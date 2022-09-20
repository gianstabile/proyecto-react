import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Cart.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { clearCart, cartList, removeItem, totalPrice } =
    useContext(CartContext);

  //Comprador hardcodeado
  const order = {
    buyer: {
      name: "Juan Pablo",
      email: "juanporozco@gmail.com",
      phone: "29848564287",
      address: "Libertad 150",
    },
    items: cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.qty,
    })),
    total: totalPrice(),
  };

  //Función de terminar compra
  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => console.log(id));
  };

  //Mensaje cuando el carrito está vacío
  if (cartList.length === 0) {
    return (
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
          <p className="fs-5">No tienes elementos añadidos al carrito.</p>
          <Link to="/">
            <Button color="dark">Ir a comprar</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
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
        <div className="row m-3 gap-3 justify-content-between align-items-center mt-5 ">
          <div className="container col-1">
            <h6>Thumbnail</h6>
          </div>
          <div className="container col-5">
            <h6>Detalle de producto</h6>
          </div>
          <div className="container col-1">
            <h6>Cantidad</h6>
          </div>
          <div className="container col-1">
            <h6>$ Unidad</h6>
          </div>
          <div className="container col-1">
            <h6>Subtotal</h6>
          </div>
          <div className="container col-1">
            <h6>Eiminar</h6>
          </div>
        </div>

        {cartList.map((item) => (
          <div key={item.id} className="container">
            <div className="row border rounded m-3 gap-3 justify-content-between align-items-center p-2">
              <div className="col-1">
                <img
                  className="img-thumbnail item__cart__img"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <div className="col-5">
                <p className="fs-5 lead">{item.title}</p>
              </div>
              <div className="col-1">
                <p className="fs-5 lead ms-4">x {item.qty}</p>
              </div>
              <div className="col-1">
                <p className="fs-5 ms-2">$ {item.price}</p>
              </div>
              <div className="col-1">
                <p className="fs-5 ms-1">$ {item.qty * item.price}</p>
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
        <div className="container mt-3 p-2 d-flex justify-content-end">
          <h5 className="border rounded p-4">
            Total: <span className="text-success">${totalPrice()}</span>
          </h5>
        </div>
        <div className="d-flex justify-content-end p-2">
          <Button color="dark" className="p-3" onClick={handleClick}>
            Terminar compra
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
