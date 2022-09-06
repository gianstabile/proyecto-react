import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Button } from "reactstrap";
import items from "../utils/items";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1500);
    });

    getData.then((res) =>
      setData(res.find((item) => item.id === parseInt(id)))
    );
  }, []);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
