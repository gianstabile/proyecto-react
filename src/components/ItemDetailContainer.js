import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Button } from "reactstrap";

const item = {
  id: 1,
  categoryId: 2,
  image:
    "https://wellcomedepot.com/wp-content/uploads/2021/12/dado-12-posiciones.jpg",
  title: "DADOS KAMASUTRA POSICIONES",
  description: "Pequeños Regalos Sexys. Juego de dados, daditos.",
  extDescription:
    "Dados eróticos para jugar en pareja. Indican partes del cuerpo y acciones a realizar. Dale un toque especial a tus noches de pasión. Vienen en una elegante bolsita.",
  alt: "Dados Kamasutra Posiciones",
  price: 1200,
  stock: 100,
  reference: "t0105",
};

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
