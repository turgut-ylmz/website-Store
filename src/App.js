import axios from "axios";
import { React, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
// import { data } from "./helpers/data";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const baseUrl = "https://fakestoreapi.com/products";
  const getProducts = (url = "") => {
    setLoading(true);
    console.log(baseUrl + url);
    axios
      .get(baseUrl + url)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const handleAddToCart = (product, quantity) => {
    const isAdded = cart.some((item) => item.id === product.id);
    !isAdded && setCart([...cart, { ...product, quantity }]);
  };

  const handleUpdateCartQty = (productId, quantity) => {
    if (quantity === 0) {
      handleRemove(productId);
    } else {
      const updatedCard = cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCart(updatedCard);
    }
  };

  const handleRemove = (productId) => {
    const filterCard = cart.filter((item) => item.id !== productId);
    setCart(filterCard);
  };

  const handleEmptyCart = () => setCart([]);

  return (
    <div>
      <Navbar
        totalItems={cart?.length}
        showCard={showCard}
        setShowCard={setShowCard}
      />

      {showCard ? (
        <Cart
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemove={handleRemove}
          handleEmptyCart={handleEmptyCart}
        />
      ) : (
        <Products
          products={products}
          handleAddToCart={handleAddToCart}
          loading={loading}
          getProducts={getProducts}
        />
      )}
    </div>
  );
}

export default App;
