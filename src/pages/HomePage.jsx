import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Button from "../components/Button";
import "../components/Cart.css";
import "../pages/HomePage.css";  // Asegurar que se importe correctamente

// Importa imágenes dinámicamente
const images = import.meta.glob("../assets/*", { eager: true });

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Asegurar que cart y setCart están definidos

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        // Cargar imágenes dinámicamente
        const updatedProducts = data.map((product) => {
          const imagePath = `../assets/${product.image}`;
          return {
            ...product,
            image: images[imagePath]?.default || ""
          };
        });

        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div className="homepage-container">
      <h1>Bienvenido a la tienda</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <Button text="Agregar al Carrito" onClick={() => setCart([...cart, product])} style="primary" />
            </div>
          </div>
        ))}
      </div>
      {/* Asegurar que Cart recibe correctamente las props */}
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default HomePage;
