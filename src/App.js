import NavBar from "../src/components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
import Loader from "./components/Loader";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div>
            {loading ? (
              <Loader />
            ) : (
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            )}
          </div>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
