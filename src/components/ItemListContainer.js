import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import items from "../utils/items";
import Loader from "./Loader";

function onAdd(number) {
  alert("Tienes seleccionados " + number + " items.");
}

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="container-sm p-2">
        <div className="d-flex gap-3 justify-content-center align-items-around mt-5 mb-5 flex-wrap">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
