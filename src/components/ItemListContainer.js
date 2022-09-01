import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const toys = [
  {
    id: 1,
    image:
      "https://ss-static-01.esmsv.com/id/109667/productos/obtenerimagen/?id=15637&useDensity=false&width=1280&height=720&tipoEscala=contain",
    title: "DADOS KAMASUTRA POSICIONES",
    description: "Pequeños Regalos Sexys. Juego de dados, daditos.",
    alt: "Dados Kamasutra Posiciones",
    price: 1200,
    stock: 100,
  },
  {
    id: 2,
    image:
      "https://ss-static-01.esmsv.com/id/109667/productos/obtenerimagen/?id=34518&useDensity=false&width=1280&height=720&tipoEscala=contain",
    title: "SHOW YOUR HEART BUBBLE GUM 50 ml",
    description:
      "Aceite dual para masajes & Lubricante íntimo. Aroma: Chicle. Marca: Sexitive",
    alt: "Aceite para masajes y lubricante íntimo",
    price: 300,
    stock: 150,
  },
  {
    id: 3,
    image:
      "https://ss-static-01.esmsv.com/id/109667/productos/obtenerimagen/?id=17951&useDensity=false&width=1280&height=720&tipoEscala=contain",
    title: "COLLAR DE CUERO CON ARGOLLA",
    description: "Choker de cuero eco con corazón y cadenas. Sado, BDSM, Heavy Metal, Dark",
    alt: "Collar de cuero con argolla",
    price: 2500,
    stock: 50,
  },
  {
    id: 4,
    image:
      "https://ss-static-01.esmsv.com/id/109667/productos/obtenerimagen/?id=28340&useDensity=false&width=1280&height=720&tipoEscala=contain",
    title: "ANTIFÁZ ECOLÓGICO COLORES",
    description:
      "Antifaz vegano de charol. Varios colores disponibles a elección. Marca: KSad.",
    alt: "Antifáz ecológico colores",
    price: 1500,
    stock: 50,
  },
];

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
    <div className="container-sm p-2">
      <h4>{greeting}</h4>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <div className="d-flex gap-3 justify-content-center m-5">
        <ItemList data={data} />
      </div>
    </div>
  );
};

export default ItemListContainer;
