import NavBar from "../src/components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      {/* <ItemListContainer greeting="Bienvenido a nuestra tienda online!" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
