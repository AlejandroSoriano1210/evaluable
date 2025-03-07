import { useState } from "react";
import "./Cart.css";
import Button from "./Button";

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
      <Button
        texto={`🛒 (${carrito.length})`}
        onClick={() => setEstaAbierto(!estaAbierto)}
        estilo="carrito-boton"
      />

      {estaAbierto && (
        <div className="carrito-contenedor">
          <h2>Carrito de Compras</h2>
          <ul>
            {obtenerResumenCarrito().map((item) => (
              <li key={item.nombre}>
                {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
                
                <Button
                  texto="Quitar 1"
                  onClick={() => disminuirCantidad(item.nombre)}
                  estilo="boton-disminuir"
                />

                <Button
                  texto="Eliminar"
                  onClick={() => eliminarDelCarrito(item.nombre)}
                  estilo="boton-eliminar"
                />
              </li>
            ))}
          </ul>

          <p>Total: ${total.toFixed(2)}</p>

          <Button
            texto="Vaciar Carrito"
            onClick={vaciarCarrito}
            estilo="carrito-general"
          />

          <Button
            texto="Cerrar"
            onClick={() => setEstaAbierto(false)}
            estilo="carrito-general"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
