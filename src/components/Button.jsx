import "./Boton.css";

const Boton = ({ texto, onClick, estilo }) => {
  return (
    <button className={`boton-personalizado ${estilo}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
