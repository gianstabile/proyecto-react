import NavBar from "../src/components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;
