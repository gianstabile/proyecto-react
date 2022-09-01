import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return data.map((toy) => <Item key={toy.id} info={toy} />);
};

export default ItemList;
