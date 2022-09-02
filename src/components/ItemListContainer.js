import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import toys from "../utils/toys";
import Loader from "./Loader";

function onAdd(number) {
  alert("Tienes seleccionados " + number + " items.");
}

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(toys);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="container-sm p-2">
        <h4>{greeting}</h4>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        <div className="d-flex gap-3 justify-content-center m-5">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
