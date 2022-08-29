import ItemCount from "./ItemCount";

const onAdd = (number) => {
  alert("Tienes seleccionados " + number + " items.");
};

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-sm p-2">
      <h4>{greeting}</h4>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
