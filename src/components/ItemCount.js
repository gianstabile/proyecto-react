import React, { Component, useEffect, useState } from "react";

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
    <div className="container d-flex gap-3 p-3">
      <button type="button" className="btn btn-dark" onClick={subtract}>-</button>
      <h3>{count}</h3>
      <button type="button" className="btn btn-dark" onClick={add}>+</button>
      
    
        <button type="button" className="btn btn-dark" onClick={() => onAdd(count)}>Add to Cart</button>
  
    </div>
  );
};

export default ItemCount;
