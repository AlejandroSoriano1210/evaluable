import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Button from "../components/Button";
import "../components/Cart.css";
import "../pages/HomePage.css";

const imagenes = import.meta.glob("../assets/*", { eager: true });

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const productosActualizados = data.map((producto) => {
          const rutaImagen = `../assets/${producto.imagen}`;
          return {
            ...producto,
            imagen: imagenes[rutaImagen]?.default || ""
          };
        });

        setProductos(productosActualizados);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div className="pagina-principal-contenedor">
      <h1>Bienvenido a la tienda</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-tarjeta">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toFixed(2)}</p>
              <Button texto="Agregar al Carrito" onClick={() => setCarrito([...carrito, producto])} estilo="primario" />
            </div>
          </div>
        ))}
      </div>
      <Cart carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
};

export default HomePage;
