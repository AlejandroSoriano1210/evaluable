import { useState } from "react";
import "./Cart.css";

const Cart = ({ carrito = [], setCarrito }) => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const obtenerResumenCarrito = () => {
    const resumen = {};
    carrito.forEach((item) => {
      if (resumen[item.nombre]) {
        resumen[item.nombre].cantidad += 1;
      } else {
        resumen[item.nombre] = { ...item, cantidad: 1 };
      }
    });
    return Object.values(resumen);
  };

  const eliminarDelCarrito = (nombre) => {
    setCarrito(carrito.filter((item) => item.nombre !== nombre));
  };

  const disminuirCantidad = (nombre) => {
    const index = carrito.findIndex((item) => item.nombre === nombre);
    if (index !== -1) {
      const carritoActualizado = [...carrito];
      carritoActualizado.splice(index, 1);
      setCarrito(carritoActualizado);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="carrito-wrapper">
      <button className="carrito-boton" onClick={() => setEstaAbierto(!estaAbierto)}>
        🛒 ({carrito.length})
      </button>

      {estaAbierto && (
        <div className="carrito-contenedor">
          <h2>Carrito de Compras</h2>
          <ul>
            {obtenerResumenCarrito().map((item) => (
              <li key={item.nombre}>
                {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
                <button onClick={() => disminuirCantidad(item.nombre)}>-</button>
                <button onClick={() => eliminarDelCarrito(item.nombre)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={vaciarCarrito} className="carrito-general">Vaciar Carrito</button>
          <button onClick={() => setEstaAbierto(false)} className="carrito-general">Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
