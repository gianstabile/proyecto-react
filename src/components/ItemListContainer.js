import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const queryCollection = collection(db, "items");
    if (category) {
      const queryFilter = query(queryCollection, where("category", "==", category));
      getDocs(queryFilter).then((res) => setData(res.docs.map((item) => ({ id: item.id, ...item.data() }))));
    } else {
      getDocs(queryCollection).then((res) => setData(res.docs.map((item) => ({ id: item.id, ...item.data() }))));
    }
  }, [category]);

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
