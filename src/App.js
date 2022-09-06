import NavBar from "../src/components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="" />
            }
          />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
