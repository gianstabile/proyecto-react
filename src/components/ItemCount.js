import React, { Component, useEffect, useState } from "react";
import { Button } from "reactstrap";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container d-flex gap-3 p-3 flex-column">
      <div className="d-flex flex-row gap-4 justify-content-center">
        <Button color="dark" onClick={subtract}>
          -
        </Button>
        <h3>{count}</h3>
        <Button color="dark" onClick={add}>
          +
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button color="dark"
          onClick={() => onAdd(count)}
        >
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
